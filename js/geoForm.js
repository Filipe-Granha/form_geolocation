const geoForm = function() {
	return "hello";
	this.inputField = null;
}

geoForm.prototype = {
	setLocation: function(location) {
      this.inputField = location;
	}
}

if (typeof module != 'undefined'){ module.exports = geoForm };