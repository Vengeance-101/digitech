export async function GenerateMetadata(seoData) {
  const {
    title,
    description,
    keywords,
    author,
    verification,
    canonicalUrl,
    twitter,
    og,
    geo,
  } = seoData;

  return {
    title,
    description,
    keywords: keywords?.join(", ") || "",
    authors: [{ name: author }],
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: verification.google,
      microsoft: verification.microsoft,
    },
    openGraph: {
      title: og.title,
      description: og.description,
      url: og.url,
      images: [{ url: og.image }],
      type: og.type,
    },
    twitter: {
      card: twitter.card,
      creator: twitter.creator,
      site: twitter.site,
      title: twitter.title,
      description: twitter.description,
      images: [{ url: twitter.image }],
    },
    geo: {
      placename: geo.placename,
      position: geo.position,
      region: geo.region,
    },
  };
}

export default GenerateMetadata;
