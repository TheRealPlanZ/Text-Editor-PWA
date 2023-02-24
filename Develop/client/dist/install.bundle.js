/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\n\n// Logic for installing the PWA\n// TODO: Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', (event) => {\n    // Prevent Chrome 67 and earlier from automatically showing the prompt\n    event.preventDefault();\n    // Stash the event so it can be triggered later.\n    window.deferredPrompt = event;\n    // Update UI to notify the user they can add to home screen\n    butInstall.style.display = 'block';\n});\n\n// TODO: Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', async () => {\n    // Hide the app provided install promotion\n    butInstall.style.display = 'none';\n    // Show the install prompt\n    window.deferredPrompt.prompt();\n    // Wait for the user to respond to the prompt\n    const { outcome } = await window.deferredPrompt.userChoice;\n    // Optionally, send analytics event with outcome of user choice\n    console.log(`User response to the install prompt: ${outcome}`);\n    // We've used the prompt, and can't use it again, throw it away\n    window.deferredPrompt = null;\n});\n\n// TODO: Add an handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', (event) => {\n    // Log install to analytics\n    console.log('Weather App was installed.', event);\n});\n\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;