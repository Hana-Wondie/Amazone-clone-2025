import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import React, { useContext, useState } from "react";
import Layout from "../../Componets/Layout/Layout";
import classes from "../Payment/Payment.module.css";
import { DataContext } from "../../Componets/DataProvider/Dataprovider";
import ProductCard from "../../Componets/Product/ProductCard";
import CurrencyFormatter from "../../Componets/CurrencyFormatter.jsx/CurrencyFormatter";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import Type from "../../Utility/action.type"


function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(basket);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setCardError] =useState(null)
  const[processing,setProcessing] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (event) => {
event?.error.message? setCardError(event?.error.message) : setCardError(null)
  }
  const handlePayment = async (e) => {
e.preventDefault()

try {
  setProcessing(true)
  const response = await axiosInstance({
    method: "POST",
    url: `/payment/create?total=${total*100}`
  })
console.log(response.data);
  const clientSecret = response.data.clientSecret;
  const {paymentIntent} = await stripe.confirmCardPayment(
    clientSecret, 
    {
      payment_method:{
        card:elements.getElement(CardElement),
      }
      
    }

  );
  console.log(paymentIntent);
await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
  basket: basket.map((item) => ({
    id: item.id ?? "",
    title: item.title ?? "",
    price: item.price ?? 0,
    amount: item.amount ?? 0,
    image: item.image ?? "",
  })),
  amount: paymentIntent.amount ?? 0,
  created: paymentIntent.created ?? Date.now(),
});

dispatch({
  type: Type.EMPTY_BASKET,


})
  setProcessing(false)
  navigate("/orders", {state:{msg:"you have pleased new order"}})
} 

catch (error) {
  console.log("error", error);
  setProcessing(false)

}


// 1
// backend || function contact to get the client secret
// 2 react side confirmation
// 3 after the conformtion...> order put on firestore, then clear basket


  }
  return (
    <Layout>
      {/* header */}
      <div className={classes.paymentHeader}>Checkout {totalItem} items</div>
      {/* payment methods */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery adress</h3>
          <div>
            <div>{user?.reloadUserInfo?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>

        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((results) => (
              <ProductCard
                key={results.id}
                id={results.id}
                image={results.image}
                title={results.title}
                rate={results.rate}
                count={results.count}
                price={results.price}
                flex={true}
              />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.paymentCardContainer}>
            <div className={classes.paymentDetails}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small
                    style={{
                      color: "red",
                    }}
                  >
                    {cardError}
                  </small>
                )}
                {/* card lement */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.paymentPrice}>
                  <div>
                    <span style={{display:"flex"}}>
                      <p>Total order |</p>
                      <CurrencyFormatter amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {
                      processing?(
                        <div className= {classes.loader}><ClipLoader color="grey" size={12}/>
                        <p>please wait....</p>
                        </div>
                      ):"Pay Now"
                    }
                    
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
