// Importing the images directly
import sofaImage from "../assets/products/sofa.jpg";
import bedsideImage from "../assets/products/bedside.jpg";
import chairImage from "../assets/products/chair.jpg";
import loungebedImage from "../assets/products/loungebed.jpg";
import mirrorImage from "../assets/products/mirror.jpg";
import tableImage from "../assets/products/table.jpg";
import trolleyImage from "../assets/products/trolley.jpg";

import designImage from "../assets/card/design1.png";
import measureImage from "../assets/card/measure1.png";
import renderingImage from "../assets/card/3d1.png";

// Define types for products and offers
export type ProductTypes = {
  item: string;
  imgUrl: string;
  code: string;
  stars: string;
};

export type OfferProps = {
  title: string;
  subtitle: string;
  img: string;
};

// Navigation links
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#offers", label: "Special Offers" },
];

// Tailwind CSS classes
export const hoverText = "hover:text-pale-red transition-colors duration-300";

// Products data array
export const products: ProductTypes[] = [
  {
    item: "Sofa",
    imgUrl: sofaImage,
    code: "#V44V65",
    stars: "4.2",
  },
  {
    item: "Bedside",
    imgUrl: bedsideImage,
    code: "#F4T31",
    stars: "4.2",
  },
  {
    item: "Chair",
    imgUrl: chairImage,
    code: "#P4Q33",
    stars: "4.4",
  },
  {
    item: "Loungebed",
    imgUrl: loungebedImage,
    code: "#Z24B3",
    stars: "4.5",
  },
  {
    item: "Mirror",
    imgUrl: mirrorImage,
    code: "#P44X22",
    stars: "4.5",
  },
  {
    item: "Table",
    imgUrl: tableImage,
    code: "#Z44B3",
    stars: "4.8",
  },
  {
    item: "Trolley",
    imgUrl: trolleyImage,
    code: "#N4S30",
    stars: "4.7",
  },
];

// Special Offers data array
export const offers: OfferProps[] = [
  {
    title: "Complimentary Design Consultation",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate eveniet quaerat beatae at delectus.",
    img: designImage,
  },
  {
    title: "Free Room Measurement Service",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repudiandae ipsam laboriosam vitae culpa laudantium.",
    img: measureImage,
  },
  {
    title: "Free 3D Room Rendering",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum eius hic rem repudiandae temporibus illo facilis?",
    img: renderingImage,
  },
];
