$(document).ready(function() {

	// get links from <body>

	var link = $('body').text();
	$('body').empty();
	var linkArray = link.split("\n");
	
	// array processing begins

	var i;
	var count = 1;
	var html = '<div class="container"><div class="center"><ul class="links">';

	for (i in linkArray) {
		var line = jQuery.trim(linkArray[i]);
		if(!line)
			continue;
		var lineArray = line.split(" || ");
		var url = lineArray[0];
		var title = lineArray[1];

		//render links

		html = html + '<li><a href="' + url + '" target="_blank">' + title + '</a></li>';
	}
	html = html + '</ul></div></div>'
	$('body').append(html);

})