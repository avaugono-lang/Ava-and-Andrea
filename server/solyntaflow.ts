import type { Notifiers } from './workflow.ts';

/**
 * GymTrack's own company on SolyntaFlow handles contact enquiries and WhatsApp.
 *
 * - An enquiry becomes a Customer Service ticket, so the team can follow it up there.
 * - A fee reminder is a ticket plus an agent reply. SolyntaFlow sends that reply on
 *   WhatsApp, bills it to the GymTrack company's wallet and records whether it
 *   arrived (delivery_status on the message).
 *
 * Settings: SOLYNTAFLOW_TOKEN (a GymTrack-company user's API token) and, if it is
 * not the live system, SOLYNTAFLOW_API_URL.
 */
export function solyntaflowNotifiers(env: NodeJS.ProcessEnv = process.env, fetcher: typeof fetch = fetch): Pick<Notifiers, 'enquiry' | 'whatsapp'> | null {
  const token = env.SOLYNTAFLOW_TOKEN;
  if (!token) return null;
  const base = (env.SOLYNTAFLOW_API_URL || 'https://solyntaflow.uc.r.appspot.com').replace(/\/+$/, '');

  async function call(path: string, body: unknown) {
    const response = await fetcher(`${base}/api/customer-service/${path}`, {
      method: 'POST',
      headers: { authorization: `Token ${token}`, 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const payload = (await response.json().catch(() => ({}))) as Record<string, any>;
    if (!response.ok) {
      const reason = typeof payload.detail === 'string' ? payload.detail : JSON.stringify(payload).slice(0, 200);
      throw new Error(`SolyntaFlow ${response.status}: ${reason}`);
    }
    return payload;
  }

  return {
    enquiry: async ({ name, phone, message }) => {
      await call('tickets/', {
        subject: `GymTrack enquiry from ${name}`.slice(0, 300),
        description: message,
        channel: 'web_chat',
        category: 'other',
        priority: 'medium',
        customer_name: name,
        customer_phone: phone,
      });
    },
    whatsapp: async ({ to, gymnastName, clubName, message }) => {
      const ticket = await call('tickets/', {
        subject: `Fee reminder for ${gymnastName}`.slice(0, 300),
        description: `${clubName}: ${message}`,
        channel: 'whatsapp',
        category: 'billing',
        priority: 'low',
        customer_name: gymnastName,
        customer_phone: `+${to}`,
      });
      const sent = await call('messages/', { ticket: ticket.id, body: `${clubName}: ${message}` });
      if (sent.delivery_status === 'sent') return { status: 'sent', detail: `ticket ${ticket.ticket_number ?? ticket.id}` };
      const reason = String(sent.delivery_error || 'SolyntaFlow did not confirm delivery.');
      return { status: 'failed', detail: sent.delivery_status === 'unknown' ? `Not confirmed: ${reason}` : reason };
    },
  };
}
