window.onload = function() {


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
    };
};

};

