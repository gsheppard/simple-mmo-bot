// https://web.simple-mmo.com/battlearena

var getResourcePercentage = (resource) => {
  var current = parseInt(document.getElementById(`current_${resource}`).innerText, 10);
  var max = parseInt(document.getElementById(`max_${resource}`).innerText, 10);
  return Math.round((current / max) * 100);
};

var battleArenaInterval = setInterval(() => {
  var generateEnemyBtn = document.getElementsByClassName('kt-callout--diagonal-bg')[0].getElementsByTagName('button')[0];
  var confirmBtn = getModalButton('Yes, generate a enemy');
  var attackBtn = getModalButton('Attack');

  var hasEnergy = getResourcePercentage('energy') >= 1;
  var hasEnoughHealth = getResourcePercentage('health') >= 50;

  if (hasEnergy && hasEnoughHealth) {
    if (isModalOpen()) {
      if (confirmBtn) {
        simulateClick(confirmBtn);
      } else if (attackBtn) {
        simulateClick(attackBtn);
      }
    } else {
      simulateClick(generateEnemyBtn);
    }
  } else {
    clearAndAlert(battleArenaInterval, 'BattleArena Cancelled');
  }
}, 2000)

console.log("BattleArena loaded");
