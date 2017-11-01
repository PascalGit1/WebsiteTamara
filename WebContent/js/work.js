var idSmall = 0;
var idBig = 0;
var AreaLeftId = 0;
var AreaRightId = 0;
var AreaBottomRightId = 0;

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
			+ "<div class='thumbnail id='rightSide" + AreaRightId + "'>"
			+ "<button class='test' onclick='addTextArea('leftSide'" + AreaRightId + ")'>Add text area</button><br>"
			+ "<input name='fileRight" + AreaRightId + "' id='fileRight" + AreaRightId + "' type='file' class='inputfile' onchange='loadFileRight(event, " + AreaRightId + ")'>"
			+ "<label for='fileRight" + AreaRightId + "'>Add file</label>"
			+ "<img style='height:60%' class='workimage' id='outputRight" + AreaRightId + "'/>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<button class='margin-bottom btn btn-danger' type='button' onclick='removeImage(" + idSmall + ")'>Remove row</button>"
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
			+ "<button class='test' onclick='addTextArea('leftSide" + AreaLeftId + "')'>Add text area</button><br>"		
			+ "<input name='fileLeft" + AreaLeftId + "' id='fileLeft" + AreaLeftId + "' type='file' class='inputfile' onchange='loadFileLeft(event, " + AreaLeftId + ")'>"
			+ "<label for='fileLeft" + AreaLeftId + "'>Add file</label>"
			+ "<img class='workimage_big' id='outputLeft" + AreaLeftId + "'/>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-6'>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<button class='test' onclick='addTextArea('leftSide'" + AreaRightId + ")'>Add text area top</button>"
			+ "<button class='test' onclick='addTextArea('leftSide'" + AreaBottomRightId + ")'>Add text area bottom</button><br>"
			+ "<input name='fileRight" + AreaRightId + "' id='fileRight" + AreaRightId + "' type='file' class='inputfile' onchange='loadFileRight(event, " + AreaRightId + ")'>"
			+ "<label for='fileRight" + AreaRightId + "'>Add photo top</label>"
			+ "<input name='fileBottomRight" + AreaBottomRightId + "' id='fileBottomRight" + AreaBottomRightId + "' type='file' class='inputfile' onchange='loadFileBottomRight(event, " + AreaBottomRightId + ")'>"
			+ "<label for='fileBottomRight" + AreaBottomRightId + "'>Add photo bottom</label>"				
			+ "<img class='workimage_small' id='outputRight" + AreaRightId + "'/>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<img class='workimage_small' id='outputBottomRight" + AreaBottomRightId + "'/>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<button class='margin-bottom btn btn-danger' type='button' onclick='removeBigImage(" + idBig + ")'>Remove row</button>"
			+ "</div>"
			+ "</div>"
			+ "<div id='placeholder'></div>";

	var oldContent = document.getElementById("placeholder");
	oldContent.outerHTML = newContent;
	idBig++
	AreaLeftId++;
	AreaRightId++;
	AreaBottomRightId++;
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

function removeImage(id) {
	var element = document.getElementById('imagecontainerSmall' + id);
	console.log(id);
	element.parentNode.removeChild(element);
}

function removeBigImage(id) {
	var element = document.getElementById('imagecontainerBig' + id);
	console.log(id);
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

function loadFileBottomRight(event, number) {
	var output = document.getElementById('outputBottomRight'+number);
	output.src = URL.createObjectURL(event.target.files[0]);
};