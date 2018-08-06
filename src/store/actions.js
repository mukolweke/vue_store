import {ref, firebaseAuth} from '../firebase.conf';


export const updateCart = ({ commit }, order) => {

    commit('UPDATE_CART', {order});

    // message
    if (order.isAdd) {

        let message_obj = {
            message: `${item.product_name} added to cart`,
            messageClass: "success",
            autoClose: true
        }

        commit('ADD_MESSAGE', message_obj);
    }

}

export const removeItemInCart = ({commit}, {item}) => {

    commit('REMOVE_CART_ITEM', {item});

}

export const registerByEmail = (_, {email, password}) => {

    return firebaseAuth().createUserWithEmailAndPassword(email, password);

}

export const logout = ({commit}) => {

    commit('SET_CART', []);

    return firebaseAuth().signOut();
}

export function loginWithEmail(_, {email, password}) {

    return firebaseAuth().signInWithEmailAndPassword(email, password);

}

export function listenToProductList({commit}) {

    return ref.child("products").on('value', (products) => {

        commit('UPDATE_PRODUCT_LIST', products.val());

    });
}

export function getShoppingCart({commit}, {uid, currentCart}) {
    if (uid) {

        return ref.child("cart/" + uid).once('value').then((cart) => {

            if (cart.val() && (!currentCart || currentCart.length === 0)) {

                commit('SET_CART', cart.val());
            }
        });
    } else {

        console.log("User has not logged in");
    }
}

export function saveShoppingCart(_, {uid, cartItemList}) {

    return ref.child("cart/" + uid).set(cartItemList);

}

export function saveToTransaction(_, {uid, cartItemList}) {

    let newTransactionKey = ref.child("transactions").push().key;

    let newTransaction = {}

    newTransaction['/transactions/' + uid + '/' + newTransactionKey] = cartItemList;

    return ref.update(newTransaction);

}
