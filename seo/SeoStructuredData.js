import Script from "next/script";

// Enhanced Structured Data (JSON-LD) for rich results
const structuredData = {
  "@context": "https://schema.org/",
  "@type": "EducationalOrganization",
  name: "Digitechmate",
  url: "https://www.digitechmate.com",
  logo: "https://www.digitechmate.com/brand/digitechmate.png",
  image: ["https://www.digitechmate.com/brand/digitechmate.jpg"],
  hasMap: "https://g.page/digitechmate",
  sameAs: [
    "https://www.facebook.com/digitechmate/",
    "https://twitter.com/digitechmate",
    "https://www.instagram.com/digitechmate/",
    "https://www.linkedin.com/company/digitechmate/",
    "https://pinterest.com/estivasoftech/",
  ],
  description:
    "At Digitechmate, we believe in turning learning into opportunity. Whether you’re a beginner or looking to upskill, our expert-led courses—like Full Stack Development, UI/UX Design, Ethical Hacking (CEHv12), Graphic Design, and Front-End Development—are designed to meet real industry demands. We provide training based on real client projects and update all modules weekly to align with the latest industry tech—this is our USP.We don’t just teach skills; we build careers. With internships, personalized mentorship, and placement guarantees, Digitechmate ensures you are job-ready from day one. Step into the future with us and unlock your true potential in the tech world!",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9990140888",
    contactType: "Tech-Support",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "A - 1233/34, G. D. Colony, Mayur Vihar Phase-3",
    addressLocality: "New Delhi",
    postalCode: "110096",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6120046",
    longitude: "77.335496",
  },
  foundingDate: "2013-01-01",
  founder: {
    "@type": "Person",
    name: "Rupesh Kumar",
  },
  alumni: [
    {
      "@type": "Person",
      name: "Kavita Karki",
      description:
        "Software Engineer at Bilberrry, graduated from the full stack development course at Digitechmate.",
    },
    {
      "@type": "Person",
      name: "Pankaj Bhagat",
      description:
        "UI/UX designer at Altametrics, alumna of the UI/UX design program at Digitechmate.",
    },
    {
      "@type": "Person",
      name: "Hritik Kumar",
      description:
        "Front End Engineer at AstroSage, alumna of the Front end Engineer program at Digitechmate.",
    },
    {
      "@type": "Person",
      name: "Vishal Kumar",
      description:
        "Front End Engineer at Evolvous Limited, alumna of the Front end Engineer program at Digitechmate.",
    },
    {
      "@type": "Person",
      name: "Simran Rawat",
      description:
        "UI/UX Desginer at Networsys Technologies, alumna of the UI/UX Desginer program at Digitechmate.",
    },
    {
      "@type": "Person",
      name: "Sijo Jose",
      description:
        "UI Developer  at RailYatri, alumna of the UI Developer program at Digitechmate.",
    },
  ],
  awards: [
    {
      "@type": "Award",
      name: "Best Tech Training Institute in Delhi NCR",
      awarder: "Awards 2022",
      dateReceived: "2022-10-15",
    },
  ],
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Rahul Kumar",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
      },
      reviewBody:
        "The courses at Digitechmate are outstanding. The instructors are knowledgeable, and the practical approach made it easy to apply what I learned.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Priya Mehta",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5.0",
        bestRating: "5",
      },
      reviewBody:
        "I enrolled in the graphic designing course, and the experience was amazing. The hands-on projects and mentor support were top-notch.",
    },
  ],
  offers: {
    "@type": "OfferCatalog",
    name: "Professional Training Courses",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Digital Marketing Course",
          description:
            "Comprehensive training covering SEO, PPC, SMM, content marketing, affiliate marketing, and Google Analytics. Ideal for students, job-seekers, and entrepreneurs.",
          url: "https://www.digitechmate.com/courses/digital-marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Web Development Course",
          description:
            "Learn front-end and back-end development with hands-on experience using advanced frameworks and tools for web application development.",
          url: "https://www.digitechmate.com/courses/web-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Full Stack Development Course with Placement",
          description:
            "Industry-oriented training covering all aspects of full stack development. Includes placement assistance to help launch your career.",
          url: "https://www.digitechmate.com/full-stack-developer",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "MERN Stack Developer Course with Placement",
          description:
            "Tailored for aspiring developers, this program provides in-depth knowledge of MongoDB, Express, React, and Node.js, with hands-on projects.",
          url: "https://www.digitechmate.com/mern-stack-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "UI/UX Design Training Institution",
          description:
            "Learn design principles, wireframing, prototyping, and more with our expert-led program. Includes placement assistance.",
          url: "https://www.digitechmate.com/ui-ux-design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Best Ethical Hacking Course in Delhi NCR",
          description:
            "Learn networking, penetration testing, and malware analysis with hands-on practice using tools like Metasploit and Wireshark.",
          url: "https://www.digitechmate.com/ethical-hacking-course",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Graphic Designing Institute in Delhi",
          description:
            "Master tools like Photoshop and Illustrator while learning core design principles. Ideal for students aiming to excel in the creative industry.",
          url: "https://www.digitechmate.com/graphic-design-institute",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Front End Development Course with Placement",
          description:
            "Focused on building dynamic websites with HTML, CSS, JavaScript, and React. Includes real client projects and placement assistance.",
          url: "https://www.digitechmate.com/front-end-development",
        },
      },
    ],
  },
};

// ============================================
const SeoStructureData = () => {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
};

export default SeoStructureData;
