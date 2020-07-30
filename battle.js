// https://web.simple-mmo.com/battlearena

var getResourcePercentage = (resource) => {
  var current = parseInt(document.getElementById(`current_${resource}`).innerText, 10);
  var max = parseInt(document.getElementById(`max_${resource}`).innerText, 10);
  return Math.round((current / max) * 100);
};

var battleArenaInterval = setInterval(() => {
  var generateEnemyBtn = document.getElementsByClassName('kt-callout--diagonal-bg')[0].getElementsByTagName('button')[0];
  var confirmBtn = document.getElementsByClassName('swal2-actions')[0]?.getElementsByTagName('button')[0];

  var hasEnergy = getResourcePercentage('energy') >= 1;
  var hasEnoughHealth = getResourcePercentage('health') >= 50;

  if (hasEnergy && hasEnoughHealth) {
    if (confirmBtn) {
      simulateClick(confirmBtn);
    } else {
      simulateClick(generateEnemyBtn);
    }
  } else {
    clearInterval(battleArenaInterval);
    console.log('Cancelling Battle');
  }
}, 2000)

console.log("battle arena loaded");
