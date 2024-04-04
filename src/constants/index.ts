// NAV
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

// TAILWIND CLASSES
export const hoverText = "hover:text-pale-red transition-colors duration-300";

// PRODUCTS
export type ProductTypes = {
  item: string;
  imgUrl: string;
  code: string;
  stars: string;
};
export const products: ProductTypes[] = [
  {
    item: "Table",
    imgUrl: "src/assets/products/table.jpg",
    code: "#Z44B3",
    stars: "4.8",
  },
  {
    item: "Bedside",
    imgUrl: "src/assets/products/bedside.jpg",
    code: "#F4T31",
    stars: "4.2",
  },
  {
    item: "Chair",
    imgUrl: "src/assets/products/chair.jpg",
    code: "#P4Q33",
    stars: "4.4",
  },
  {
    item: "Loungebed",
    imgUrl: "src/assets/products/loungebed.jpg",
    code: "#Z24B3",
    stars: "4.5",
  },
  {
    item: "Mirror",
    imgUrl: "src/assets/products/mirror.jpg",
    code: "#P44X22",
    stars: "4.5",
  },
  {
    item: "Sofa",
    imgUrl: "src/assets/products/sofa.jpg",
    code: "#V44V65",
    stars: "4.2",
  },
  {
    item: "Trolley",
    imgUrl: "src/assets/products/trolley.jpg",
    code: "#N4S30",
    stars: "4.7",
  },
];
