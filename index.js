// document.getElementById('clickproject').addEventListener('click', function(){
// 	var cardContent = document.getElementById('cardContent');
// 	cardContent.style.display = (cardContent.style.display === 'none') ? 'block' : 'none';

// });

function openModel() {
	var model = document.getElementById('popupModel');
	model.style.display = "flex";
}

function closeModel(){
	var model = document.getElementById('popupModel');
	model.style.display = "none";

}

document.getElementById('clickproject').addEventListener(
	'click', function() {
		openModel();
	});