// https://web.simple-mmo.com/npcs/attack/

var attackInterval = setInterval(() => {
  var attackBtn = document.getElementById('attackButton');
  var doneBtn = getModalButton('OK');
  var successAlert = document.getElementById('success-killed');
  var successGoBack = successAlert?.getElementsByTagName('a')[0];

  if (isModalOpen()) {
    if (doneBtn) {
      simulateClick(doneBtn);
    } else {
      clearAndAlert(attackInterval, 'Attack Cancelled; Modal Open');
    }
  } else if (successAlert.style.display !== 'none') {
    simulateClick(successGoBack);
  } else {
    simulateClick(attackBtn);
  }
}, 1500);
