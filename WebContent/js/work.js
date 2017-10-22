var idSmall = 0;
var idBig = 0;

function addSmallImage() {
	var newContent = ""
			+ "<div id='imagecontainerSmall"+ idSmall + "'class='row'>"
			+ "<div class='col-md-6'>"
			+ "<div class='thumbnail '>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "<input style='margin-left:397px' class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-6'>"
			+ "<div class='thumbnail '>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "<input style='margin-left:397px' class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<button class='margin-bottom' type='button' onclick='removeImage(" + idSmall + ")'>Remove row</button>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<div id='smallImg' class='margin-bottom' style='margin-top:25px'>"
			+ "<button type='button' onclick='addSmallImage()'>Add small image</button>"
			+ "</div>"
			+ "<div id='bigImg'>"
			+ "<button type='button'  class='margin-bottom' onclick='addBigImage()'>Add big image</button>"
			+ "</div>"
			+ "</div>";

	var oldContent = document.getElementById("smallImg");

	if (oldContent.outerHTML) {
		document.getElementById("bigImg").remove();
		oldContent.outerHTML = newContent;
		idSmall++;
	}

}

function addBigImage() {
	var newContent = "" + "<div id='imagecontainerBig"+ idBig + "' class='row margin-bottom'>"
			+ "<div class='col-md-6'>"
			+ "<div class='main-img thumbnail '>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-6'>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<button class='margin-bottom' type='button' onclick='removeBigImage(" + idBig + ")'>Remove row</button>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-12' style='text-align:center'>"
			+ "<div id='smallImg' class='margin-bottom'>"
			+ "<button type='button' onclick='addSmallImage()'>Add small image</button>"
			+ "</div>"
			+ "<div id='bigImg' class='margin-bottom'> "
			+ "<button type='button' onclick='addBigImage()'>Add big image</button>"
			+ "</div>"
			+ "</div>";

	var oldContent = document.getElementById("bigImg");

	if (oldContent.outerHTML) {
		document.getElementById("smallImg").remove();
		oldContent.outerHTML = newContent;
		idBig++
	}

	function addImage() {
		var newContent = "" + "<div id='imageContainerSmall"
				+ k
				+ "'class='row'>"
				+ "<div class='col-md-6'>"
				+ "<div class='thumbnail '>"
				+ "<a href='../img/IMG_7574.jpg'> "
				+ "<img style='height: 60%'	class='workimage' src='../img/IMG_7574.jpg' alt='Lights'>"
				+ "</a>"
				+ "</div>"
				+ "</div>"
				+ "<div class='col-md-6'>"
				+ "<div class='thumbnail '>"
				+ "<a href='../img/IMG_7583.jpg'>"
				+ "<img style='height: 60%'class='workimage' src='../img/IMG_7583.jpg' alt='Nature'>"
				+ "</a>"
				+ "</div>"
				+ "</div>"
				+ "</div>"
				+ "<div id='smallImg'>"
				+ "<button type='button' onclick='addSmallImage()'>Add small image</button>"
				+ "</div>"
				+ "<div id='bigImg'>"
				+ "<button type='button' onclick='addBigImage()'>Add big image</button>"
				+ "</div>";

		var oldContent = document.getElementById("smallImg");

		if (oldContent.outerHTML) {
			document.getElementById("bigImg").remove();
			oldContent.outerHTML = newContent;
			k++;
		}

	}
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
//	i--;
}
