import Vue from 'vue';

const formatDate = function (value) {
        if (value === null) {
            return '';
        }
        return moment(value).format('MMMM Do YYYY, h:mm:ss a');
    }

const camel = function(str){
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
}

const shortDescription = function(value) {

        if (value && value.length > 100) {

            return value.substring(0, 100) + '...';
        } else {
            return value;
        }
    }



Vue.filter('formatDate', formatDate);

Vue.filter('camel', camel);

Vue.filter('shortDescription', shortDescription);


export default {
    shortDescription: shortDescription,
    camel: camel,
    formatDate: formatDate,
};