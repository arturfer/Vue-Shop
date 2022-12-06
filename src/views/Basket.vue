<template>
  <div class="basket">
    <div class="items">

      <div v-for="(item, index) in this.productsInBag" :key="index" class="item">
        <div @click="this.$store.dispatch('removeFromBag', item.id)" class="remove">Remover Produto</div>
        <div class="photo"><img :src="item.image" :alt="item.title"></div>
        <div class="description">{{item.title}} </div>
        <div class="price">
          <span class="quantity-area">
            <button @click="item.quantity--" :disabled="item.quantity <= 1">-</button>
            <span class="quantity">{{item.quantity}}</span>
            <button @click="item.quantity++">+</button>
          </span>
          <span class="amount">U$ {{(item.quantity * item.price).toFixed(2)}}</span>
        </div>
      </div>
      <div  v-if="this.productsInBag.length > 0" class="grand-total"> Total do pedido: U$ {{orderTotal()}}</div>
      <div v-else>Carrinho vazio :(</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'Basket',

  methods: {
   orderTotal() {
    let total = 0;
    this.$store.state.productsInBag.forEach(el=> {
      total += el.price * el.quantity
    })
    return total.toFixed(2)
   }
  },
  computed: mapState(['products', 'productsInBag']),
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
