(function ($) {
    $.fn.msgbox = function (method) {

        var options = null;
        var methodName = '';
        var params = [];

        if (arguments.length >= 1 && typeof (arguments[0]) == 'object')
            options = arguments[0];
        else if (arguments.length >= 1 && typeof (arguments[0]) == 'string') {
            methodName = arguments[0];
            params = arguments[1];
        }

        var attr = {
            'target': null,
            'container': null,
			'msg': '',
			'msgbox_main': null,
			'maxWidth': null,
			'type': 'hint',
			'autoShow': false,
			'msgbox_arrow': null
        };

        var methods = {
            init: function (options) {
                var $this = this;

                $this.attr = $.extend(true, {}, attr, options);
                $this.attr.target = $(this);

                methods.build.call($this);
            },

            build: function () {
                var $this = this;

                $($this.attr.target).wrap("<div class='msgbox_container' />");
				$this.attr.container = $($this.attr.target).parent();
				
				$($this.attr.container).prepend("<div class='msgbox_main' />");
				$this.attr.msgbox_main = $($this.attr.container).find('.msgbox_main');
				$($this.attr.msgbox_main).addClass($this.attr.type);
				
				$($this.attr.msgbox_main).css({
					'bottom': $($this.attr.target).height()
				});
				
				$($this.attr.msgbox_main).append($this.attr.msg);
				
				$($this.attr.msgbox_main).append('<img class="msgbox_arrow" src="img/arrow_down_'+$this.attr.type+'.png" alt="" />')
				
				$this.attr.msgbox_arrow = $($this.attr.msgbox_main).find('.msgbox_arrow');
				
				$($this.attr.msgbox_arrow).css({
					'left': ($($this.attr.msgbox_main).width() / 2) - ($($this.attr.msgbox_arrow).width() / 2)
				});
				
				if($this.attr.autoShow) {
					methods.show.call($this);
				}
            },
			
			show: function(){
				var $this = this;
				$this.attr.msgbox_main.show();
			},
			
			hide: function(){
				var $this = this;
				
				$($this.attr.msgbox_main).hide();
			},
			
			remove: function(){
				var $this = this;
				
				$($this.attr.msgbox_main).remove();
				$($this.attr.target).unwrap();
			}
        };

        if (methodName != '') {
            if (methods[methodName]) {
                return this.each(function () {
                    methods[methodName].call(this, params);
                });
            }
            else {
                $.error("Method '" + methodName + "' does not exist on jQuery.msgbox");
                return;
            }
        }

        return this.each(function () {
            methods.init.call(this, options);
        });
    };
})(jQuery);