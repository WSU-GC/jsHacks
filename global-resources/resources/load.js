function loadResources(resource, args) {
	var script = document.createElement("script");
	script.setAttribute("type", "text/javascript");
	script.setAttribute("src", resource[0]);
	script.onload = function () {
		resource[1].apply(this, args);
	};
	document.head.appendChild(script);
}