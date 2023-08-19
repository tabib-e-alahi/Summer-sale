document.getElementById("card-1").addEventListener("click", function () {
    
  const productName = getInnerTextOfElement("card-1-title");
  //    console.log(productName);
  setProductName(productName);
});
