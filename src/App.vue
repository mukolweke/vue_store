<template>
  <div>
    <app-header></app-header>
    <alert-component></alert-component>
    <div class="container">

      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import { mapActions } from 'vuex';
    import Header from './components/inc/Navbar';
    import AlertComponent from './components/inc/AlertComponent.vue';

    export default {
        components: {
            appHeader: Header,
            AlertComponent
        },
        methods: {
            ...mapActions(['getShoppingCart', 'listenToProductList'])
        },

        created() {
            let uid = this.$store.getters.currentUser.uid;
            this.listenToProductList();
            this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
        }
    }
</script>

<style>
  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  .margin-left-sm {
    margin-left: 10px;
  }
  html, body {
    height: 100%;
  }
  .wrapper {
    min-height: 100%;
    margin-bottom: -50px;
    padding-bottom: 50px;
  }
  .inline-block {
    display: inline-block;
  }
</style>
