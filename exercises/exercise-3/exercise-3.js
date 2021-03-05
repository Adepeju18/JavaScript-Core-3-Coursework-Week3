 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
//  const{itemName, quantity, unitPrice}=order;
const[hotCakes, applePie, EggMcMuffin, SausageMcMuffin, hotCoffee, HashBrown]= order;
 function priceReceipts(item){
let total =0;

item.forEach((element)=>{
    const price = element.unitPrice * element.quantity;
    total+=price;

    // const temp = { 
    //     QTY: element.quantity,
    //     ITEM: element.itemName,
    //     TOTAL: price.toFixed(2),
    // };
    // result.push(temp);
});
// console.table(order,["QTY,    ITEM,    TOTAL"]);
    //  console.table([hotCakes, applePie, EggMcMuffin, SausageMcMuffin, hotCoffee, HashBrown], ["itemName"]);
     console.table(order)
console.log(`TOTAL: ${total}`);
 }
 priceReceipts(order);