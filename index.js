
// ======================== cards function area =====================
document.getElementById("card-1").addEventListener("click", function () {
  reduceCode("card-1-title", "card-1-price");
});



document.getElementById("card-2").addEventListener("click", function () {
  reduceCode("card-2-title", "card-2-price");
});



document.getElementById("card-3").addEventListener("click", function () {
  reduceCode("card-3-title", "card-3-price");
});



document.getElementById("card-4").addEventListener("click", function () {
  reduceCode("card-4-title", "card-4-price");
});



document.getElementById("card-5").addEventListener("click", function () {
  reduceCode("card-5-title", "card-5-price");
});


document.getElementById("card-6").addEventListener("click", function () {
  reduceCode("card-6-title", "card-6-price");
});


document.getElementById("card-7").addEventListener("click", function () {
  reduceCode("card-7-title", "card-7-price");
});



document.getElementById("card-8").addEventListener("click", function () {
  reduceCode("card-8-title", "card-8-price");
});



document.getElementById("card-9").addEventListener("click", function () {
  reduceCode("card-9-title", "card-9-price");
});

// ======================== cards function area  ended===================== 

document.getElementById('apply-btn').addEventListener('click',function(){
  const couponInputField = document.getElementById('coupon-code-field');
  const couponCode = couponInputField.value;

  if (couponCode === 'SELL200'){
    document.getElementById('invalid-coupon').classList.add('hidden');
    makeCalculation(); 
  }
  else{
    document.getElementById('invalid-coupon').classList.remove('hidden'); 
  }
  
})

function reduceCode(nameEleId, priceEleId) {
  const productName = getInnerTextOfElement(nameEleId);
  setProductName(productName);

  const productPrice = getPriceFromElement(priceEleId);
  setProductPrice(productPrice);
}
