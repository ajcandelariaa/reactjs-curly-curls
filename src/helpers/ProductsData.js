import product1 from "../images/condi1.png";
import product2 from "../images/duo1.png";
import product3 from "../images/shampoo1.png";
import product4 from "../images/duo1.png";

const getShampoo = [
  {
    itemId: 0,
    itemImage: product1,
    itemName: "Shea Moisture Coconut & Hibiscus Curl & Shine Shampoo",
    itemPrice: 649.00,
    itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam.",
    itemHowToUse: "Egestas sed sed risus pretium quam vulputate dignissim. Aliquam ultrices sagittis orci a scelerisque purus semper. ",
    itemIngredients: "Felis donec, et odio, pellentesque, diam volutpat, commodo, sed egestas. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet luctus venenatis lectus.",
    itemStocks: 1,
  },
  {
    itemId: 1,
    itemImage: product2,
    itemName: "1Shea Moisture Coconut & Hibiscus Curl & Shine Shampoo",
    itemPrice: 649.00,
    itemDescription: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam.",
    itemHowToUse: "1Egestas sed sed risus pretium quam vulputate dignissim. Aliquam ultrices sagittis orci a scelerisque purus semper. ",
    itemIngredients: "1Felis donec, et odio, pellentesque, diam volutpat, commodo, sed egestas. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet luctus venenatis lectus.",
    itemStocks: 1,
  },
]


const getConditioner = [
  {
    itemId: 0,
    itemImage: product1,
    itemName: "Shea Moisture Coconut & Hibiscus Curl & Shine Shampoo",
    itemPrice: 649.00,
    itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam.",
    itemHowToUse: "Egestas sed sed risus pretium quam vulputate dignissim. Aliquam ultrices sagittis orci a scelerisque purus semper. ",
    itemIngredients: "Felis donec, et odio, pellentesque, diam volutpat, commodo, sed egestas. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet luctus venenatis lectus.",
    itemStocks: 1,
  }
]


const getLeaveOn = [
  {
    itemId: 0,
    itemImage: product1,
    itemName: "Shea Moisture Coconut & Hibiscus Curl & Shine Shampoo",
    itemPrice: 649.00,
    itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam.",
    itemHowToUse: "Egestas sed sed risus pretium quam vulputate dignissim. Aliquam ultrices sagittis orci a scelerisque purus semper. ",
    itemIngredients: "Felis donec, et odio, pellentesque, diam volutpat, commodo, sed egestas. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet luctus venenatis lectus.",
    itemStocks: 1,
  }
]


const getHairCairTools = [
  {
    itemId: 0,
    itemImage: product1,
    itemName: "Shea Moisture Coconut & Hibiscus Curl & Shine Shampoo",
    itemPrice: 649.00,
    itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque nec nam.",
    itemHowToUse: "Egestas sed sed risus pretium quam vulputate dignissim. Aliquam ultrices sagittis orci a scelerisque purus semper. ",
    itemIngredients: "Felis donec, et odio, pellentesque, diam volutpat, commodo, sed egestas. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet luctus venenatis lectus.",
    itemStocks: 1,
  }
]

export const getProduct = [
  {
    itemId: 0,
    itemImage: product1,
    itemCategory: "Shampoo",
    itemLink: "/products/shampoo",
    itemLinkName: "shampoo",
    itemDescription: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subItems: getShampoo,
  },
  {
    itemId: 1,
    itemImage: product2,
    itemCategory: "Conditioner",
    itemLink: "/products/conditioner",
    itemLinkName: "conditioner",
    itemDescription: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subItems: getConditioner,
  },
  {
    itemId: 2,
    itemImage: product3,
    itemCategory: "Leave-On",
    itemLink: "/products/leave-on",
    itemLinkName: "leave-on",
    itemDescription: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subItems: getLeaveOn,
  },
  {
    itemId: 4,
    itemImage: product4,
    itemCategory: "Hair Care Tools",
    itemLink: "/products/hair-care-tools",
    itemLinkName: "hair-care-tools",
    itemDescription: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subItems: getHairCairTools,
  },
]

