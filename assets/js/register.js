document.addEventListener('DOMContentLoaded', init, false);

function init() {
		if ('serviceWorker' in navigator && navigator.onLine) {
				navigator.serviceWorker.register('/service-worker.js')
				.then((reg) => {
						console.log('Service worker registration successful', reg);
				}, (err) => {
						console.error('Service worker registration failed', err);
				});
		}
}