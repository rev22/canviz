var debug = exports.debug = function(str, escape) {
	str = String(str);
	if ('undefined' === typeof escape) {
		escape = true;
	}
	if (escape) {
        str = _.str.escapeHTML(str);
	}
	$('debug_output').innerHTML += '&raquo;' + str + '&laquo;<br />';
};

var debugClear = exports.debugClear = function() {
    $('debug_output').innerHTML = '';
};
