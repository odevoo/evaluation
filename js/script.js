
$("#btn").on("click", function(){
	var selectvalue = $("#select").val();
	var areavalue = $("#textarea").val();
	if (selectvalue == "") {
		$("#select").addClass("red");
	};
	if (areavalue.length < 15) {
		$("#textarea").addClass("red");
	};
});

$("#textarea").change(function() {

	$("#textarea").removeClass("red");
});




$("#select").change(function() {
	$("#select").removeClass("red");
});
