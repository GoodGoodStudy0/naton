/**
 * Created by pursuer on 15-4-28.
 */
//行数控制
;(function(){
    $.fn.extend({
        "rowsControlText":function(value){
            this.each(function(i){
                var divH = $(this).height();
                while ($(this).outerHeight() > 50) {
                    $(this).text($(this).text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                }
            })
        },
        "rowsControlTitle":function(value){
            this.each(function(i){
              var divH = $(this).height();
              while ($(this).outerHeight() > 20) {
                $(this).text($(this).text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
              }
            })
        }
    })
})(jQuery);
