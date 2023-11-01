// product images
import p_img_1 from "@images/product/product-1.jpg";
import p_img_2 from "@images/product/product-2.jpg";
import p_img_3 from "@images/product/product-3.jpg";
import p_img_4 from "@images/product/product-4.jpg";
import p_img_5 from "@images/product/product-5.jpg";
import p_img_6 from "@images/product/product-6.jpg";
import p_img_7 from "@images/product/product-7.jpg";
import p_img_8 from "@images/product/product-8.jpg";
import p_img_9 from "@images/product/product-9.jpg";
import p_img_10 from "@images/product/product-10.jpg";
import p_img_11 from "@images/product/product-11.jpg";
import p_img_12 from "@images/product/product-12.jpg";

const productData = [
  {
    id: 1,
    title: "Level Bolt Smart Lock",
    slug: "Level Bolt Smart Lock",
    parent: "Call Phone &Tablets",
    children: "Call Phone",
    image: p_img_1,
    originalPrice: "239.00",
    price: "239.00",
    discount: 0,
    quantity: 40,
    type: "Phones",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SB-1",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 4,
    relatedImages: [
      { img: p_img_1 },
      { img: p_img_2 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
    ],
    topRated: true,
    badge: "sale",
  },
  {
    id: 2,
    title: "Trademil for younger",
    slug: "Trademil for younger",
    parent: "Call Phone &Tablets",
    children: "Call Phone",
    image: p_img_2,
    originalPrice: "899.00",
    price: "899.00",
    discount: 0,
    quantity: 50,
    type: "Phones",
    tag: ["iPhone", "Tablets", "Headphone"],
    SKU: "29045-SB-2",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 6,
    relatedImages: [
      { img: p_img_2 },
      { img: p_img_4 },
      { img: p_img_3 },
      { img: p_img_5 },
      { img: p_img_1 },
    ],
    topRated: true,
  },
  {
    id: 3,
    title: "OnePlus 10 Pro",
    slug: "OnePlus 10 Pro",
    parent: "Call Phone &Tablets",
    children: "Accessories",
    image: p_img_3,
    originalPrice: "969.99",
    price: "969.99",
    discount: 12,
    quantity: 50,
    type: "Tablets",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SB-3",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 6,
    relatedImages: [
      { img: p_img_3 },
      { img: p_img_8 },
      { img: p_img_7 },
      { img: p_img_6 },
      { img: p_img_5 },
    ],
    topRated: true,
    badge: "new",
  },
  {
    id: 4,
    title: "Gooseneck Kettle",
    slug: "Gooseneck Kettle",
    parent: "Call Phone &Tablets",
    children: "iPhone Cases",
    image: p_img_4,
    originalPrice: "114.00",
    price: "114.00",
    discount: 10,
    quantity: 20,
    type: "Tablets",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SB-4",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 8,
    relatedImages: [
      { img: p_img_4 },
      { img: p_img_7 },
      { img: p_img_5 },
      { img: p_img_9 },
      { img: p_img_10 },
    ],
    topRated: true,
  },
  {
    id: 5,
    title: "Braun Electric Razor for Men",
    slug: "Braun Electric Razor for Men",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_5,
    originalPrice: "299.00",
    price: "299.00",
    discount: 8,
    quantity: 35,
    type: "Tablets",
    tag: ["Phone", "Tablets"],
    SKU: "29045-SB-5",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 8,
    relatedImages: [
      { img: p_img_5 },
      { img: p_img_4 },
      { img: p_img_3 },
      { img: p_img_6 },
      { img: p_img_8 },
    ],
    topRated: true,
  },
  {
    id: 6,
    title: "ViewSonic VP2756-2K",
    slug: "ViewSonic VP2756-2K",
    parent: "Call Phone &Tablets",
    children: "Accessories",
    image: p_img_6,
    originalPrice: "559.00",
    price: "559.00",
    discount: 15,
    quantity: 40,
    type: "Tablets",
    tag: ["iPhone", "Laptop"],
    SKU: "29045-SB-6",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 12,
    relatedImages: [
      { img: p_img_6 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
      { img: p_img_9 },
    ],
    topRated: true,
  },
  {
    id: 7,
    title: "Crux Indoor Fast and Easy",
    slug: "Crux Indoor Fast and Easy",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_7,
    originalPrice: "67.00",
    price: "67.00",
    discount: 0,
    quantity: 60,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SB-7",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 10,
    relatedImages: [
      { img: p_img_7 },
      { img: p_img_9 },
      { img: p_img_10 },
      { img: p_img_6 },
      { img: p_img_2 },
    ],
    topRated: true,
  },
  {
    id: 8,
    title: "Karcher K 3 Follow Me",
    slug: "Karcher K 3 Follow Me",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_8,
    originalPrice: "137.00",
    price: "137.00",
    discount: 5,
    quantity: 65,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SB-8",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_8 },
      { img: p_img_5 },
      { img: p_img_1 },
      { img: p_img_2 },
      { img: p_img_6 },
    ],
    topRated: true,
  },
  {
    id: 9,
    title: "Apple Watch Series 7",
    slug: "Apple Watch Series 7",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_9,
    originalPrice: "799.00",
    price: "799.00",
    discount: 8,
    quantity: 70,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SB-9",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_9 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
      { img: p_img_6 },
    ],
    topRated: true,
  },
  {
    id: 10,
    title: "Tempo Fishing Reels",
    slug: "Tempo Fishing Reels",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_10,
    originalPrice: "59.00",
    price: "59.00",
    discount: 0,
    quantity: 10,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SB-10",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_10 },
      { img: p_img_9 },
      { img: p_img_5 },
      { img: p_img_1 },
      { img: p_img_3 },
    ],
    topRated: true,
  },
  {
    id: 11,
    title: "Redmi 9 Poco M3",
    slug: "Redmi 9 Poco M3",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_11,
    originalPrice: "969.00",
    price: "969.00",
    discount: 25,
    quantity: 45,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SB-11",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_11 },
      { img: p_img_12 },
      { img: p_img_10 },
      { img: p_img_9 },
      { img: p_img_1 },
    ],
    topRated: true,
  },
  {
    id: 12,
    title: "PlayStation VR Marvel's",
    slug: "PlayStation VR Marvel's",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_12,
    originalPrice: "249.00",
    price: "249.00",
    discount: 30,
    quantity: 40,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SB-12",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_12 },
      { img: p_img_4 },
      { img: p_img_6 },
      { img: p_img_1 },
      { img: p_img_7 },
    ],
    topRated: true,
  },
  // best selling
  {
    id: 13,
    title: "Level Bolt Smart Lock",
    slug: "Level Bolt Smart Lock",
    parent: "Call Phone &Tablets",
    children: "Call Phone",
    image: p_img_12,
    originalPrice: "239.00",
    price: "239.00",
    discount: 0,
    quantity: 40,
    type: "Phones",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SC-1",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 4,
    relatedImages: [
      { img: p_img_12 },
      { img: p_img_4 },
      { img: p_img_6 },
      { img: p_img_1 },
      { img: p_img_7 },
    ],
    bestSelling: true,
  },
  {
    id: 14,
    title: "Trademil for younger",
    slug: "Trademil for younger",
    parent: "Call Phone &Tablets",
    children: "Call Phone",
    image: p_img_11,
    originalPrice: "899.00",
    price: "899.00",
    discount: 0,
    quantity: 50,
    type: "Phones",
    tag: ["iPhone", "Tablets", "Headphone"],
    SKU: "29045-SC-2",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 6,
    relatedImages: [
      { img: p_img_11 },
      { img: p_img_12 },
      { img: p_img_10 },
      { img: p_img_9 },
      { img: p_img_1 },
    ],
    bestSelling: true,
  },
  {
    id: 15,
    title: "OnePlus 10 Pro",
    slug: "OnePlus 10 Pro",
    parent: "Call Phone &Tablets",
    children: "Accessories",
    image: p_img_10,
    originalPrice: "969.99",
    price: "969.99",
    discount: 12,
    quantity: 50,
    type: "Tablets",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SC-3",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 6,
    relatedImages: [
      { img: p_img_10 },
      { img: p_img_9 },
      { img: p_img_5 },
      { img: p_img_1 },
      { img: p_img_3 },
    ],
    bestSelling: true,
  },
  {
    id: 16,
    title: "Gooseneck Kettle",
    slug: "Gooseneck Kettle",
    parent: "Call Phone &Tablets",
    children: "iPhone Cases",
    image: p_img_9,
    originalPrice: "114.00",
    price: "114.00",
    discount: 10,
    quantity: 20,
    type: "Tablets",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SC-4",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 8,
    relatedImages: [
      { img: p_img_9 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
      { img: p_img_6 },
    ],
    bestSelling: true,
  },
  {
    id: 17,
    title: "Braun Electric Razor for Men",
    slug: "Braun Electric Razor for Men",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_8,
    originalPrice: "299.00",
    price: "299.00",
    discount: 8,
    quantity: 35,
    type: "Tablets",
    tag: ["Phone", "Tablets"],
    SKU: "29045-SC-5",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 8,
    relatedImages: [
      { img: p_img_8 },
      { img: p_img_5 },
      { img: p_img_1 },
      { img: p_img_2 },
      { img: p_img_6 },
    ],
    bestSelling: true,
  },
  {
    id: 18,
    title: "ViewSonic VP2756-2K",
    slug: "ViewSonic VP2756-2K",
    parent: "Call Phone &Tablets",
    children: "Accessories",
    image: p_img_7,
    originalPrice: "559.00",
    price: "559.00",
    discount: 15,
    quantity: 40,
    type: "Tablets",
    tag: ["iPhone", "Laptop"],
    SKU: "29045-SC-6",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 12,
    relatedImages: [
      { img: p_img_7 },
      { img: p_img_9 },
      { img: p_img_10 },
      { img: p_img_6 },
      { img: p_img_2 },
    ],
    bestSelling: true,
  },
  {
    id: 19,
    title: "Crux Indoor Fast and Easy",
    slug: "Crux Indoor Fast and Easy",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_6,
    originalPrice: "67.00",
    price: "67.00",
    discount: 0,
    quantity: 60,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-7",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 10,
    relatedImages: [
      { img: p_img_6 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
      { img: p_img_9 },
    ],
    bestSelling: true,
  },
  {
    id: 20,
    title: "Karcher K 3 Follow Me",
    slug: "Karcher K 3 Follow Me",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_5,
    originalPrice: "137.00",
    price: "137.00",
    discount: 5,
    quantity: 65,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-8",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_5 },
      { img: p_img_4 },
      { img: p_img_3 },
      { img: p_img_6 },
      { img: p_img_8 },
    ],
    bestSelling: true,
  },
  {
    id: 21,
    title: "Apple Watch Series 7",
    slug: "Apple Watch Series 7",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_4,
    originalPrice: "799.00",
    price: "799.00",
    discount: 8,
    quantity: 70,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-9",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_4 },
      { img: p_img_7 },
      { img: p_img_5 },
      { img: p_img_9 },
      { img: p_img_10 },
    ],
    bestSelling: true,
  },
  {
    id: 22,
    title: "Tempo Fishing Reels",
    slug: "Tempo Fishing Reels",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_3,
    originalPrice: "59.00",
    price: "59.00",
    discount: 0,
    quantity: 10,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-10",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_3 },
      { img: p_img_8 },
      { img: p_img_7 },
      { img: p_img_6 },
      { img: p_img_5 },
    ],
    bestSelling: true,
  },
  {
    id: 23,
    title: "Redmi 9 Poco M3",
    slug: "Redmi 9 Poco M3",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_2,
    originalPrice: "969.00",
    price: "969.00",
    discount: 25,
    quantity: 45,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-11",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_2 },
      { img: p_img_4 },
      { img: p_img_3 },
      { img: p_img_5 },
      { img: p_img_1 },
    ],
    bestSelling: true,
  },
  {
    id: 24,
    title: "PlayStation VR Marvel's",
    slug: "PlayStation VR Marvel's",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_1,
    originalPrice: "249.00",
    price: "249.00",
    discount: 30,
    quantity: 40,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-12",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_1 },
      { img: p_img_2 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
    ],
    bestSelling: true,
    badge: "sale",
  },
  // latest products
  {
    id: 25,
    title: "Level Bolt Smart Lock",
    slug: "Level Bolt Smart Lock",
    parent: "Call Phone &Tablets",
    children: "Call Phone",
    image: p_img_6,
    originalPrice: "239.00",
    price: "239.00",
    discount: 0,
    quantity: 40,
    type: "Phones",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SC-1",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 4,
    relatedImages: [
      { img: p_img_6 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
      { img: p_img_9 },
    ],
    latestProduct: true,
  },
  {
    id: 26,
    title: "Trademil for younger",
    slug: "Trademil for younger",
    parent: "Call Phone &Tablets",
    children: "Call Phone",
    image: p_img_5,
    originalPrice: "899.00",
    price: "899.00",
    discount: 0,
    quantity: 50,
    type: "Phones",
    tag: ["iPhone", "Tablets", "Headphone"],
    SKU: "29045-SC-2",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 6,
    relatedImages: [
      { img: p_img_5 },
      { img: p_img_4 },
      { img: p_img_3 },
      { img: p_img_6 },
      { img: p_img_8 },
    ],
    latestProduct: true,
  },
  {
    id: 27,
    title: "OnePlus 10 Pro",
    slug: "OnePlus 10 Pro",
    parent: "Call Phone &Tablets",
    children: "Accessories",
    image: p_img_4,
    originalPrice: "969.99",
    price: "969.99",
    discount: 12,
    quantity: 50,
    type: "Tablets",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SC-3",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 6,
    relatedImages: [
      { img: p_img_4 },
      { img: p_img_7 },
      { img: p_img_5 },
      { img: p_img_9 },
      { img: p_img_10 },
    ],
    latestProduct: true,
  },
  {
    id: 28,
    title: "Gooseneck Kettle",
    slug: "Gooseneck Kettle",
    parent: "Call Phone &Tablets",
    children: "iPhone Cases",
    image: p_img_3,
    originalPrice: "114.00",
    price: "114.00",
    discount: 10,
    quantity: 20,
    type: "Tablets",
    tag: ["Phone", "Tablets", "Headphone"],
    SKU: "29045-SC-4",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 8,
    relatedImages: [
      { img: p_img_3 },
      { img: p_img_8 },
      { img: p_img_7 },
      { img: p_img_6 },
      { img: p_img_5 },
    ],
    latestProduct: true,
  },
  {
    id: 29,
    title: "Braun Electric Razor for Men",
    slug: "Braun Electric Razor for Men",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_2,
    originalPrice: "299.00",
    price: "299.00",
    discount: 8,
    quantity: 35,
    type: "Tablets",
    tag: ["Phone", "Tablets"],
    SKU: "29045-SC-5",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 8,
    relatedImages: [
      { img: p_img_2 },
      { img: p_img_4 },
      { img: p_img_3 },
      { img: p_img_5 },
      { img: p_img_1 },
    ],
    latestProduct: true,
  },
  {
    id: 30,
    title: "ViewSonic VP2756-2K",
    slug: "ViewSonic VP2756-2K",
    parent: "Call Phone &Tablets",
    children: "Accessories",
    image: p_img_1,
    originalPrice: "559.00",
    price: "559.00",
    discount: 15,
    quantity: 40,
    type: "Tablets",
    tag: ["iPhone", "Laptop"],
    SKU: "29045-SC-6",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 12,
    relatedImages: [
      { img: p_img_1 },
      { img: p_img_2 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
    ],
    latestProduct: true,
    badge: "sale",
  },
  {
    id: 31,
    title: "Crux Indoor Fast and Easy",
    slug: "Crux Indoor Fast and Easy",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_12,
    originalPrice: "67.00",
    price: "67.00",
    discount: 0,
    quantity: 60,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-7",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 10,
    relatedImages: [
      { img: p_img_12 },
      { img: p_img_4 },
      { img: p_img_6 },
      { img: p_img_1 },
      { img: p_img_7 },
    ],
    latestProduct: true,
  },
  {
    id: 32,
    title: "Karcher K 3 Follow Me",
    slug: "Karcher K 3 Follow Me",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_11,
    originalPrice: "137.00",
    price: "137.00",
    discount: 5,
    quantity: 65,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-8",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_11 },
      { img: p_img_12 },
      { img: p_img_10 },
      { img: p_img_9 },
      { img: p_img_1 },
    ],
    latestProduct: true,
  },
  {
    id: 33,
    title: "Apple Watch Series 7",
    slug: "Apple Watch Series 7",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_10,
    originalPrice: "799.00",
    price: "799.00",
    discount: 8,
    quantity: 70,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-9",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_10 },
      { img: p_img_9 },
      { img: p_img_5 },
      { img: p_img_1 },
      { img: p_img_3 },
    ],
    latestProduct: true,
  },
  {
    id: 34,
    title: "Tempo Fishing Reels",
    slug: "Tempo Fishing Reels",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_9,
    originalPrice: "59.00",
    price: "59.00",
    discount: 0,
    quantity: 10,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-10",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_9 },
      { img: p_img_3 },
      { img: p_img_4 },
      { img: p_img_5 },
      { img: p_img_6 },
    ],
    latestProduct: true,
  },
  {
    id: 35,
    title: "Redmi 9 Poco M3",
    slug: "Redmi 9 Poco M3",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_8,
    originalPrice: "969.00",
    price: "969.00",
    discount: 25,
    quantity: 45,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-11",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_8 },
      { img: p_img_5 },
      { img: p_img_1 },
      { img: p_img_2 },
      { img: p_img_6 },
    ],
    latestProduct: true,
  },
  {
    id: 36,
    title: "PlayStation VR Marvel's",
    slug: "PlayStation VR Marvel's",
    parent: "Call Phone &Tablets",
    children: "Android Cases",
    image: p_img_7,
    originalPrice: "249.00",
    price: "249.00",
    discount: 30,
    quantity: 40,
    type: "Tablets",
    tag: ["iPhone", "Laptop", "Headphone"],
    SKU: "29045-SC-12",
    shortDesc:
      "Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get",
    description:
      "Third-generation optical heart sensor, Electrical heart sensor, Certified dust resistant, Improved accelerometer up to 32 g‑forces, Improved gyroscope, Ambient light sensor, Always-On Retina LTPO OLED display with Force Touch (1000 nits)",
    reviews: 3,
    relatedImages: [
      { img: p_img_7 },
      { img: p_img_10 },
      { img: p_img_7 },
      { img: p_img_6 },
      { img: p_img_2 },
    ],
    latestProduct: true,
  },
]

export default productData