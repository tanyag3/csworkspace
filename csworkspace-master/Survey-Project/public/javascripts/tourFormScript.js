var greeting = function(){
     alert("Got it!");
 }



 	function validate() {
	for (i=0;i<4;i++) {
		box = document.tourSurvey.elements[i];
		if (!box.value) {
			alert('You haven\'t filled in ' + box.name + '!');
			box.focus()
			return false;
		}
	}
	return true;
 }