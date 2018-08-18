<div class="container">
    <table id="cart" class="table table-hover table-condensed">
        <thead>
        <tr>
            <th style="width:50%">Product</th>
            <th style="width:10%">Price</th>
            <th style="width:8%">Quantity</th>
            <th style="width:22%" class="text-center">Subtotal</th>
            <th style="width:10%"></th>
        </tr>
        </thead>

        <transition-group name="list-shopping-cart" tag="tbody">
            <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.product_id"></app-cart-item>
        </transition-group>

        <tfoot>
        <tr class="visible-xs">
            <td class="text-center"><strong>Total {{ totalValue | toKSH }}</strong></td>
        </tr>
        <tr>
            <td>
                <button class="btn btn-warning" @click="saveShoppingCartLocal">
                    <i class="fa fa-angle-left"></i>Continue Shopping
                </button>
            </td>
            <td colspan="2" class="hidden-xs"></td>
            <td class="hidden-xs text-center"><strong>Total&nbsp;{{ totalValue | toKSH }}</strong></td>
            <td>
                <button class="btn btn-success btn-block" @click="checkout">
                    Checkout <i class="fa fa-angle-right"></i>
                </button>
            </td>
        </tr>
        </tfoot>
    </table>
</div>