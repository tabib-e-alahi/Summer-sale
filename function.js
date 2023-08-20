let totalPrice = 0;
// getting inner text from an element ===============
function getInnerTextOfElement(eleId) {
  const element = document.getElementById(eleId);
  const elementText = element.innerText;

  return elementText;
}

// setting the product name to the card calculations area 
function setProductName(productName) {
  const targetElementParent = document.getElementById("product-name-container");
  const count = targetElementParent.childElementCount;

  const h1 = document.createElement("h1");
  h1.innerHTML = `
    <h1>${count + 1}. ${productName}</h1>
`;
  targetElementParent.appendChild(h1);
}

// getting inner text of price area and convert it into floating ===============
function getPriceFromElement(eleId){
  const element = document.getElementById(eleId);
  const elementPriceString = element.innerText;
  const parsedElementPrice = parseFloat(elementPriceString);
  const elementPrice = parsedElementPrice;

  return elementPrice;
}

// setting inner text of price area  to the calculations card ===============
function setProductPrice(productPrice){
  const targetElement = document.getElementById('total-price');
  totalPrice += productPrice;
  if( totalPrice > 0){
    document.getElementById('make-purchase-btn').disabled = false;
  }
  if(totalPrice >= 200){
    document.getElementById('apply-btn').disabled = false;
  }
  targetElement.innerText = totalPrice.toFixed(2);
  
}

// discount calculations =========================
function makeCalculation(){
  const totalPrice = getPriceFromElement('total-price');

  const discountedPrice = (totalPrice *20)/100;
  const newTotal = totalPrice - discountedPrice;

  const discountedPriceElement = document.getElementById('discount-price');
  discountedPriceElement.innerText = discountedPrice.toFixed(2);
  
  const newTotalPriceElement = document.getElementById('after-discount-total');
  newTotalPriceElement.innerText = newTotal.toFixed(2);

}