import blueWeddingCard from "../assets/images/hindu-wedding-bluewed.png";
import ganeshaWeddingCard from "../assets/images/Ganesha_Invitation__Hindu_Wedding_Invitation___Indian_Wedding__sri_Lankan_Wedding___Tamil_Invitation__Lavender_Lilac_Purle_-_Etsy_UK-removebg-preview.png";
import favourBoxWeddingCard from "../assets/images/download__13_-removebg-preview.png";
import themeWeddingCard from "../assets/images/Hindu-wed-theme.png";
import vintageWeddingCard from "../assets/images/Hindu-Wedding-vintagewed.png";
import peacockWeddingCard from "../assets/images/Hindu-wedding-elegantpeacock.png";
import uniqueWeddingCard from "../assets/images/Hindu-wedding-unique.png";
import wardrobeWeddingCard from "../assets/images/Gate_fold_Indian_wedding_Invitation_in_light_brown_with_floral_motifs-removebg-preview.png";
import editableWeddingCard from "../assets/images/Hindu-Weedding-Editablecard.png";
import traditionalWeddingCard from "../assets/images/Hindu-Wedding-Traditional.png";
import scrollWeddingCard from "../assets/images/Hindu-Wedding-Royal.png";
import gatefoldWeddingCard from "../assets/images/Hindu-wedding-Gatefold.png";
import favourBoxCard from "../assets/images/Hindu-Wedding-vintagewed.png";
// Example variant (you can change image paths accordingly)
import lavenderVariant from "../assets/images/Hindu-Wedding-Royal.png";


export const cards = [
  {
    id: 1,
    title: "The Blue Wedding Cards",
    price: 72.25,
    sku: "KSN0054",
    src: blueWeddingCard,
    gallery: [blueWeddingCard, gatefoldWeddingCard, ganeshaWeddingCard, lavenderVariant],
    description:
      "The blue wedding card has embossed floral design with customized initial acrylic nameplate.\nThis invitation card has holding insert and an envelope",
    comments: "Discounts are applied based on quantity at checkout",
    height: "27.5",
    width: "21",
    weight: "110",
    variants: [
      {
        id: 101,
        title: "Lavender Variant",
        src: lavenderVariant,
      },
    ],
  },
  {
    id: 2,
    title: "Ganesha Wedding Cards",
    price: 25.25,
    sku: "KSN0055",
    src: ganeshaWeddingCard,
    gallery: [ganeshaWeddingCard, blueWeddingCard],
    description:
      "Elegant Ganesha embossed design with floral prints and pastel purple envelope.\nPerfect for spiritual-themed weddings.",
    comments: "Comes with customizable inserts",
    height: "25",
    width: "19",
    weight: "90",
    variants: [],
  },
  {
    id: 3,
    title: "Wedding Cards Favour Box",
    price: 39.45,
    sku: "KSN0056",
    src: favourBoxCard,
    gallery: [favourBoxCard],
    description:
      "Royal pink square card with embossed mandala patterns and favour box presentation.",
    comments: "Available in bulk gifting packs",
    height: "20",
    width: "20",
    weight: "150",
    variants: [],
  },
  {
    id: 4,
    title: "Theme Wedding Cards",
    price: 30.0,
    sku: "KSN0057",
    src: themeWeddingCard,
    gallery: [themeWeddingCard],
    description:
      "Modern themed card with artistic elements and royal procession print at the bottom.",
    comments: "Good for themed wedding announcements",
    height: "27",
    width: "18",
    weight: "80",
    variants: [],
  },
  {
    id: 5,
    title: "Editable Wedding Cards",
    price: 35.55,
    sku: "KSN0058",
    src: editableWeddingCard,
    gallery: [editableWeddingCard],
    description:
      "Traditional editable wedding card with temple border design and Om symbol.",
    comments: "Editable in Word and PDF formats",
    height: "28",
    width: "20",
    weight: "85",
    variants: [],
  },
  {
    id: 6,
    title: "Traditional Wedding Cards",
    price: 25.0,
    sku: "KSN0059",
    src: traditionalWeddingCard,
    gallery: [traditionalWeddingCard],
    description:
      "Scallop-edged golden red cards with classic Indian floral motifs and multiple inserts.",
    comments: "Popular in South Indian weddings",
    height: "26",
    width: "19",
    weight: "95",
    variants: [],
  },
  {
    id: 7,
    title: "Royal Scroll Wedding Cards",
    price: 75.0,
    sku: "KSN0060",
    src: scrollWeddingCard,
    gallery: [scrollWeddingCard],
    description:
      "Luxurious velvet scroll-style card with golden handles and printed scroll inserts.",
    comments: "Includes scroll, box, and outer envelope",
    height: "30",
    width: "10",
    weight: "180",
    variants: [],
  },
  {
    id: 8,
    title: "Gate Fold Wedding Cards",
    price: 43.2,
    sku: "KSN0061",
    src: gatefoldWeddingCard,
    gallery: [gatefoldWeddingCard],
    description:
      "Elegant gatefold style card with laser-cut monogram and satin holder for inserts.",
    comments: "Available in multiple foil colors",
    height: "25",
    width: "22",
    weight: "120",
    variants: [],
  },
];
