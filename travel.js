// https://web.simple-mmo.com/travel

var travelInterval = setInterval(() => {
  var btn = document.getElementsByClassName('stepbuttonnew')[0];
  var monsterBtn = document?.getElementsByClassName('div-travel-text')[0]?.getElementsByClassName('cta')[0];
  var hasMonster = monsterBtn?.innerText === ' Attack';
  var stepsCount = parseInt(document.getElementById('current_steps')?.innerText, 10);

  if (stepsCount === 0) {
    console.log('Steps: 0; Clearing;');
    clearInterval(travelInterval);
  }

  if (hasMonster) {
    monsterBtn.click();
  } else if (btn.disabled) {
    simulateClick(btn);
  }
}, 1500);

console.log('loaded');
