// https://web.simple-mmo.com

var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};

var clearAndAlert = (interval, msg) => {
	clearInterval(interval);
  alert(msg);
}

var isModalOpen = () => {
	return document.getElementsByClassName('swal2-container').length >= 1;
}

var getModalButton = (btnText, idx = 0) => {
	var btn = document.getElementsByClassName('swal2-actions')[0]?.getElementsByTagName('button')[idx];

	if (btn?.innerText === 'Yes, I want to assign my points!') {
		var laterBtn = getModalButton('Later', 1);
		simulateClick(laterBtn);
	} else if (btn?.innerText === btnText) {
		return btn;
	}
}

var nextTask = () => {
	/*
		Setup: make play/pause button
	*/

	/*
		Battle
		- check health
		- check energy
		- fight!
	*/
	/*
		Quest
		- Find bottom-most uncompleted quest
		- Do it X times
	*/
	/*
		Daily Reward
		https://web.simple-mmo.com/dailyreward
		- check button state
		- click
		- deal with modal?
	*/
	/*
		Travel
		- Check steps
		- travel
	*/
	/*
		Job
		https://web.simple-mmo.com/jobs/view/1
		- set slider to 5
		- confirm
	*/
}
