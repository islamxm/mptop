import $ from "jquery";
import select2 from "select2";

export const sl = () => {
    function formatState (state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "./img/clc";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-resource" /> ' + state.text + '</span>'
        );
        return $state;
    };

    $('.select-self').select2({
        templateResult: formatState,
        templateSelection: formatState,
        minimumResultsForSearch: -1,
    });
    $('.select-num').select2({
        minimumResultsForSearch: -1,
    });
}
