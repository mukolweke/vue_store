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

const toQTY = function (value) {
    return `QTY: ${value} units`;
};

const toUp = function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
}

Vue.filter('camel', camel);

Vue.filter('readMore', readMore);

Vue.filter('toKSH', toKSH);

Vue.filter('toQTY', toQTY);

Vue.filter('toUp', toUp);


export default {
    camel: camel,
    readMore: readMore,
    toKSH: toKSH,
    toQTY: toQTY,
    toUp: toUp,
};