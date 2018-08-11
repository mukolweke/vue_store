import Vue from 'vue';

const camel = function(str){
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
}

const readMore = function (text, length, suffix) {

    return text.substring(0, length) + suffix;
};


const toKSH = function (value) {
    return `KSH ${value}.00`;
};

Vue.filter('camel', camel);

Vue.filter('readMore', readMore);

Vue.filter('toKSH', toKSH);


export default {
    camel: camel,
    readMore: readMore,
    toKSH: toKSH,
};