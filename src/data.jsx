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
  title: "Event Landing Page",
  subtitle: "Iniciative to welcome aboard in this event",
  btnText: "Get Started",
  image: HeroImg,
};

// AboutSection
export const aboutData = {
  title: "Find more about Us",
  subtitle: "We are an event",
  image: AboutImg,
};

// FeaturesSection
export const featuresData = {
  title: "What we offer you?",
  subtitle:
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam odio cupiditate ipsa suscipit libero nam, alias possimus praesentium dolore hic iure quis quam optio deleniti fugiat id accusamus maiores!',
  list: [
    {
      image: featureImg_01,
      bgImage: bg_featureImg_03,
      title: 'Payment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam odio cupiditate ipsa suscipit libero nam',
      linkText: 'Learn more...',
      delay: '400'
    },
    {
      image: featureImg_01,
      bgImage: bg_featureImg_01,
      title: 'Payment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam odio cupiditate ipsa suscipit libero nam',
      linkText: 'Learn more...',
      delay: '400'
    },
    {
      image: featureImg_03,
      bgImage: bg_featureImg_02,
      title: 'Payment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam odio cupiditate ipsa suscipit libero nam',
      linkText: 'Learn more...',
      delay: '400'
    },
    {
      image: featureImg_02,
      bgImage: bg_featureImg_02,
      title: 'Payment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam odio cupiditate ipsa suscipit libero nam',
      linkText: 'Learn more...',
      delay: '400'
    },
  ]
}

//Slider cards

export const testimonialsData = [
  {
    image: test_01,
    name: 'Serena',
    web: '.com',
    message: 
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?',
    delay: '300'
  },
  {
    image: test_01,
    name: 'Serena',
    web: '.com',
    message: 
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?',
    delay: '600'
  },
  {
    image: test_01,
    name: 'Serena',
    web: '.com',
    message: 
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?',
    delay: '900'
  },
  {
    image: test_01,
    name: 'Serena',
    web: '.com',
    message: 
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis ab porro blanditiis optio, non asperiores laudantium accusantium accusamus nulla? Vitae labore similique laboriosam non nostrum magnam a laborum harum?',
    delay: '1200'
  },
]

//Contact data

export const ctaData = {
  title: 'Contact Us from here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
}

//Footer
export const footerData = {
  logo: 'asdff',
  address: 'C. Tres Cruces 157, San Francisco, Coyoacán, 04320 Ciudad de México, CDMX',
  email: 'info@event.com',
  phone: '(+52)-56-32-65-61-92',
  list1: [

  ],
}