const title = 'Geoffrey Fung - Developer and Student';
const description =
  'Front-end developer specialising in Javascript, student and professional procrasinator.';

const SEO = {
  title,
  titleTemplate: '%s - Geoffrey Fung',
  description,
  canonical: 'https://gfung.net',
  openGraph: {
    title,
    description,
    url: 'https://gfung.net',
    type: 'website',
    locale: 'en_gb',
    images: [
      {
        url: 'https://gfung.net/og.webp',
        alt: title,
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    handle: '@gfung_',
    site: '@gfung_',
    cardType: 'summary_large_image'
  }
};

export default SEO;
