<template>
<section class="custom-chou">
  <!-- check out section -->
  <div class="checkout-section mt-150 mb-150">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="checkout-accordion-wrap">
            <div class="accordion" id="accordionExample">
              <div class="card single-accordion">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Billing Address
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <div class="billing-address-form">
                      <form action="index.html">
                        <p><input type="text" placeholder="Ship Name"></p>
                        <p><input type="text" placeholder="Ship Address"></p>
                        <p><input type="tel" placeholder="Ship Phone"></p>
                        <p><textarea name="bill" id="bill" cols="30" rows="10" placeholder="Ship note"></textarea></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card single-accordion">
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Shipping Address
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    <div class="shipping-address-form">
                      <p>Your shipping address form is here.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card single-accordion">
                <div class="card-header" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Card Details
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div class="card-body">
                    <div class="card-details">
                      <p>Your card details goes here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="col-lg-4">
          <div class="order-details-wrap">
            <table class="order-details">
              <thead>
              <tr>
                <th>Your order Details</th>

                <th>Price</th>
              </tr>
              </thead>
              <tbody class="order-details-body" >
              <tr v-for="order in this.cartData.orderDetails" v-bind:key="order">
                <td>{{order.productName}}</td>

                <td>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.quantity*order.unitPrice) }}</td>
              </tr>
              </tbody>
              <tbody class="checkout-details">
              <tr>
                <td>Subtotal</td>
                <td>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.cartData.totalPrice) }}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(50000) }}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.cartData.totalPrice+50000) }}</td>
              </tr>
              </tbody>
            </table>
            <a href="#" class="boxed-btn">Place Order</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end check out section -->

</section>
</template>

<script>
import OrderService from "../../service/OrderService";

export default {
  name: "CheckOut",
  data(){
    return{
      cartData:[],
      orderdata:[],
      params:{
        productId: undefined
      },
      productQuantity:{
        productId: undefined,
        quantity: undefined
      },
      ship:{
          shipName:undefined,
        shipAddress:undefined,
        shipPhone:undefined,
        shipNote:undefined
      }
    }
  },
  created() {
    this.getCartData()
  },
  methods:{
    getCartData() {
      OrderService.getAll().then(rs => {
        this.cartData = rs.data
        console.log(this.cartData)
      })
    },
    getOrder(){
      OrderService.getOrders().then(rs=>{
        this.orderdata = rs.data.data
      })
    }
  }
}
</script>

<style>
.custom-chou{
  padding-top: 250px;
}
</style>