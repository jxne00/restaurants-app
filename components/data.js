// all restaurant data including menu items
export const restaurantData = [
  {
    title: "Julie's Bakery",
    tagline: 'Bakery, Pastries, $$$',
    eta: '10-30',
    // https://unsplash.com/photos/O7-OF1AAsyc
    imgUrl: require('../images/r-bakery.jpg'),
    rating: 4.9,
    menuitems: [
      {
        title: 'Pastries',
        contents: [
          {
            name: 'Macaron',
            price: '$4.20',
            description:
              'A sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring.',
            // https://unsplash.com/photos/cSzyY2UaFSI
            imgUrl: require('../images/macaron.jpg'),
            instock: true,
          },
          {
            name: 'Croissant',
            price: '$3.40',
            description:
              'Classic butter croissants topped with your choice of toppings.',
            // https://unsplash.com/photos/jMqNhXOlXwk
            imgUrl: require('../images/croissant.jpg'),
            instock: false,
          },
          {
            name: 'Pancake',
            price: '$9.50',
            description: 'Fluffy pancakes with your choice of toppings.',
            // https://unsplash.com/photos/yxZSAjyToP4
            imgUrl: require('../images/pancake.jpg'),
            instock: true,
          },
        ],
      },
      {
        title: 'Smoothies',
        contents: [
          {
            name: 'Strawberry Smoothie',
            price: '$2.80',
            description: 'Made with fresh strawberries.',
            // https://unsplash.com/photos/DlhfsnrX2es
            imgUrl: require('../images/strawb-smoothie.jpg'),
            instock: true,
          },
          {
            name: 'Chocolate Smoothie',
            price: '$2.50',
            description:
              'A smooth and velvety texture, with rich cocoa flavors.',
            // https://unsplash.com/photos/7TeR1A1MUpM
            imgUrl: require('../images/chocosmoothie.jpg'),
            instock: false,
          },
        ],
      },
    ],
  },
  {
    title: "Benny's Burgers",
    tagline: 'Burgers, Fries, $$$',
    eta: '50+',
    // https://unsplash.com/photos/fdYm6Lx6ocw
    imgUrl: require('../images/r-burger.jpg'),
    rating: 3.5,
    menuitems: [
      {
        title: 'Burgers',
        contents: [
          {
            name: 'Chicken Burger',
            price: '$4.20',
            description:
              'Juicy grilled chicken patty topped with fresh lettuce, ripe tomatoes, and a creamy mayo sauce, all nestled between soft, toasted buns for the ultimate chicken burger experience.',
            // https://unsplash.com/photos/Qzc9WtclTZU
            imgUrl: require('../images/chicken-burger.jpg'),
            instock: true,
          },
          {
            name: 'Classic Cheeseburger',
            price: '$3.40',
            description:
              'A crowd favorite featuring a succulent beef patty, melted cheddar cheese, crisp lettuce, juicy tomatoes, and our signature special sauce, sandwiched between sesame seed buns.',
            // https://unsplash.com/photos/jh5XyK4Rr3Y
            imgUrl: require('../images/cheese-burger.jpg'),
            instock: true,
          },
          {
            name: 'Mushroom Burger',
            price: '$9.50',
            description:
              'A juicy beef patty smothered in savory sautéed mushrooms, melted Swiss cheese, fresh lettuce, ripe tomatoes, and a dollop of creamy garlic aioli, all tucked within a toasted brioche bun.',
            // https://unsplash.com/photos/Tqr2yaJvksM
            imgUrl: require('../images/mushroom-burger.jpg'),
            instock: false,
          },
        ],
      },
      {
        title: 'Drinks',
        contents: [
          {
            name: 'Orange Juice',
            price: '$1.00',
            description: 'Freshly squeezed orange juice.',
            // https://unsplash.com/photos/kkrXVKK-jhg
            imgUrl: require('../images/orange-juice.jpg'),
            instock: true,
          },
          {
            name: 'Coca Cola',
            price: '$1.20',
            description:
              'Served chilled, it is the ideal choice to complement your burger and enhance your dining experience.',
            // https://unsplash.com/photos/sQNq223Rr54
            imgUrl: require('../images/softdrink.jpg'),
            instock: true,
          },
        ],
      },
    ],
  },
  {
    title: "Joe's Gelato",
    tagline: 'Desert, Ice Cream, $$$',
    eta: '10+',
    // https://unsplash.com/photos/Wpg3Qm0zaGk
    imgUrl: require('../images/r-gelato.jpg'),
    rating: 4.2,
    menuitems: [
      {
        title: 'Gelato',
        contents: [
          {
            name: 'Vanilla',
            price: '$3.50',
            description: 'Creamy vanilla gelato.',
            // https://unsplash.com/photos/66IZaW9LIpI
            imgUrl: require('../images/icecream.jpg'),
            instock: true,
          },
          {
            name: 'Chocolate',
            price: '$3.50',
            description: 'Chocolate gelato with a rich and creamy flavour.',
            // https://unsplash.com/photos/66IZaW9LIpI
            imgUrl: require('../images/icecream.jpg'),
            instock: true,
          },
          {
            name: 'Mint',
            price: '$3.50',
            description: 'Refreshing mint gelato.',
            // https://unsplash.com/photos/66IZaW9LIpI
            imgUrl: require('../images/icecream.jpg'),
            instock: true,
          },
        ],
      },
      {
        title: 'Coffee',
        contents: [
          {
            name: 'Flat White',
            price: '$1.00',
            description: 'Expertly crafted rich flat white.',
            // https://unsplash.com/photos/pMW4jzELQCw
            imgUrl: require('../images/coffee.jpg'),
            instock: false,
          },
          {
            name: 'Latte',
            price: '$1.20',
            description: 'A warm cup of Latte.',
            // https://unsplash.com/photos/pMW4jzELQCw
            imgUrl: require('../images/coffee.jpg'),
            instock: true,
          },
        ],
      },
    ],
  },
];
