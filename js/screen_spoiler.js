window.addEventListener('DOMContentLoaded', function() {
	const screen_spoiler_button = document.getElementsByClassName("screen-spoiler-modal-footer-button")[0];

	screen_spoiler_button.addEventListener('click', function()
	{
		const screen_spoiler_container = document.getElementsByClassName("screen-spoiler")[0];
		screen_spoiler_container.remove();
	});
});
