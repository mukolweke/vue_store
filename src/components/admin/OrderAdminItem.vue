<template>
    <tr style="height: 80px;">
        <td style="width:30%;padding-top: 30px;" data-th="Customer">{{ order.order_name }}</td>
        <td style="width:20%;padding-top: 30px;" data-th="Order Description">
            {{getDate}}
        </td>
        <td style="width:20%;padding-top: 30px;" data-th="Subtotal" class="text-center">{{orderTotal | toKSH}}</td>
        <td style="width:30%;padding-top: 30px;" data-th="Subtotal" v-if="order.status == 0" class="text-center">
            <span class="alert alert-danger" role="alert"> Pending </span>
        </td>
        <td style="width:30%;padding-top: 30px;" data-th="Subtotal" v-else class="text-center">
            <span class="alert alert-success" role="success"> Sent </span>
        </td>
        <td style="width:20%;padding-top: 30px;" class="actions" data-th="">
            <!--<router-link :to="{ name: 'order_view', params: { order_id: order.order_id }}"></router-link>-->

            <a class="button" @click="dialogTableVisible = true"><span class="glyphicon glyphicon-eye-open"></span></a>
        </td>

        <el-dialog :before-close="handleClose" :visible.sync="dialogTableVisible">
            {{order.order_id}} {{order.order_name}}

        </el-dialog>
    </tr>
</template>

<script>
    import {mapActions} from 'vuex';
    import {orderMixin} from "../../mixins/orderMixin";

    export default {
        props: ['order','index'],

        data() {
            return {
                shoppingList: [],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            };
        },

        mixins: [orderMixin],

        computed: {

            orderTotal() {

                return this.order.shopping_list.reduce((acc, current) => acc + (current.product_quantity * current.product_price), 0);

            },

            getDate() {
                let myDate = new Date();
                let month = ('0' + (myDate.getMonth() + 1)).slice(-2);
                let date = ('0' + myDate.getDate()).slice(-2);
                let year = myDate.getFullYear();
                return year + '/' + month + '/' + date;
            },


        },

        methods:{
            // handleClose(done) {
            //     this.$confirm('Are you sure to close this dialog?')
            //         .then(_ => {
            //             done();
            //         })
            //         .catch(_ => {});
            // }
        }
    }
</script>
