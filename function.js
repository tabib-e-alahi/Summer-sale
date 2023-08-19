function getInnerTextOfElement(eleId) {
  const element = document.getElementById(eleId);
  const elementText = element.innerText;

  return elementText;
}

function setProductName(productName) {
  const targetElementParent = document.getElementById("product-name-container");
  const count = targetElementParent.childElementCount;

  const h1 = document.createElement("h1");
  h1.innerHTML = `
    <h1>${count + 1}. ${productName}</h1>
`;
  targetElementParent.appendChild(h1);
}
