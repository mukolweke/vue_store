import Vue from 'vue';


Vue.filter(
    'formatDate',
    function (value) {
        if (value === null) {
            return '';
        }
        return moment(value).format('MMMM Do YYYY, h:mm:ss a');
    }
);

