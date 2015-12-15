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

    var sideSelectors = document.querySelectorAll('input[name="side"]');

    for (var i = 0; i < sideSelectors.length; i++) {
        sideSelectors[i].addEventListener('change', showSide);
    }

    function showSide(e) {
        console.log(e.target.value);
        if (e.target.value == 'right') {
            $('.order-form__control-group--left').hide();
            $('.order-form__control-group--right').addClass('order-form____control-group--single').show();
            var copyValuesControls = $('.order-form__control-group__copy-values');
            console.log(copyValuesControls);
            $.each(copyValuesControls , function(){
                $(this).find('input').trigger('click', false);
                $(this).hide();
            });
        } else if (e.target.value == 'left') {
            $('.order-form__control-group--right').hide();
            $('.order-form__control-group--left').show();
        } else {
            $('.order-form__control-group--right').removeClass('order-form____control-group--single').show();
            $('.order-form__control-group--left').show();
            var copyValuesControls = $('.order-form__control-group__copy-values');
            $.each(copyValuesControls , function(){
                $(this).find('input').prop('checked', true);
                $(this).show();
            });
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

        if(copyHandler) {
            if (e.target.type == 'checkbox' || e.target.type == 'radio') {
                document.getElementById(targetId).checked = e.target.checked
            } else {
                document.getElementById(targetId).value = e.target.value;
            }
        }



    }

    var getData = $.getJSON('configs.json');
    var getTemplate = $.get('radios.tp');

    //var data = $('#someUniqueDataId').html();
    //var template = $('#someUniqueTemplateId').html();





    $.when(getData, getTemplate).done(function(data, template){

        function filterData() {
            this.getUniqueProperties = function (input, indexes){




                var output = {
                    families: [],
                    technologies: [],
                    shellTypes: []
                };

                var newInput = (indexes) ? _.at(input, indexes) : input ;

                for (var i = 0; i < newInput.length; i++) {

                    if(output.families.indexOf(newInput[i].family) == -1) {
                        output.families.push(newInput[i].family);
                    }
                    if(output.technologies.indexOf(newInput[i].techLevel) == -1){
                        output.technologies.push(newInput[i].techLevel);
                    }
                    if(output.shellTypes.indexOf(newInput[i].shellType) == -1){
                        output.shellTypes.push(newInput[i].shellType);
                    }
                }


                return (newInput.length == 0)? console.log(window.oldFilterValues) : output;

            }

            this.isValid = function(item, filterValues) {
                var result =  (filterValues.family == item.family || !filterValues.family) &&
                    (filterValues.technology == item.techLevel || !filterValues.technology) &&
                    (filterValues.shellType == item.shellType || !filterValues.shellType);

                return result;
            }

            this.getIndexes = function(data, filterValues){

                var indexes = [], thisData = data;

                for (var i = 0; i < data.length; i++) {
                    thisData[i].index = i;
                    if(this.isValid(thisData[i], filterValues)) {
                        indexes.push(i);
                    }

                }


                return indexes;
            }
        }

        filterData = new filterData();

        var thisData = data[0].slice(0);

        var controls = filterData.getUniqueProperties(thisData);

        var tmpl = $.templates(template[0]),
            result = tmpl.render(controls);

        $(".order-form__section--main-model").html(result);


        $(".order-form__section--main-model input").change(function(){



            $(".order-form__section--main-model input[data-available]").removeAttr("data-available");

            function filterValuesClass(input) {
                    input = input || {};
                    this.family = (input.families)?input.families.value : false;
                    this.technology = (input.technologies)?input.technologies.value : false;
                    this.shellType = (input.shellTypes)?input.shellTypes.value : false;
            }

            function makeFilterValues(container) {
                return new filterValuesClass({
                    families : document.querySelector(container+'--families input:checked'),
                    technologies : document.querySelector(container+'--technologies input:checked'),
                    shellTypes : document.querySelector(container+'--shell-types input:checked'),
                });
            }

            var filterValues = makeFilterValues('.order-form__input-block');
            console.log(filterValues);

            var indexes = filterData.getIndexes(thisData, filterValues),
                filteredData = filterData.getUniqueProperties(data[0], indexes);
            console.log(filteredData);

            if(indexes.length == 0) {
                filterValues = window.oldfilterValues;
                console.log("POZHAR");
                var key = this.id.split('-')[0],
                    value = this.id.split('-')[1];
                filterValues = new filterValuesClass();
                filterValues[key] = value;

                var kljsfghlsfjdhldg = this.id;

                $('.order-form__input-block input').each(function(){
                    if(this.id != kljsfghlsfjdhldg) this.checked = false;
                });


                console.log(kljsfghlsfjdhldg);

                //$('#'+kljsfghlsfjdhldg).click();\

               $('#'+kljsfghlsfjdhldg).trigger('change');


                //document.querySelector("#"+kljsfghlsfjdhldg).checked = true;


            } else {
                window.oldfilterValues = filterValues;
                console.log(filterValues);
            }

            function highlightStuff(filteredData){
                for(var value in filteredData) {
                    for (var i = 0; i < filteredData[value].length; i++) {
                        $("input[value="+filteredData[value][i]+"]").attr('data-available', true);
                    }
                }
            }

            highlightStuff(filteredData);
        });
    });


})(jQuery);