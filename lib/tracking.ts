type EventName =
    | 'cta_click'
    | 'scroll_section'
    | 'form_submit'
    | 'plan_select'
    | 'faq_open';

interface TrackingPayload {
    event: EventName;
    label?: string;
    value?: string | number;
    section?: string;
}

/**
 * Fire a tracking event. Replace the console.log with your
 * actual analytics provider (e.g. gtag, Amplitude, Mixpanel).
 */
export function track(payload: TrackingPayload): void {
    if (typeof window === 'undefined') return;

    // Replace with: window.gtag?.('event', payload.event, { ... })
    console.info('[track]', payload);
}

/**
 * Track a CTA button click.
 */
export function trackCTA(label: string): void {
    track({ event: 'cta_click', label });
}

/**
 * Track a section becoming visible (via IntersectionObserver).
 */
export function trackSectionView(section: string): void {
    track({ event: 'scroll_section', section });
}

/**
 * Track a form submission.
 */
export function trackFormSubmit(formId: string): void {
    track({ event: 'form_submit', label: formId });
}

/**
 * Track a plan selection click.
 */
export function trackPlanSelect(planName: string): void {
    track({ event: 'plan_select', label: planName });
}
