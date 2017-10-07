function addSmallImage() {
	var newContent = "<div class='row'><div class='col-md-6'>	<div class='thumbnail '><a href='../img/IMG_7574.jpg'> <img style='height: 60%'	class='workimage' src='../img/IMG_7574.jpg' alt='Lights'></a></div></div><div class='col-md-6'>	<div class='thumbnail '><a href='../img/IMG_7583.jpg'> <img style='height: 60%'class='workimage' src='../img/IMG_7583.jpg' alt='Nature'></a></div></div></div><div id='smallImg'><button type='button' onclick='addSmallImage()'>Add small image</button></div><div id='bigImg'><button type='button' onclick='addBigImage()'>Add big image</button></div>";
	var oldContent = document.getElementById("smallImg");

	if (oldContent.outerHTML) {
		document.getElementById("bigImg").remove();
		oldContent.outerHTML = newContent;
	}
}

function addBigImage() {
	var newContent = "<div class='row margin-bottom'><div class='col-md-6'><div class='main-img thumbnail '><a href='../img/IMG_7563.jpg'> <img class='workimage_big' src='../img/IMG_7563.jpg' alt='Nature'></a></div></div><div class='col-md-6'><div class='row'><div class='col-md-12'><div class='thumbnail '><a href='../img/IMG_7566.jpg'> <img class='workimage_small'src='../img/IMG_7566.jpg' alt='Lights'></a></div></div></div><div class='row'><div class='col-md-12'><div class='thumbnail '><a href='../img/IMG_7601.jpg'> <img class='workimage_small'src='../img/IMG_7601.jpg' alt='Lights'></a></div></div></div></div></div><div id='smallImg'><button type='button' onclick='addSmallImage()'>Add small image</button></div><div id='bigImg'><button type='button' onclick='addBigImage()'>Add big image</button></div>";
	var oldContent = document.getElementById("bigImg");

	if (oldContent.outerHTML) {
		document.getElementById("smallImg").remove();
		oldContent.outerHTML = newContent;
	}
}

