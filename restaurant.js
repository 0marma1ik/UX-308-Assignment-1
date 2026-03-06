let currentState = welcoming;
let order = {};
let itemCount = 1;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
  order = {};
  itemCount = 1;
}

function welcoming() {
  let aReturn = [];
  currentState = choosingItem;
  aReturn.push("Welcome to Omar's Burger Hut.");
  aReturn.push("Would you like a Burger or Pizza?");
  return aReturn;
}

function choosingItem(sInput) {
  let aReturn = [];
  order[`item${itemCount}`] = {};
  order[`item${itemCount}`].item = sInput;
  currentState = choosingSize;
  aReturn.push(`What size ${sInput} would you like? Small or Large?`);
  return aReturn;
}

function choosingSize(sInput) {
  let aReturn = [];
  order[`item${itemCount}`].size = sInput;
  currentState = choosingTopping;
  aReturn.push("What topping would you like? Mushroom, Tomato, or Onions?");
  return aReturn;
}

function choosingTopping(sInput) {
  let aReturn = [];
  order[`item${itemCount}`].topping = sInput;
  currentState = moreItems;
  aReturn.push(`Added ${order[`item${itemCount}`].size} ${order[`item${itemCount}`].item} with ${sInput}.`);
  aReturn.push("Would you like another item?");
  return aReturn;
}

function moreItems(sInput) {
  let aReturn = [];
  if (sInput.toLowerCase().startsWith("y") && itemCount < 3) {
    itemCount++;
    currentState = choosingItem;
    aReturn.push("Would you like a Burger or Pizza?");
  } else {
    currentState = upsell;
    aReturn.push("Would you like a drink with that?");
  }
  return aReturn;
}

function upsell(sInput) {
  let aReturn = [];
  currentState = welcoming;
  if (sInput.toLowerCase().startsWith("y")) {
    aReturn.push("Drink added to your order.");
  } else {
    aReturn.push("No drink added.");
  }
  aReturn.push("Thanks for ordering from Omar's Burger Hut.");
  return aReturn;
}