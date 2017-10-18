/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// module.exports = function() {
	window.onload = function() {
		
	// return "hello";
// }

geoFormObject = __webpack_require__(1);
console.log(geoFormObject);

function keyPressed(event) {
    if (event.which == "13") {     
      geoForm();
    };                
    return false;
};              

const locationInput = document.getElementById('location-input');	  
locationInput.addEventListener('keydown', keyPressed);


//triggered by function keyPressed	    
function geoForm(){ 
	const location = document.getElementById('location-input').value;

	if (location == "") {
		alert("Please enter an address in the Address field.");
	}
	else {

	axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
	  params:{
	    address:location,
	    key:'AIzaSyDhLUGtuJtsRn7eZJd5aFe2NCTNeoHwOVk'
	  }
	})
	.then(function(response){
	  console.log(response);

	  const lat = response.data.results[0].geometry.location.lat;
	  const lng = response.data.results[0].geometry.location.lng;

	  document.querySelector("li#location-lat").textContent = lat;
	  document.querySelector("li#location-lng").textContent = lng;
	})
	.catch(function(error){
	  console.log(error);
	  alert("Google doesn't recognize that address. Please try again.");
	});
    }
};

};



/***/ }),
/* 1 */
/***/ (function(module, exports) {

const geoForm = function() {
	console.log("testing");
	return "hello";
}

module.exports = geoForm;

/***/ })
/******/ ]);