// Large product database with international confections
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  origin: string;
}

export const products: Product[] = [
  // Swiss Chocolates (50 items)
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `swiss-${i + 1}`,
    name: `Swiss ${['Dark', 'Milk', 'White', 'Hazelnut', 'Almond'][i % 5]} Chocolate ${i + 1}`,
    description: `Premium Swiss chocolate with ${['70% cocoa', 'creamy milk', 'vanilla notes', 'roasted hazelnuts', 'crunchy almonds'][i % 5]}`,
    price: Math.floor(Math.random() * 3000) + 2000,
    category: 'chocolate',
    stock: Math.floor(Math.random() * 100) + (i % 10 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'Switzerland'
  })),

  // Belgian Chocolates (50 items)
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `belgian-${i + 1}`,
    name: `Belgian ${['Truffle', 'Praline', 'Ganache', 'Bonbon', 'Tablet'][i % 5]} ${i + 1}`,
    description: `Handcrafted Belgian ${['truffle with cocoa powder', 'praline with nuts', 'smooth ganache center', 'filled bonbon', 'chocolate tablet'][i % 5]}`,
    price: Math.floor(Math.random() * 4000) + 3000,
    category: 'chocolate',
    stock: Math.floor(Math.random() * 80) + (i % 8 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'Belgium'
  })),

  // French Confections (100 items)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `french-${i + 1}`,
    name: `French ${['Macaron', 'Nougat', 'Caramel', 'Marshmallow', 'Bonbon'][i % 5]} ${i + 1}`,
    description: `Delicate French ${['almond macaron', 'honey nougat', 'salted caramel', 'vanilla marshmallow', 'fruit bonbon'][i % 5]} with authentic flavors`,
    price: Math.floor(Math.random() * 2500) + 1500,
    category: i % 5 === 0 ? 'macarons' : 'confections',
    stock: Math.floor(Math.random() * 120) + (i % 12 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'France'
  })),

  // German Gummies (150 items)
  ...Array.from({ length: 150 }, (_, i) => ({
    id: `german-${i + 1}`,
    name: `German ${['Gummy Bear', 'Fruit Gummy', 'Cola Bottle', 'Sour Worm', 'Jelly Ring'][i % 5]} ${i + 1}`,
    description: `Authentic German ${['gummy bear', 'fruit-flavored gummy', 'cola-flavored bottle', 'sour gummy worm', 'jelly ring'][i % 5]} with natural flavors`,
    price: Math.floor(Math.random() * 1500) + 800,
    category: 'gummies',
    stock: Math.floor(Math.random() * 200) + (i % 15 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'Germany'
  })),

  // Italian Confections (100 items)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `italian-${i + 1}`,
    name: `Italian ${['Gelato', 'Cannoli', 'Tiramisu', 'Amaretti', 'Biscotti'][i % 5]} ${i + 1}`,
    description: `Traditional Italian ${['gelato flavor', 'cannoli cream', 'tiramisu dessert', 'almond amaretti', 'crunchy biscotti'][i % 5]} made with authentic ingredients`,
    price: Math.floor(Math.random() * 3500) + 2500,
    category: i % 5 === 0 ? 'gelato' : 'italian',
    stock: Math.floor(Math.random() * 90) + (i % 9 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'Italy'
  })),

  // Japanese Confections (150 items)
  ...Array.from({ length: 150 }, (_, i) => ({
    id: `japanese-${i + 1}`,
    name: `Japanese ${['Kit Kat', 'Mochi', 'Pocky', 'Hi-Chew', 'Ramune'][i % 5]} ${i + 1}`,
    description: `Unique Japanese ${['Kit Kat flavor', 'mochi rice cake', 'Pocky stick', 'Hi-Chew candy', 'Ramune soda candy'][i % 5]} with distinctive taste`,
    price: Math.floor(Math.random() * 2000) + 1200,
    category: 'japanese',
    stock: Math.floor(Math.random() * 150) + (i % 10 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'Japan'
  })),

  // American Candies (200 items)
  ...Array.from({ length: 200 }, (_, i) => ({
    id: `american-${i + 1}`,
    name: `American ${['Chocolate Bar', 'Lollipop', 'Taffy', 'Fudge', 'Peanut Butter Cup'][i % 5]} ${i + 1}`,
    description: `Classic American ${['chocolate bar', 'flavored lollipop', 'chewy taffy', 'creamy fudge', 'peanut butter cup'][i % 5]} with bold flavors`,
    price: Math.floor(Math.random() * 1800) + 1000,
    category: 'american',
    stock: Math.floor(Math.random() * 180) + (i % 12 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'USA'
  })),

  // British Confections (100 items)
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `british-${i + 1}`,
    name: `British ${['Toffee', 'Fudge', 'Sherbet', 'Wine Gum', 'Jelly Baby'][i % 5]} ${i + 1}`,
    description: `Traditional British ${['butter toffee', 'vanilla fudge', 'fizzy sherbet', 'wine gum', 'jelly baby'][i % 5]} with heritage recipes`,
    price: Math.floor(Math.random() * 2200) + 1300,
    category: 'british',
    stock: Math.floor(Math.random() * 110) + (i % 11 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'United Kingdom'
  })),

  // Austrian Confections (50 items)
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `austrian-${i + 1}`,
    name: `Austrian ${['Mozart Ball', 'Sachertorte', 'Strudel', 'Lebkuchen', 'Marzipan'][i % 5]} ${i + 1}`,
    description: `Authentic Austrian ${['Mozart ball with marzipan', 'Sachertorte slice', 'apple strudel', 'spiced lebkuchen', 'almond marzipan'][i % 5]} confection`,
    price: Math.floor(Math.random() * 4500) + 3500,
    category: 'austrian',
    stock: Math.floor(Math.random() * 70) + (i % 7 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'Austria'
  })),

  // Spanish Confections (50 items)
  ...Array.from({ length: 50 }, (_, i) => ({
    id: `spanish-${i + 1}`,
    name: `Spanish ${['Turron', 'Polvoron', 'Churro', 'Flan', 'Mantecado'][i % 5]} ${i + 1}`,
    description: `Traditional Spanish ${['almond turron', 'polvoron cookie', 'churro pastry', 'caramel flan', 'mantecado sweet'][i % 5]} delicacy`,
    price: Math.floor(Math.random() * 2800) + 1800,
    category: 'spanish',
    stock: Math.floor(Math.random() * 85) + (i % 8 === 0 ? 0 : 1),
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
    origin: 'Spain'
  }))
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "chocolate", name: "Chocolates" },
  { id: "gummies", name: "Gummies" },
  { id: "macarons", name: "Macarons" },
  { id: "confections", name: "Confections" },
  { id: "gelato", name: "Gelato" },
  { id: "italian", name: "Italian Sweets" },
  { id: "japanese", name: "Japanese Candy" },
  { id: "american", name: "American Candy" },
  { id: "british", name: "British Sweets" },
  { id: "austrian", name: "Austrian Delicacies" },
  { id: "spanish", name: "Spanish Treats" }
];