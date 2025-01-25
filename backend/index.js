const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());


// Basic route
app.get('/', (req, res) => {
//   res.send('Hello, World!');
    res.json([
  {
    "id": "1",
    "name": "Organic Red Tomatoes",
    "preview": "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tomato_leaf_detail.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Cherry_tomatoes_on_a_branch.jpg"
    ],
    "description": "Fresh, organic red tomatoes rich in flavor and nutrients. Perfect for salads, cooking, and making sauces.",
    "size": ["Small Basket", "Medium Basket", "Large Basket"],
    "isAccessory": false,
    "brand": "Green Harvest",
    "price": 50
  },
  {
    "id": "2",
    "name": "Premium Basmati Rice",
    "preview": "https://media.gettyimages.com/id/1048891760/photo/rice-food.jpg?s=2048x2048&w=gi&k=20&c=RT9bBHvrzUj3iDHxtSXeOlFmK3Abf3vfVRu0fxU9iLY=",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Basmati_rice_dry.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Basmati_rice_in_bowl.jpg"
    ],
    "description": "Long-grain aromatic basmati rice, perfect for biryanis and other flavorful dishes.",
    "size": ["1 kg", "5 kg", "10 kg"],
    "isAccessory": false,
    "brand": "Golden Fields",
    "price": 120
  },
  {
    "id": "3",
    "name": "Fresh Spinach Leaves",
    "preview": "https://5.imimg.com/data5/TJ/WH/QX/SELLER-2668166/red-spinach-1000x1000.jpg",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Spinacia_oleracea_leaves.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Spinach_%28Spinacia_oleracea%29_leaves_closeup.jpg"
    ],
    "description": "Healthy, pesticide-free spinach leaves loaded with iron and vitamins.",
    "size": ["250 g", "500 g", "1 kg"],
    "isAccessory": false,
    "brand": "Fresh Greens Co.",
    "price": 30
  },
  {
    "id": "4",
    "name": "Raw Honey",
    "preview": "https://media.istockphoto.com/id/157580403/photo/honey.jpg?s=2048x2048&w=is&k=20&c=hQwW3T9IK2c-H1Z14CIo9yIvWoAqpwP5Z2VfK_tYJbw=",
    "photos": [
      "https://media.istockphoto.com/id/157580403/photo/honey.jpg?s=2048x2048&w=is&k=20&c=hQwW3T9IK2c-H1Z14CIo9yIvWoAqpwP5Z2VfK_tYJbw=",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Honeycomb_with_raw_honey.jpg"
    ],
    "description": "Unprocessed, raw honey collected from organic bee farms, rich in natural sweetness.",
    "size": ["250 g Jar", "500 g Jar", "1 kg Jar"],
    "isAccessory": false,
    "brand": "Sweet Nature",
    "price": 150
  },
  {
    "id": "5",
    "name": "Farm-Fresh Potatoes",
    "preview": "https://media.istockphoto.com/id/1390936024/photo/the-concept-of-growing-food-fresh-organic-new-potatoes-in-a-farmers-field-a-rich-harvest-of.jpg?s=1024x1024&w=is&k=20&c=8UPpmqVGD_GItePo3QxgxJ6MqMxE3VKV0WRS9lMZixI=",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Harvested_potatoes.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Potatoes_on_market_shelf.jpg"
    ],
    "description": "All-natural, fresh potatoes directly from the farm. Ideal for cooking and baking.",
    "size": ["2 kg", "5 kg", "10 kg"],
    "isAccessory": false,
    "brand": "Healthy Roots",
    "price": 40
  }
]
);
});

app.get("/meat", (req, res) => {
    res.json([
  {
    "id": "2",
    "name": "Fresh Chicken",
    "preview": "https://media.gettyimages.com/id/675213336/photo/raw-chicken-with-vegetables-on-wooden-plate.jpg?s=2048x2048&w=gi&k=20&c=GMHcWECFDMbZnZ05Cg5ptO3iIwq_MhIl6knsnMAzTTo=",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Raw_chicken_breasts.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Chicken_drumsticks_raw.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Raw_chicken_leg_quarters.jpg"
    ],
    "description": "Fresh, tender chicken ideal for grilling, frying, or slow cooking. A great source of protein.",
    "size": ["1 kg", "2 kg", "5 kg"],
    "isAccessory": false,
    "brand": "Farm Fresh",
    "price": 150
  },
  {
    "id": "3",
    "name": "Fresh Mutton",
    "preview": "https://media.gettyimages.com/id/157315975/photo/raw-meat-pork-beef-lamb-from-butcher-on-white-background.jpg?s=2048x2048&w=gi&k=20&c=khu53_MPxk87RYV9fnT9PStzNCKeNbFrVtv6uVAx6_M=",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mutton_cut.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mutton_chop_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Mutton_chops.jpg"
    ],
    "description": "Fresh mutton with rich flavor, perfect for slow cooking, curries, and stews.",
    "size": ["1 kg", "2 kg", "5 kg"],
    "isAccessory": false,
    "brand": "Royal Butchers",
    "price": 350
  },
  {
    "id": "4",
    "name": "Fresh Fish (Salmon)",
    "preview": "https://media.gettyimages.com/id/165637260/photo/close-up-of-fresh-sea-bream-against-white-background.jpg?s=2048x2048&w=gi&k=20&c=xPrLFgVHLrdQzas1muhb5rnjwSL6PHCgjzEUC8BP7l8=",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Salmon_steaks.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Fresh_salmon_fillet.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Salmon_fish.jpg"
    ],
    "description": "Fresh, high-quality salmon fillets that are great for grilling or baking. A good source of omega-3 fatty acids.",
    "size": ["500 g", "1 kg", "2 kg"],
    "isAccessory": false,
    "brand": "Ocean Harvest",
    "price": 600
  },
  {
    "id": "5",
    "name": "Fresh Meat (Beef)",
    "preview": "https://media.gettyimages.com/id/184624619/photo/slices-of-new-york-strip-steak-on-cutting-board.jpg?s=2048x2048&w=gi&k=20&c=84MYduHhfLT0Um5qcWZ8Ii3LTdhhXzlKBB8m7FQ7Nf0=",
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Beef_cut.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Fresh_beef_steak.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Raw_beef_shoulder.jpg"
    ],
    "description": "Fresh cuts of beef ideal for grilling, stir-frying, and slow-cooking. Rich in protein and iron.",
    "size": ["1 kg", "2 kg", "5 kg"],
    "isAccessory": false,
    "brand": "Prime Cuts",
    "price": 450
  }
]

   );
});



// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
