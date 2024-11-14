export const schema = {
  // Structured Data (JSON-LD) for rich results in search engines
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "EducationalOrganization",
    name: "Digitechmate",
    url: "https://www.digitechmate.com",
    logo: "https://www.digitechmate.com/brand/digitechmate.jpg",
    image: [
      "https://www.digitechmate.com/brand/digitechmate.jpg",
      "https://www.digitechmate.com/brand/digitechmate.png",
    ],
    hasMap: "https://g.page/digitechmate",
    sameAs: [
      "https://www.facebook.com/digitechmate/",
      "https://twitter.com/digitechmate",
      "https://www.instagram.com/digitechmate/",
      "https://www.linkedin.com/company/digitechmate/",
      "https://pinterest.com/estivasoftech/",
    ],
    // Description of the organization
    description:
      "Since 2013, Digitechmate has been a leader in equipping individuals with the skills needed to excel in today’s competitive tech industry. Offering comprehensive, job-oriented training in fields such as web development, digital marketing, full-stack development, MERN stack, ethical hacking, UI/UX design, and more, Digitechmate is dedicated to empowering students to thrive in the digital world. Our courses are designed by industry experts to reflect current market needs, emphasizing hands-on, project-based learning. Prepare for a successful tech career with Digitechmate’s cutting-edge training programs.",

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9990140888",
      contactType: "Tech-Support",
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
    // Additional organization details
    foundingDate: "2013-01-01", // Date of establishment
    founder: {
      "@type": "Person",
      name: "Rupesh Kumar", // Name of the founder (replace with the actual name)
    },
  },

  // List of offers provided by the organization
  offers: {
    "@type": "OfferCatalog",
    name: "Professional Training Courses", // Catalog name
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Digital Marketing Course", // Name of the course
          description:
            "At Digitechmate, we specialize in professional training designed to empower students, job seekers, and entrepreneurs in digital marketing. Our comprehensive courses, among the best in Delhi-NCR, cover essential topics such as SEO, PPC, SEM, SMM, email marketing, content marketing, affiliate marketing, Google Analytics, and more. Develop the skills and knowledge needed to excel in the dynamic digital landscape with our expert-led training programs.", // Course description
          url: "https://www.digitechmate.com/courses/digital-marketing", // Course URL
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Web Development Course", // Name of the course
          description:
            "Digitechmate delivers exceptional web development training in Delhi-NCR tailored to meet current industry demands. Our comprehensive course covers essential skills in coding, database management, and both front-end and back-end development. Students will master advanced programming languages, frameworks, and the latest technologies to create effective websites and web applications.", // Course description
          url: "https://www.digitechmate.com/courses/web-development", // Course URL
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Full Stack Development Course with Placement", // Name of the course
          description:
            "If you're seeking a comprehensive full-stack development course with placement opportunities in Delhi-NCR, Digitechmate is your ideal choice. Our industry-focused program covers all critical elements of web development, ensuring you gain the skills and knowledge needed to succeed in the tech landscape. Join us and kickstart your career in full-stack development today!", // Course description
          url: "https://www.digitechmate.com/full-stack-developer", // Course URL
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "MERN Stack Developer Course with Placement", // Name of the course
          description:
            "Looking to become a skilled MERN stack developer? Digitechmate’s comprehensive course in Delhi NCR equips students with the essential skills and knowledge needed to thrive in today’s competitive job market. Our curriculum is tailored to industry standards, ensuring you gain practical expertise that meets the demands of employers. Join us to launch your career in full-stack development!", // Course description
          url: "https://www.digitechmate.com/mern-stack-development", // Course URL
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "UI/UX Design Training Institution", // Name of the course
          description:
            "At Digitechmate, our UI/UX design course is crafted in collaboration with industry experts to provide a comprehensive learning experience. Covering a wide range of concepts from beginner to advanced levels, our program equips you with the skills needed to thrive as a successful UI/UX designer, complete with placement assistance to launch your career.", // Course description
          url: "https://www.digitechmate.com/ui-ux-design", // Course URL
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Best Ethical Hacking Course in Delhi NCR", // Name of the course
          description:
            "Digitechmate’s Ethical Hacking course in Delhi provides comprehensive training from basic networking concepts to advanced hacking techniques. Covering tools like Linux, Metasploit, Wireshark, and Burpsuite, this program equips you with the skills needed to excel as a professional ethical hacker.", // Course description
          url: "https://www.digitechmate.com/ethical-hacking-course", // Course URL
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Graphic Designing Institute in Delhi", // Name of the course
          description:
            "Digitechmate offers expert training in Adobe Photoshop, Illustrator, InDesign, and more. Our courses cover essential design principles like typography, color theory, and layout design, equipping students with the skills needed to excel in the creative industry.", // Course description
          url: "https://www.digitechmate.com/graphic-design-institute", // Course URL
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Front End Development Course with Placement", // Name of the course
          description:
            "Digitechmate offers a professional front-end development course focused on creating dynamic, user-friendly websites. Our training is based on real client projects, ensuring you gain practical, hands-on experience. With placement assistance, we're your ideal choice to kickstart a career in front-end development.", // Course description
          url: "https://www.digitechmate.com/front-end-development", // Course URL
        },
      },
    ],
  },
};
