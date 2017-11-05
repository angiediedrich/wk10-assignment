//Clicking on an A element applies a CSS class to it that changes it’s background color
//Clicking on one of the H2 post titles in the main content area hides it

$(document).ready(function () {
    $("a").click(function () {
        $(this).addClass("changeBackgroundColor");
 	});

    $("h2.title").click(function() {
      $(this).slideUp("slow", function() {
    });
	});
});