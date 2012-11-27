# Color Mixer

For substractive mixing of colors.
Requires [jQuery](http://jquery.com/ "jQuery") and [jQuery Color](https://github.com/jquery/jquery-color/")


### Usage

includes:

	<script type="text/javascript" src="http://code.jquery.com/	jquery-1.8.1.min.js"></script>
	
	<script type="text/javascript" src="jquery-color/jquery.color.js"></script>
	
	<script type="text/javascript" src="color_mixer.js"></script>

without Options:

	color_1 = $.Color("#F5FF00");
	color_2 = $.Color("#00C2FF");
	
	result_color = Color_mixer.mix(color_1,color_2);
	
	$("body").css("background-color",result_color().toHexString());