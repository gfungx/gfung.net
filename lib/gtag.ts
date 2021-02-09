type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const pageview = (url: URL) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GTAG!, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
