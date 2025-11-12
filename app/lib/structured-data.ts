/**
 * JSON-LD Structured Data for SEO
 * Helps search engines understand the content and context of pages
 */

export interface Organization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
    availableLanguage: string[];
  };
  address: {
    "@type": string;
    addressCountry: string;
  };
}

export interface WebSite {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  potentialAction: {
    "@type": string;
    target: {
      "@type": string;
      urlTemplate: string;
    };
    "query-input": string;
  };
}

export interface Article {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": string;
    name: string;
    url: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
}

export interface Service {
  "@context": string;
  "@type": string;
  serviceType: string;
  provider: {
    "@type": string;
    name: string;
    url: string;
  };
  areaServed: string;
  description: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leapnorth.co";

/**
 * Organization Schema - Use on all pages
 */
export const organizationSchema: Organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Leap North",
  url: baseUrl,
  logo: `${baseUrl}/images/logos/logo.png`,
  description:
    "Digital marketing agency and automation experts helping businesses achieve sustainable growth through strategic marketing and intelligent automation.",
  sameAs: [
    // Add social media URLs when available
    // "https://www.linkedin.com/company/leapnorth",
    // "https://twitter.com/leapnorth",
    // "https://www.facebook.com/leapnorth",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX", // Update with real phone
    contactType: "Customer Service",
    email: "hello@leapnorth.co",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};

/**
 * WebSite Schema with Search Action - Use on homepage
 */
export const websiteSchema: WebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Leap North",
  url: baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/**
 * Generate Article Schema for blog posts
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  slug: string;
}): Article {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${baseUrl}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
      url: `${baseUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Leap North",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logos/logo.png`,
      },
    },
  };
}

/**
 * Generate Service Schema
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
}): Service {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: "Leap North",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    description: service.description,
  };
}

/**
 * Helper function to render JSON-LD script tag
 */
export function renderJsonLd(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
