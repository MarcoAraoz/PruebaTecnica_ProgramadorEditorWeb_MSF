//group images from assets
import HeroImg from "./assets/hero_01.jpg";
import AboutImg from "./assets/about_01.jpg";
import featureImg_01 from "./assets/features_01.jpg";
import featureImg_02 from "./assets/features_02.jpg";
import featureImg_03 from "./assets/features_03.jpg";
import bg_featureImg_01 from "./assets/features_bg_01.jpg";
import bg_featureImg_02 from "./assets/features_bg_02.jpg";
import bg_featureImg_03 from "./assets/bg_featureImg_03.jpg";
import test_01 from "./assets/test_01.jpg";
//logo companies
import logo_company_00 from "./assets/capgemini.png";
import logo_company_01 from "./assets/chevez.png";
import logo_company_02 from "./assets/logo_Afterbanks.png";
import logo_company_03 from "./assets/logo_backbase.png";
import logo_company_06 from "./assets/logo_circulo (2).png";
import logo_company_07 from "./assets/logo_Conekta.png";
import logo_company_08 from "./assets/logo_docusign.png";
import logo_company_09 from "./assets/logo_freshworks.png";
import logo_company_10 from "./assets/logo_mercado.png";
import logo_company_11 from "./assets/logo_Nubarium.png";
import logo_company_12 from "./assets/logo_rocketcode.png";
import logo_company_13 from "./assets/logo_SAP.png";
import logo_company_14 from "./assets/logo_startup.png";
import logo_company_15 from "./assets/logo_strike.png";
import logo_company_16 from "./assets/logo_Unnax.png";
import logo_company_17 from "./assets/logo_Veridas.png";
import logo_company_18 from "./assets/logo_zendesk.png";
import logo_company_19 from "./assets/logoMicrosoft.png";
import logo_company_20 from "./assets/multiplica.png";
import logo_company_21 from "./assets/sensedia.png";

// nav Section Menu
export const navigationDataMenu = [
  {
    name: "Deliver",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Signup",
    href: "#",
  },
];

// HeroSection
export const heroData = {
  title: "OpenFinance 2023",
  subtitle: "Este 22 y 23 de Noviembre cambia el futuro del mundo financiero, nuestros asistentes interactúan con personas que están en la toma de decisiones de las empresas más reconocidas a nivel mundial.",
  btnText: "Get Started",
  image: HeroImg,
};

// FeaturesSection
export const featuresData = {
  title: "El evento anual más esperado de la industria FINTECH.",
  subtitle:
    "Año con año nuestro evento cambia el futuro del mundo financiero, nuestros asistentes interactúan con personas que están en la toma de decisiones de las empresas más reconocidas a nivel mundial.",
  list: [
    {
      image: featureImg_01,
      bgImage: bg_featureImg_03,
      title: "Premia las mentes más brillantes",
      description:
        "Un lugar donde las mejores 15 fintechs registradas pueden presentar su proyecto a los fondos más importantes del país y Silicon Valley, todo ello en un modelo 'PITCH ELEVATOR'.",
      linkText: "Learn more...",
      delay: "400",
    },
    {
      image: featureImg_01,
      bgImage: bg_featureImg_01,
      title: "Reconoce la innovación del sector Fintech",
      description:
        "Los premios GOFA AWARDS buscan identificar, destacar y honrar a lideres de la industria Fintech en México y Latinoamérica para que el ecosistema sea aún más rápido, eficiente e inclusivo.",
      linkText: "Learn more...",
      delay: "400",
    },
    {
      image: featureImg_03,
      bgImage: bg_featureImg_02,
      title: "¿Por qué asistir?",
      description:
        "Podrás hacer negocios y aprovechar las interacciones en el evento más esperado.",
      linkText: "Learn more...",
      delay: "400",
    },
    {
      image: featureImg_02,
      bgImage: bg_featureImg_02,
      title: "Payment",
      description:
        "Acceso a las ponencias más disruptivas de la industria. Crearás conexiones que cambien el rumbo de tu negocio.",
      linkText: "Learn more...",
      delay: "400",
    },
  ],
};

// AboutSection
export const aboutData = {
  title: "Find more about Us",
  subtitle: "We are an event",
  image: AboutImg,
};

//Slider cards
export const testimonialsData = [
  {
    image: test_01,
    name: "Serena",
    web: ".com",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?",
    delay: "300",
  },
  {
    image: test_01,
    name: "Serena",
    web: ".com",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?",
    delay: "600",
  },
  {
    image: test_01,
    name: "Serena",
    web: ".com",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?",
    delay: "900",
  },
  {
    image: test_01,
    name: "Serena",
    web: ".com",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?",
    delay: "1200",
  },
];

//Contact data
export const ctaData = {
  title: "Contact Us from here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

//Footer
import logo from "./assets/react.svg";

import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

export const footerData = {
  logo: logo,
  address:
    "C. Tres Cruces 157, San Francisco, Coyoacán, 04320 Ciudad de México, CDMX",
  email: "info@event.com",
  phone: "(+52)-56-32-65-61-92",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
    {
      name: "DW News",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q&A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

//Copyright
import { BsChatDotsFill } from "react-icons/bs";

export const copyrightData = {
  text: "@EventName, 2023. All rights reserved. Company Registration Numbrer: 26435629",
  Icon: <BsChatDotsFill />,
};

//sponsor images
export const sponsorImages = [
  logo_company_01,
  logo_company_00,
  logo_company_02,
  logo_company_03,
  logo_company_06,
  logo_company_07,
  logo_company_08,
  logo_company_09,
  logo_company_10,
  logo_company_11,
  logo_company_12,
  logo_company_13,
  logo_company_14,
  logo_company_15,
  logo_company_16,
  logo_company_17,
  logo_company_18,
  logo_company_19,
  logo_company_20,
  logo_company_21,
];
