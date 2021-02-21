//jQuery is not a dead language!
let uploadedImage;
let formActive=false;
$(document).ready(function(){
	$('#makerform').hide()
	let front = true;
	//listens for the flip button to flip the card over
	$('#flip').click(function(){
		if (front){
			$("#back-card").css("opacity","1")
			$( "#front-card" ).animate({
				opacity: "-=1",
		  	}, 250, function() {
				$("#front-card").css("z-index","-1")
				$("#back-card").css("z-index","1")
				front=false;
			});
			
		}
		else {
			$("#front-card").css("opacity","1")
			$("#back-card" ).animate({
				opacity: "-=1",
		  	}, 250, function() {
				$("#back-card").css("z-index","-1")
				$("#front-card").css("z-index","1")
				front=true;
			});
			
		}
		  
	})
	//listens for the toggleform buttons to toggle the creation form
	$('.toggleform').click(function(){
		toggleForm()
	})
})
var loadFile = function(event) {
	//when an image is uploaded by the creation form, store the its url in uploadedImage to be used
	uploadedImage = URL.createObjectURL(event.target.files[0]);
};
let resetID= function(){
	//resets the ID to the default values (my personal info)
	$("#info-name").html("GEORGE, JULIAN C")
	$('#info-email').html("julian.c.george.24@dartmouth.edu")
	$("#info-birth").html("DOB &nbsp;&nbsp;&nbsp;&nbsp;4/1/2002")
	$('#info-from').html("FROM &nbsp;Haddonfield, NJ")
	$('#id-photo').attr("src","idphoto.jpg")
	$("#aboutme").html("Hello! I'm a '24 who loves web development! I've done lots of full-stack dev projects, dealing with technologies from html/css to nodejs to mongoDB. I love web development because overcoming an impossible bug, successfully implementing a newly-learned technology, and overall creating a beautiful, functional site gives me a lot of satisfaction. I'm excited to work with DALI so I can become a professional-level dev, so I can solve exciting problems, and so I can meet and connect with people with similar passions as me. Outside of programming, I love nature (as evidenced by the background), hiking around New Hampshire's beautiful trails, making music on my piano or my DAW, and hitting the gym. I hope I will get to know all of you at DALI!")
	uploadedImage=null
}
let updateID=function(){
	//updates the personal info on the ID by going through the inputs 
	let blanksString="";
	let fname = $("#fname-input").val()
	let lname = $("#lname-input").val()
	let mname = $("#mname-input").val()
	if (fname != ""&&lname !=""&&mname!="") $("#info-name").html(lname.toUpperCase()+", "+fname.toUpperCase()+" "+mname.charAt(0).toUpperCase())
	else blanksString+="\n One or more name fields were left blank"
	
	let location = $("#location-input").val()
	if (location!="") $("#info-from").html("FROM &nbsp;"+location)
	else blanksString+="\n Location field left blank"
	
	let email = $("#email-input").val()
	if(email!="") $("#info-email").html(email)
	else blanksString+="\n Email field left blank"
	
	let bmonth=$("#bmonth-input").val()
	let bday=$("#bday-input").val()
	let byear=$("#byear-input").val()
	if(bmonth!=""&&bday!=""&&byear!="") $("#info-birth").html("DOB &nbsp;&nbsp;&nbsp;&nbsp;"+bmonth+"/"+bday+"/"+byear)
	else blanksString+= "\nOne or more birthday fields were left blank"
	
	let description=$("#about-input").val()
	if(description=="") blanksString+= "\n About you field left blank"
	$("#aboutme").html(description)
	
	if(uploadedImage!=null) $("#id-photo").attr("src",uploadedImage)
	else blanksString+="\n No image uploaded"
	//alerts the user of all of the empty fields in their submission
	if (blanksString!="") alert("Errors in Submission: "+blanksString)
	
}
let toggleForm= function(){
	if (!formActive) {
		$("#makerform").fadeIn(250)
		formActive=true
	}
	else {
		$("#makerform").fadeOut(250) 
		formActive=false}
	
}
