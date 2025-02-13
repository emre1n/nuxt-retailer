interface SeoOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  type?: 'website' | 'article' | 'product';
  image?: string;
  url?: string;
}

export const useSeo = (options: SeoOptions) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const defaultTitle = 'Retailer App';
  const defaultDescription =
    'A modern retail management platform for businesses';
  const defaultImage = '/images/og-image.jpg'; // Make sure this exists in your public folder

  const seoTitle = options.title
    ? `${options.title} | ${defaultTitle}`
    : defaultTitle;

  const canonicalUrl = options.url
    ? options.url
    : `${config.public.siteUrl}${route.path}`;

  useHead({
    title: seoTitle,
    meta: [
      {
        name: 'description',
        content: options.description || defaultDescription,
      },
      {
        name: 'keywords',
        content: options.keywords?.join(', ') || '',
      },
      // Open Graph
      {
        property: 'og:title',
        content: seoTitle,
      },
      {
        property: 'og:description',
        content: options.description || defaultDescription,
      },
      {
        property: 'og:type',
        content: options.type || 'website',
      },
      {
        property: 'og:image',
        content: options.image || defaultImage,
      },
      {
        property: 'og:url',
        content: canonicalUrl,
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: seoTitle,
      },
      {
        name: 'twitter:description',
        content: options.description || defaultDescription,
      },
      {
        name: 'twitter:image',
        content: options.image || defaultImage,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  });
};
