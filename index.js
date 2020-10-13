// appetizer
var appetizerDesc = ["**No selection**", "Deep Fried Calamari", "Sour du Jour", "Garden Salad", "Garlic Bread"];
var appetizerPrice = [0.00, 7.50, 4.99, 3.99, 4.50];

// entrees
var entreeDesc = ["**No selection**", "Rib Steak", "Fettuccini Alfredo", "Pan-fried Sole", "Mediterranean Platter", "Vegetarion Lasagna"];
var entreePrice = [0.00, 15.95, 11.25, 17.95, 13.50, 9];

// desserts
var dessertDesc = ["**No selection**", "Ice Cream Sundae", "Cheesecake", "Chocolate Truffle Cake", "Raspberry Mousse"];
var dessertPrice = [0.00, 2.95, 5, 6, 4.50];

// beverage
var beverageDesc = ["**No selection**", "Water", "Juice", "Pop", "Milk", "Coffee", "Tea"];
var beveragePrice = [0.00, 0, 2, 2, 2, 1.75, 1.75];


// total bill variable and initialize
var totalBill = 0;

// select complete and clear buttons
var completeButton = document.getElementById("complete-btn");
var clearButton = document.getElementById("clear-btn");

// select input box
var appetizerInput = document.querySelectorAll(".order-no-1");
var entreeInput = document.querySelectorAll(".order-no-2");
var dessertInput = document.querySelectorAll(".order-no-3");
var beverageInput = document.querySelectorAll(".order-no-4");

// array of selected items
var selectedItems = [];
var selectedPrice = [];

// methods

// push price and desc of selected items to array
function addToSelectedItems(){
    for(var i = 0; i < appetizerDesc.length; i++){      
        if(appetizerInput[0].value == (i+1)){ 
            selectedItems.push(appetizerDesc[i]);
            selectedPrice.push(appetizerPrice[i]);
        } 
    }

    for(var i = 0; i < entreeDesc.length; i++){
        if(entreeInput[0].value == i+1){
            selectedItems.push(entreeDesc[i]);
            selectedPrice.push(entreePrice[i]);
        }   
    }

    for(var i = 0; i < dessertDesc.length; i++){
        if(dessertInput[0].value == i+1){
            selectedItems.push(dessertDesc[i]);
            selectedPrice.push(dessertPrice[i]);
        }   
    }

    for(var i = 0; i < beverageDesc.length; i++){
        if(beverageInput[0].value == i+1){
            selectedItems.push(beverageDesc[i]);
            selectedPrice.push(beveragePrice[i]);
        }   
    }
}

// calculation of total bill
function calculateTotalBill() {

    for(var i = 0; i < selectedPrice.length; i++){
       parseFloat( totalBill += selectedPrice[i]);
    }
    return totalBill.toFixed(2);
   
}

// print data
function printDataToHTML() {
    document.getElementById('output-title').innerHTML = "Your Current Order Consists Of"
    if (selectedItems[0] !== "**No selection**"){
        document.getElementById('output-order-1').innerHTML = selectedItems[0];  
    }
    if (selectedItems[1] !== "**No selection**"){
        document.getElementById('output-order-2').innerHTML = selectedItems[1];
    }
    if (selectedItems[2] !== "**No selection**"){
        document.getElementById('output-order-3').innerHTML = selectedItems[2];
    }
    if (selectedItems[3] !== "**No selection**"){
        document.getElementById('output-order-4').innerHTML = selectedItems[3];
    }
    document.getElementById('output-order-total').innerHTML = `Your total bill comes to $${calculateTotalBill()}`;
}

// reset function
function reset() {
    appetizerInput[0].value = 1;
    entreeInput[0].value = 1;
    dessertInput[0].value = 1;
    beverageInput[0].value = 1;
    document.getElementById('output-title').innerHTML = ""
    document.getElementById('output-order-1').innerHTML = ""
    document.getElementById('output-order-2').innerHTML = ""
    document.getElementById('output-order-3').innerHTML = ""
    document.getElementById('output-order-4').innerHTML = ""
    document.getElementById('output-order-total').innerHTML = ""
    selectedItems = [];
    selectedPrice = [];
    totalBill = 0;
}

// display items and prices from array to each submenu
function displayMenu() {
    var appetizerList = $(".appetizer-list");
    var entreeList    = $(".entree-list");
    var dessertList    = $(".dessert-list");
    var beverageList    = $(".beverage-list");

    for(var i = 0; i < appetizerList.length; i++) {
        appetizerList[i].innerHTML = `${appetizerDesc[i]} $${appetizerPrice[i].toFixed(2)}`;
    }

    for(var i = 0; i < entreeList.length; i++) {
        entreeList[i].innerHTML = `${entreeDesc[i]} $${entreePrice[i].toFixed(2)}`;
    }

    for(var i = 0; i < dessertList.length; i++) {
        dessertList[i].innerHTML = `${dessertDesc[i]} $${dessertPrice[i].toFixed(2)}`;
    }

    for(var i = 0; i < beverageList.length; i++) {
        beverageList[i].innerHTML = `${beverageDesc[i]} $${beveragePrice[i].toFixed(2)}`;
    }
   
}

// call displayMenu function
displayMenu();

// event listeners
completeButton.addEventListener("click", () => {
    addToSelectedItems();
    printDataToHTML();
});

clearButton.addEventListener("click", () => {
    reset();
});

