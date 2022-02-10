const addDeposit = document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // user input
    const depositInput = document.getElementById("deposit-input");
    const depositInputNew = depositInput.value;
    // user output
    const depositTotal = document.getElementById("deposit-total");
    const currentDepositTotal =
      parseFloat(depositTotal.innerText) + parseFloat(depositInputNew);
    depositTotal.innerText = currentDepositTotal;
    //Updated Total Balance
    const currentBalance = document.getElementById("balance-total");
    const currentBalanceText = currentBalance.innerText;
    const totalBalance = parseFloat(currentBalanceText);
    const totalNewUpdatedBalance =
      totalBalance + parseFloat(depositTotal.innerText);
    currentBalance.innerText = totalNewUpdatedBalance;
    // clear value
    depositInput.value = "";
  });
// withdraw section
const getWithDraw = document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // user input
    const withdrawInput = document.getElementById("get withdraw");
    const withdrawInputNew = withdrawInput.value;
    //user output
    const withdrawTotal = document.getElementById("withdraw-total");
    const currentWithdrawTotal =
      parseFloat(withdrawInputNew) + parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = currentWithdrawTotal;
    // Update Total balance
    const currentWithdrawBalance = document.getElementById("balance-total");
    const currentWithdrawBalancetext = currentWithdrawBalance.innerText;
    const currentWithdrawNewBalance = parseFloat(currentWithdrawBalancetext);
    const totalwithdrawalBalance =
    currentWithdrawNewBalance - parseFloat(withdrawTotal.innerText);
    currentWithdrawBalance.innerText = totalwithdrawalBalance;
    // clear value
    withdrawInput.value = "";
  });
