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

var getModalButton = (btnText) => {
	var btn = document.getElementsByClassName('swal2-actions')[0]?.getElementsByTagName('button')[0];

	if (btn.innerText === btnText) {
		return btn;
	}
}
