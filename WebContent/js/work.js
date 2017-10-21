var i = 0;
var j = 0;

function addSmallImage() {
	var newContent = ""
			+ "<div id='imagecontainerSmall"
			+ i
			+ "'class='row'>"
			+ "<div class='col-md-6'>"
			+ "<div class='thumbnail '>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-6'>"
			+ "<div class='thumbnail '>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "</div>"
			+ "<button class='margin-bottom' type='button' onclick='removeImage()'>Remove row</button>"
			+ "</div>"
			+ "<div id='smallImg' class='margin-bottom'>"
			+ "<button type='button' onclick='addSmallImage()'>Add small image</button>"
			+ "</div>"
			+ "<div id='bigImg'>"
			+ "<button type='button' onclick='addBigImage()'>Add big image</button>"
			+ "</div>";

	var oldContent = document.getElementById("smallImg");

	if (oldContent.outerHTML) {
		document.getElementById("bigImg").remove();
		oldContent.outerHTML = newContent;
		i++;
	}

}

function addBigImage() {
	var newContent = "" + "<div id='imagecontainerBig"
			+ j
			+ "' class='row margin-bottom'>"
			+ "<div class='col-md-6'>"
			+ "<div class='main-img thumbnail '>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "<div>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "</div>"
			+ "</div>"
			+ "<div class='col-md-6'>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "<div>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div class='row'>"
			+ "<div class='col-md-12'>"
			+ "<div class='thumbnail '>"
			+ "<input class='file-upload' name='test' title='test' type='file' data-ng-file-select='onFileSelect($files)'  accept='image/png, image/jpeg' >"
			+ "</div>"
			+ "<div>"
			+ "<button onclick='addTextArea()'>Add text area</button>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "</div>"
			+ "<div id='smallImg'>"
			+ "<button type='button' onclick='addSmallImage()'>Add small image</button>"
			+ "</div>"
			+ "<div id='bigImg'> "
			+ "<button type='button' onclick='addBigImage()'>Add big image</button>"
			+ "</div>";

	var oldContent = document.getElementById("bigImg");

	if (oldContent.outerHTML) {
		document.getElementById("smallImg").remove();
		oldContent.outerHTML = newContent;
		j++
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

function removeImage() {
	var element = document.getElementById('imagecontainerSmall0');
	element.parentNode.removeChild(element);
//	i--;
}
