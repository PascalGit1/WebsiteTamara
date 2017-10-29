var idSmall = 0;
var idBig = 0;
var AreaLeftId = 0;
var AreaRightId = 0;

function addSmallImage() {
	var newContent = ""
			+ "<div id='imagecontainerSmall"+ idSmall + "'class='row centertext'>"
			+ "<div class='col-md-6'>"
			+ "<div class='thumbnail id='leftSide" + AreaLeftId + "'>"
			+ "<button class='test' onclick='addTextArea('leftSide" + AreaLeftId + "')'>Add text area</button><br>"		
			+ "<input name='fileLeft" + AreaLeftId + "' id='fileLeft" + AreaLeftId + "' type='file' class='inputfile' onchange='loadFileLeft(event, " + AreaLeftId + ")'>"
			+ "<label for='fileLeft" + AreaLeftId + "'>Add file</label>"
			+ "<img style='height:60%' class='workimage' id='outputLeft" + AreaLeftId + "'/>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-6'>"
			+ "<div class='thumbnail id='leftSide" + AreaRightId + "'>"
			+ "<button class='test' onclick='addTextArea('leftSide'" + AreaRightId + ")'>Add text area</button><br>"
			+ "<input name='file" + AreaRightId + "' id='file" + AreaRightId + "' type='file' class='inputfile' onchange='loadFileRight(event, " + AreaRightId + ")'>"
			+ "<label for='file" + AreaRightId + "'>Add file</label>"
			+ "<img style='height:60%' class='workimage' id='outputRight" + AreaRightId + "'/>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<button class='margin-bottom' type='button' onclick='removeImage(" + idSmall + ")'>Remove row</button>"
			+ "</div>"
			+ "</div>"
			+ "<div id='placeholder'></div>";
	 
	
	
	
	var oldContent = document.getElementById("placeholder");
	oldContent.outerHTML = newContent;
	idSmall++;
	AreaLeftId++;
	AreaRightId++;


}

function addBigImage() {
	var newContent = "" + "<div id='imagecontainerBig"+ idBig + "' class='row margin-bottom centertext'>"
			+ "<div class='col-md-6'>"
			+ "<div class='main-img thumbnail '>"
			+ "<button class='test' onclick='addTextArea('leftSide'" + AreaLeftId + ")'>Add text area</button><br>"
			+ "<input name='file' id='file' type='file'class='inputfile'>"
			+ "<label for='file'>Add file</label>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-6'>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<button class='test' onclick='addTextArea('leftSide'" + AreaLeftId + ")'>Add text area</button><br>"
			+ "<input name='file' id='file' type='file'class='inputfile'>"
			+ "<label for='file'>Add file</label>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<button class='test' onclick='addTextArea('leftSide'" + AreaLeftId + ")'>Add text area</button><br>"
			+ "<input name='file' id='file' type='file'class='inputfile'>"
			+ "<label for='file'>Add file</label>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<button class='margin-bottom' type='button' onclick='removeBigImage(" + idBig + ")'>Remove row</button>"
			+ "</div>"
			+ "</div>"
			+ "<div id='placeholder'></div>";

	var oldContent = document.getElementById("placeholder");
	oldContent.outerHTML = newContent;
	idBig++
}

function addTextArea(leftID){
	document.getElementById(leftID).remove();
//	var textarea = "<textarea rows='15' cols='100'>"+ leftID +"</textarea>"
//	document.getElementById(leftID).appendChild(textarea); 
	
	
//	1. check if textarea or picture
//	2. remove buttons
//	3. add textare or picture
//	4. add remove button
}

function removeImage(a) {
	var element = document.getElementById('imagecontainerSmall' + a);
	console.log(a);
	element.parentNode.removeChild(element);
}

function removeBigImage(b) {
	var element = document.getElementById('imagecontainerBig' + b);
	console.log(b);
	element.parentNode.removeChild(element);
}

function loadFileLeft(event, number) {
    var output = document.getElementById('outputLeft'+number);
    output.src = URL.createObjectURL(event.target.files[0]);
  };
  
  function loadFileRight(event, number) {
	    var output = document.getElementById('outputRight'+number);
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };