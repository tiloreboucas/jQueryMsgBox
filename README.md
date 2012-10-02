jQueryMsgBox
============

Caixa de diálogo para campos de formulario


		        $("#msgboxHint").msgbox({
		            'type': 'hint',
		            'msg': 'Olá, essa é uma mensagem de HINT'
		        }).focus(function () {
		            $("#msgboxHint").msgbox('show');
		        }).focusout(function () {
		            $("#msgboxHint").msgbox('hide');
		        });

		        $("#msgboxErro").msgbox({
		            'type': 'erro',
		            'msg': 'Olá, essa é uma mensagem de ERRO'
		        }).focus(function () {
		            $("#msgboxErro").msgbox('show');
		        }).focusout(function () {
		            $("#msgboxErro").msgbox('hide');
		        });
                