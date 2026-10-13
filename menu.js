const MENU = [
 {id:'breakfast', name:'Breakfast', img:'b4', items:[
  ['Disk / Roshi with Rihaakuru',40,'b1'],['Disk / Roshi with Kulhimas',45,'b2'],['Disk / Roshi with Mashuni',40,'b3'],
  ['Continental Breakfast',40,'b4'],['Disk/Roshi with Rihaakuru, Mashuni & Sausage',50,'b5'],
  ['Disk/Roshi with Kulhimas, Mashuni, Omelette & Sausage',55,'b6'],['Disk/Roshi with Baked Beans',40,'b7']]},
 {id:'eggs', name:'Eggs', img:'eggs', items:[['Fried Egg (Single)',5],['Plain Omelette',10],['Cheese Omelette',25],['Mixed Omelette',15],['Sausage Omelette',25],['Boiled Egg',5]]},
 {id:'sides', name:'Sides', img:'sides', items:[['French Fries',15],['Mexican Loaded Fries',35],['Cheesy Fries',25],['Potato Wedges',25],['Cheesy Wedges',30]]},
 {id:'short', name:'Short Eats', img:'short', items:[['Bajiya',5],['Masroshi',5],['Beans Rolls',5],['Sausage Rolls',5],['Bis Keemiya',5]]},
 {id:'rice', name:'Rice', img:'rice', items:[['Egg Fried Rice',45],['Vegetable Fried Rice',45,0,1],['Tuna Fried Rice',45],['Chicken Fried Rice',50],['Beef Fried Rice',55],['Valhomas Fried Rice',60],['Nasi Goreng',65],['Mixed Fried Rice',65],['Garlic Rice, Grilled Chicken & Vegetables',80],['Sea Food Rice',80]]},
 {id:'noodles', name:'Noodles', img:'noodles', items:[['Egg Noodles',45],['Vegetable Noodles',45,0,1],['Tuna Noodles',45],['Chicken Noodles',50],['Beef Noodles',55],['Mixed Noodles',60],['Valhomas Noodles',60],['Bami Goreng',65],['Sea Food Noodles',80]]},
 {id:'pasta', name:'Pasta', img:'pasta', items:[['Aglio e Olio',60],['Hot Tuna',65],['Chicken',75,0,0,'Pasta'],['Pasta Carbonara',75],['Spaghetti Valhomas',75]]},
 {id:'bites', name:'Light Bites', img:'bites', items:[['Pesto Chicken Sandwich',35],['Chicken Nuggets & Chips',35],['Crumb Fried Chicken & Chips',55],['Shish Tawook Wrap',55],['Fajita Chicken Wrap',55],['Fajita Beef Wrap',60]]},
 {id:'pizza', name:'Pizza', img:'pizza', items:[['Tuna',75],['Chicken',80],['Sausage',80],['Tandoori Chicken',85],['Beef',85],['Chilli Chicken',100],['Tuna and Mushroom',100],['Hawaiian Chicken',110],['Chicken and Mushroom',110],['Beef and Mushroom',120],['Sea Food',140],['Mix',140]]},
 {id:'kothu', name:'Kothu Roshi', img:'kothu', items:[['Vegetable',45,0,1],['Tuna',55],['Valhomas',60],['Chicken',60],['Beef',65],['Mix',75],['Sea Food',80]]},
 {id:'sub', name:'Submarine', img:'sub', items:[['Chicken',60],['Tuna',60],['Tandoori Chicken',65],['Beef',65],['Chilli Chicken',70]]},
 {id:'burger', name:'Burger', img:'burger', items:[['Chicken',55],['Crispy Chicken',60],['Beef',60]]},
 {id:'juice', name:'Fresh Juice (Blended)', img:'juice', items:[['Watermelon',40],['Orange',40],['Lime',30],['Passionfruit',40],['Pineapple',40],['Mix',50]]},
 {id:'tea', name:'Hot Tea', img:'tea', items:[['Black Tea',5],['Green Tea (Dilmah)',5],['Ginger & Honey Tea (Dilmah)',5],['Lemon & Lime Tea (Dilmah)',5],['Earl Grey Tea (Whittington)',10],['Herbal Comfort (Whittington)',10],['English Breakfast Tea (Whittington)',10]]},
 {id:'hotcoffee', name:'Coffee – Hot', img:'hotcoffee', items:[['Nescafe Black',10],['Nescafe Milk',15],['Lavazza Espresso',10],['Lavazza Double Espresso',15],['Lavazza Black',10],['Lavazza Milk',10],['Lavazza Cappuccino',15],['Lavazza Cafe Latte',25],['Affogato',30],['Hot Milo',15],['Chai Latte',30],['Hot Chocolate',30]]},
 {id:'coldcoffee', name:'Coffee – Cold', img:'coldcoffee', items:[['Ice Americano',15],['Ice Latte',30],['Ice Milo',25],['Ice Chocolate',30],['Iced Cappuccino',40],['Iced Coffee',40]]},
 {id:'shakes', name:'Milkshakes', img:'shakes', items:[['Chocolate',40],['Strawberry',40],['Vanilla',40],['Mocha',40],['Oreo',45]]},
 {id:'icetea', name:'Ice Tea', img:'icetea', items:[['Ice Lemon Tea',35],['Passion Ice Tea',35],['Peach Ice Tea',35]]},
 {id:'mojito', name:'Mojito', img:'mojito', items:[['Watermelon',65],['Strawberry',65],['Mango',65],['Kiwi',65],['Blueberry',65],['Pomegranate',65],['Blue Lady',65],['Passion Bull',65],['Redbull Rooster',65]]},
 {id:'addon', name:'Add-On', img:'', items:[['Nuts (Maldivian Dhufun)',10]]},
];

if(typeof module!=='undefined')module.exports={MENU};
