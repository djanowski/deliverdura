// Season months: 1=Jan, 2=Feb, ..., 12=Dec
// Buenos Aires (Southern Hemisphere): Summer=Dec-Feb, Autumn=Mar-May, Winter=Jun-Aug, Spring=Sep-Nov

export const products = [
  // Frutas
  {
    emoji: "🍌",
    unitWeight: 0.12,
    id: "banana",
    name: "Banana",
    categories: ["frutas"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Available year-round
  },
  {
    emoji: "🍎",
    unitWeight: 0.195,
    id: "apple_red",
    name: "Manzana roja",
    categories: ["frutas"],
    season: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // Harvest Mar-May, stored rest of year
  },
  {
    emoji: "🍏",
    unitWeight: 0.195,
    id: "apple_green",
    name: "Manzana verde",
    categories: ["frutas"],
    season: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    emoji: "🍑",
    unitWeight: 0.15,
    id: "peach_white",
    name: "Durazno blanco",
    categories: ["frutas"],
    season: [12, 1, 2], // Summer
  },
  {
    emoji: "🍑",
    unitWeight: 0.15,
    id: "peach_yellow",
    name: "Durazno amarillo",
    categories: ["frutas"],
    season: [12, 1, 2],
  },
  {
    emoji: "🥑",
    unitWeight: 0.17,
    id: "avocado",
    unit: "unit",
    name: "Palta",
    categories: ["frutas"],
    season: [3, 4, 5, 6, 7, 8, 9], // Autumn through spring
  },
  {
    emoji: "🫐",
    unitWeight: 0.3,
    id: "blueberry",
    unit: "unit",
    name: "Arándano",
    categories: ["frutas"],
    season: [9, 10, 11, 12, 1], // Spring-early summer
  },
  {
    emoji: "🍒",
    unitWeight: 0.005,
    id: "cherry",
    unit: "kg",
    name: "Cereza",
    categories: ["frutas"],
    season: [11, 12], // Late spring
  },
  {
    emoji: "🍇",
    unitWeight: 0.005,
    id: "grape_green",
    unit: "kg",
    name: "Uva verde",
    categories: ["frutas"],
    season: [1, 2, 3, 4], // Summer-autumn
  },
  {
    emoji: "🥝",
    unitWeight: 0.075,
    id: "kiwi",
    unit: "kg",
    name: "Kiwi",
    categories: ["frutas"],
    season: [4, 5, 6], // Autumn
  },
  {
    emoji: "🍋",
    unitWeight: 0.1,
    id: "lemon",
    unit: "kg",
    name: "Limón",
    categories: ["frutas"],
    season: [5, 6, 7, 8, 9], // Autumn-winter
  },
  {
    emoji: "🍋",
    unitWeight: 0.05,
    id: "lime",
    unit: "kg",
    name: "Lima",
    categories: ["frutas"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },
  {
    emoji: "🥭",
    unitWeight: 0.2,
    id: "mango",
    unit: "unit",
    name: "Mango",
    categories: ["frutas"],
    season: [11, 12, 1, 2], // Late spring-summer
  },
  {
    emoji: "🍈",
    unitWeight: 1.8,
    id: "melon",
    unit: "unit",
    name: "Melón",
    categories: ["frutas"],
    season: [12, 1, 2, 3], // Summer
  },
  {
    emoji: "🍉",
    unitWeight: 9,
    id: "watermelon",
    unit: "unit",
    name: "Sandía",
    categories: ["frutas"],
    season: [12, 1, 2], // Summer
  },
  {
    emoji: "🍑",
    unitWeight: 0.15,
    id: "nectarine",
    unit: "kg",
    name: "Pelón",
    categories: ["frutas"],
    season: [12, 1, 2], // Summer
  },
  {
    emoji: "🍊",
    unitWeight: 0.13,
    id: "orange_juice",
    unit: "kg",
    name: "Naranja jugo",
    categories: ["frutas"],
    season: [5, 6, 7, 8, 9], // Autumn-winter
  },
  {
    emoji: "🍊",
    unitWeight: 0.13,
    id: "orange",
    unit: "kg",
    name: "Naranja ombligo",
    categories: ["frutas"],
    season: [5, 6, 7, 8, 9],
  },
  {
    emoji: "🍐",
    unitWeight: 0.18,
    id: "pear",
    unit: "kg",
    name: "Pera",
    categories: ["frutas"],
    season: [2, 3, 4, 5, 6, 7, 8, 9, 10], // Harvest Feb-Apr, stored
  },
  {
    emoji: "🍍",
    unitWeight: 1.6,
    id: "pineapple",
    unit: "unit",
    name: "Ananá",
    categories: ["frutas"],
    season: [9, 10, 11, 12, 1, 2], // Spring-summer
  },
  {
    emoji: "🍑",
    unitWeight: 0.065,
    id: "plum",
    unit: "kg",
    name: "Ciruela",
    categories: ["frutas"],
    season: [12, 1, 2], // Summer
  },
  {
    emoji: "🍊",
    unitWeight: 0.12,
    id: "tangerine",
    unit: "kg",
    name: "Mandarina",
    categories: ["frutas"],
    season: [4, 5, 6, 7], // Autumn-winter
  },
  {
    emoji: "🍓",
    unitWeight: 0.02,
    id: "strawberry",
    unit: "kg",
    name: "Frutilla",
    categories: ["frutas"],
    season: [9, 10, 11, 12, 1, 2], // Spring-summer
  },
  {
    emoji: "🍑",
    unitWeight: 0.05,
    id: "apricot",
    unit: "kg",
    name: "Damasco",
    categories: ["frutas"],
    season: [11, 12, 1], // Late spring-summer
  },
  {
    emoji: "🍊",
    unitWeight: 0.3,
    id: "grapefruit",
    unit: "kg",
    name: "Pomelo",
    categories: ["frutas"],
    season: [5, 6, 7, 8, 9], // Autumn-winter
  },
  {
    emoji: "🍇",
    unitWeight: 0.005,
    id: "grape_black",
    unit: "kg",
    name: "Uva negra",
    categories: ["frutas"],
    season: [1, 2, 3, 4], // Summer-autumn
  },
  {
    emoji: "🫐",
    unitWeight: 0.2,
    id: "pomegranate",
    unit: "unit",
    name: "Granada",
    categories: ["frutas"],
    season: [3, 4, 5], // Autumn
  },

  // Verduras
  {
    emoji: "🍅",
    unitWeight: 0.15,
    id: "tomato_round",
    unit: "kg",
    name: "Tomate redondo",
    categories: ["frutas", "verduras"],
    season: [12, 1, 2, 3], // Summer
  },
  {
    emoji: "🍅",
    unitWeight: 0.08,
    id: "tomato_roma",
    unit: "kg",
    name: "Tomate perita",
    categories: ["frutas", "verduras"],
    season: [12, 1, 2, 3],
  },
  {
    emoji: "🍅",
    unitWeight: 0.01,
    id: "tomato_cherry",
    unit: "kg",
    name: "Tomate cherry",
    categories: ["frutas", "verduras"],
    season: [12, 1, 2, 3],
  },
  {
    emoji: "🥬",
    unitWeight: 0.3,
    id: "lettuce",
    unit: "unit",
    name: "Lechuga",
    categories: ["verduras"],
    season: [3, 4, 5, 9, 10, 11], // Autumn & spring (doesn't like extreme heat)
  },
  {
    emoji: "🥕",
    unitWeight: 0.08,
    id: "carrot",
    unit: "kg",
    name: "Zanahoria",
    categories: ["verduras"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },
  {
    emoji: "🧅",
    unitWeight: 0.15,
    id: "onion",
    unit: "kg",
    name: "Cebolla",
    categories: ["verduras"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },
  {
    emoji: "🥔",
    unitWeight: 0.15,
    id: "potato",
    unit: "kg",
    name: "Papa",
    categories: ["verduras"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },
  {
    emoji: "🧄",
    unitWeight: 0.05,
    id: "garlic",
    unit: "unit",
    name: "Ajo",
    categories: ["verduras"],
    season: [11, 12, 1, 2, 3], // Late spring-autumn (harvest Nov-Dec)
  },
  {
    emoji: "🎃",
    unitWeight: 2.0,
    id: "squash",
    unit: "kg",
    name: "Zapallo",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7], // Autumn-winter
  },
  {
    emoji: "🥬",
    unitWeight: 0.5,
    id: "chard",
    unit: "unit",
    name: "Acelga",
    categories: ["verduras"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },
  {
    emoji: "🥗",
    unitWeight: 0.3,
    id: "spinach",
    unit: "unit",
    name: "Espinaca",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7, 8, 9, 10], // Autumn through spring
  },
  {
    emoji: "🌶️",
    unitWeight: 0.15,
    id: "pepper_red",
    unit: "kg",
    name: "Morrón rojo",
    categories: ["verduras"],
    season: [11, 12, 1, 2, 3, 4], // Spring-autumn
  },
  {
    emoji: "🫑",
    unitWeight: 0.15,
    id: "pepper_green",
    unit: "kg",
    name: "Morrón verde",
    categories: ["verduras"],
    season: [11, 12, 1, 2, 3, 4],
  },
  {
    emoji: "🥒",
    unitWeight: 0.2,
    id: "cucumber",
    unit: "kg",
    name: "Pepino",
    categories: ["verduras"],
    season: [11, 12, 1, 2, 3], // Spring-summer
  },
  {
    emoji: "🍆",
    unitWeight: 0.25,
    id: "eggplant",
    unit: "kg",
    name: "Berenjena",
    categories: ["verduras"],
    season: [12, 1, 2, 3], // Summer
  },
  {
    emoji: "🥦",
    unitWeight: 0.4,
    id: "broccoli",
    unit: "unit",
    name: "Brócoli",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7, 8, 9, 10], // Autumn through spring
  },
  {
    emoji: "🥬",
    unitWeight: 1.0,
    id: "cabbage_white",
    unit: "unit",
    name: "Repollo blanco",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7, 8, 9, 10], // Autumn through spring
  },
  {
    emoji: "🟣",
    unitWeight: 1.0,
    id: "cabbage_red",
    unit: "unit",
    name: "Repollo colorado",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    emoji: "🧅",
    unitWeight: 0.1,
    id: "leek",
    unit: "kg",
    name: "Puerro",
    categories: ["verduras"],
    season: [5, 6, 7, 8, 9, 10], // Autumn-spring
  },
  {
    emoji: "🥬",
    unitWeight: 0.8,
    id: "cauliflower",
    unit: "unit",
    name: "Coliflor",
    categories: ["verduras"],
    season: [4, 5, 6, 7, 8, 9, 10], // Autumn through spring
  },
  {
    emoji: "🥬",
    unitWeight: 0.3,
    id: "kale",
    unit: "unit",
    name: "Kale",
    categories: ["verduras"],
    season: [4, 5, 6, 7, 8, 9], // Autumn-winter
  },
  {
    emoji: "🌽",
    unitWeight: 0.25,
    id: "corn",
    unit: "unit",
    name: "Choclo",
    categories: ["verduras"],
    season: [12, 1, 2, 3], // Summer
  },
  {
    emoji: "🍠",
    unitWeight: 0.3,
    id: "sweet_potato",
    unit: "kg",
    name: "Batata",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7, 8], // Autumn-winter
  },
  {
    emoji: "🟣",
    unitWeight: 0.2,
    id: "beet",
    unit: "kg",
    name: "Remolacha",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7, 8, 9, 10], // Autumn through spring
  },
  {
    emoji: "🥬",
    unitWeight: 0.4,
    id: "celery",
    unit: "unit",
    name: "Apio",
    categories: ["verduras"],
    season: [3, 4, 5, 6, 7, 8, 9, 10], // Autumn through spring
  },
  {
    emoji: "🥒",
    unitWeight: 0.15,
    id: "zucchini",
    unit: "kg",
    name: "Zapallito",
    categories: ["verduras"],
    season: [11, 12, 1, 2, 3], // Spring-summer
  },
  {
    emoji: "🥬",
    unitWeight: 0.1,
    id: "arugula",
    unit: "unit",
    name: "Rúcula",
    categories: ["verduras"],
    season: [3, 4, 5, 9, 10, 11], // Autumn & spring
  },
  {
    emoji: "🫛",
    unitWeight: 0.01,
    id: "green_beans",
    unit: "kg",
    name: "Chaucha",
    categories: ["verduras"],
    season: [11, 12, 1, 2, 3], // Spring-summer
  },
  {
    emoji: "🟡",
    unitWeight: 0.15,
    id: "pepper_yellow",
    unit: "kg",
    name: "Morrón amarillo",
    categories: ["verduras"],
    season: [11, 12, 1, 2, 3, 4], // Spring-autumn
  },

  // Otros - Aromáticas
  {
    emoji: "🌿",
    unitWeight: 0.05,
    id: "basil",
    unit: "unit",
    name: "Albahaca",
    categories: ["otros"],
    season: [10, 11, 12, 1, 2, 3], // Spring-summer
  },
  {
    emoji: "🌿",
    unitWeight: 0.05,
    id: "parsley",
    unit: "unit",
    name: "Perejil",
    categories: ["otros"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },
  {
    emoji: "🌿",
    unitWeight: 0.05,
    id: "cilantro",
    unit: "unit",
    name: "Cilantro",
    categories: ["otros"],
    season: [3, 4, 5, 9, 10, 11], // Autumn & spring
  },
  {
    emoji: "🌿",
    unitWeight: 0.03,
    id: "rosemary",
    unit: "unit",
    name: "Romero",
    categories: ["otros"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },
  {
    emoji: "🌿",
    unitWeight: 0.05,
    id: "mint",
    unit: "unit",
    name: "Menta",
    categories: ["otros"],
    season: [9, 10, 11, 12, 1, 2, 3], // Spring-summer
  },
  {
    emoji: "🌿",
    unitWeight: 0.03,
    id: "chives",
    unit: "unit",
    name: "Ciboulette",
    categories: ["otros"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // Year-round
  },

  // Otros - Bandejas
  {
    emoji: "🥣",
    unitWeight: 1.0,
    id: "tray_soup",
    unit: "unit",
    name: "Bandeja sopa",
    categories: ["otros"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    emoji: "🥘",
    unitWeight: 0.8,
    id: "tray_stir_fry",
    unit: "unit",
    name: "Bandeja salteado",
    categories: ["otros"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    emoji: "🍲",
    unitWeight: 1.2,
    id: "tray_stew",
    unit: "unit",
    name: "Bandeja puchero",
    categories: ["otros"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    emoji: "🥡",
    unitWeight: 0.6,
    id: "tray_wok",
    unit: "unit",
    name: "Bandeja wok",
    categories: ["otros"],
    season: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
].sort((a, b) => a.name.localeCompare(b.name));
