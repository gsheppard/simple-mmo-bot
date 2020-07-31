// https://web.simple-mmo.com/quests/viewall

var questInterval = setInterval(() => {
  if (!isModalOpen()) {
    var uncompletedQuests = Array.from(document.getElementsByClassName('kt-widget5__item')).filter((e) => { return e.getElementsByClassName('label-success').length <= 0 });
    var quest = uncompletedQuests[uncompletedQuests.length - 1];
    simulateClick(quest.getElementsByTagName('button')[0]);
  } else {
    var performBtn = getModalButton('Perform quest');
    var repeatBtn = getModalButton('Repeat quest');
    var error = document.getElementById('swal2-validation-message')?.innerText;

    console.log({error});
    if (error) {
      clearAndAlert(questInterval, 'Quest Points Exhausted');
      return;
    }

    if (performBtn) {
      if (!performBtn.disabled) {
        simulateClick(performBtn);
      }
    } else if (repeatBtn) {
      simulateClick(repeatBtn);
    }
  }
}, 2000);
