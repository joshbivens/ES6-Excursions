class Product {
  constructor(price, id, quantity) {
    this.price = price;
    this.markup = parseFloat((this.price * 0.15).toFixed(2));
    this.id = id;
    this.quantity = quantity;
  }
}

class Inventory {
  constructor() {
    var args = Array.prototype.slice.call(arguments);
    var inventory = args;
    var result = [];
    
    for (var item in inventory) {
      result.push(inventory[item]);
    }
    
    this.items = result;
  }

  prettyPrint() {
    this.items.map(x => 
      console.log("Name: " + x.id + 
                  "\nPrice: " + x.price + 
                  "\nOn Hand: " + x.quantity));
  }
  
  profitToBeMade() {
    var total = 0;
    this.items.map(x => total += (x.markup * x.quantity));
    return total.toFixed(2);
  }
  
  sortBy(key) {
    if (key === "price") {
      this.items.sort(function(a, b) {
        return a.price - b.price;
      });
    } else if (key === "quantity") {
        this.items.sort(function(a, b) {
          return a.quantity - b.quantity;
      });
    } else if (key === "id") {
        this.items.sort(function(a, b){
          if(a.id < b.id) return -1;
          if(a.id > b.id) return 1;
          return 0;
      });
    }
    
    return this.items;
  }
  
}

// Test Cases
var prod_1 = new Product(4.75, "Billy's Butter Spray", 47);
var prod_1Num = prod_1.quantity;

var prod_2 = new Product(2.29, "Abe's Garlic Powder", 22);
var prod_2Num = prod_2.quantity;

var prod_3 = new Product(5.05, "Sushi Sam's Seaweed", 10);
var prod_3Num = prod_3.quantity;

var myInventory = new Inventory(prod_1, prod_2, prod_3);
//console.log(myInventory);
//console.log();
myInventory.profitToBeMade();
//myInventory.prettyPrint();
//console.log(myInventory.sortBy("id"));





