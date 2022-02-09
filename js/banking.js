const addDeposit = document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositValue = document.getElementById("add-deposit");
    const depositNew = depositValue.value;
    let depositTotal = document.getElementById("deposit-total");
    depositTotal.innerText = depositNew;
    depositValue.value = "";
  });
