(function($){
jQuery.fn.mon_infobulle = function(options) {
var element = document.createElement("div");
$(element).addClass(options.infobullecss).hide();
document.body.appendChild(element);
return this.each(function() {
$(this).hover(function() {
$(element).show();
$(element).html($(this).attr("rel"));
$(this).mousemove(function(e) {
$(element).css({ "position": "absolute",
                 "top": e.pageY + options.offsetY,
                 "left": e.pageX + options.offsetX
});
});
}, function() {
$(element).hide()
});
});
};
})(jQuery)
