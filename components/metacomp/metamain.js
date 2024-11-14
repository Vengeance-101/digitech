import React from "react";

export function generateMetaTags(data) {
  return data.map((item, i) => {
    const {
      title,
      description,
      keywords = [], // Set a default empty array for keywords
      author,
      canonicalUrl,
      verification,
      twitter,
      og,
      geo,
    } = item;

    return (
      <React.Fragment key={i}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={keywords.length ? keywords.join(", ") : ""}
        />
        <meta name="author" content={author} />
        <link rel="canonical" href={canonicalUrl} />

        <meta name="msvalidate.01" content={verification?.microsoft} />
        <meta name="google-site-verification" content={verification?.google} />

        <meta name="twitter:card" content={twitter?.card} />
        <meta name="twitter:creator" content={twitter?.creator} />
        <meta name="twitter:site" content={twitter?.site} />
        <meta name="twitter:title" content={twitter?.title} />
        <meta name="twitter:description" content={twitter?.description} />
        <meta name="twitter:image" content={twitter?.image} />

        <meta property="og:title" content={og?.title} />
        <meta property="og:description" content={og?.description} />
        <meta property="og:image" content={og?.image} />
        <meta property="og:url" content={og?.url} />
        <meta property="og:type" content={og?.type} />

        <meta name="geo.placename" content={geo?.placename} />
        <meta name="geo.position" content={geo?.position} />
        <meta name="geo.region" content={geo?.region} />
      </React.Fragment>
    );
  });
}
