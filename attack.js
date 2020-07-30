var attackInterval = setInterval(() => {
  var attackBtn = document.getElementById('attackButton');
  var doneBtn = document.getElementsByClassName('swal2-confirm')[0];
  var successAlert = document.getElementById('success-killed');
  var successGoBack = successAlert?.getElementsByTagName('a')[0];

  if (doneBtn) {
    simulateClick(doneBtn);
  } else if (successAlert.style.display !== 'none') {
    simulateClick(successGoBack);
  } else {
    simulateClick(attackBtn);
  }
}, 1500);
