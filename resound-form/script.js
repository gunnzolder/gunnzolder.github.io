(function($){
    var cloneControls = document.querySelectorAll('.order-form__control-group__copy-values input');

    for (var i = 0; i < cloneControls.length; i++) {
        cloneControls[i].addEventListener('change', copyValues);
    }

    function copyValues(e) {
        var $container = $(e.target).closest('.order-form__control-group'),
            $inputs = $container.find('.order-form__input'),
            checked = e.target.checked;

        $container[0].classList.toggle('order-form__control-group--disabled');

        for (var i = 0; i < $inputs.length; i++) {
            $inputs[i].disabled = checked;
        }
    }


    var leftInputs = $('[id$=-left]');


    for (var i = 0; i < leftInputs.length; i++) {
        leftInputs[i].addEventListener('change', doTheSame);
    }

    function doTheSame(e) {
        var copyHandler = $(e.target)
            .closest('.order-form__section')
            .find('.order-form__control-group__copy-values input')[0]
            .checked;

        var targetId = e.target.id.replace('-left', '-right');
        //
        if(copyHandler) {
            if (e.target.type == 'checkbox' || e.target.type == 'radio') {
                document.getElementById(targetId).checked = e.target.checked
            } else {
                console.log(targetId);
                console.log(e.target.value);
                document.getElementById(targetId).value = e.target.value;
            }
            //$('#'+targetId).value = e.target.value;
        }




        //console.log(e.target.value);
    }

})(jQuery);