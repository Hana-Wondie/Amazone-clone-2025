import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import React, { useContext, useState } from "react";
import Layout from "../../Componets/Layout/Layout";
import classes from "../Payment/Payment.module.css";
import { DataContext } from "../../Componets/DataProvider/Dataprovider";
import ProductCard from "../../Componets/Product/ProductCard";
import CurrencyFormatter from "../../Componets/CurrencyFormatter.jsx/CurrencyFormatter";
function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  console.log(basket);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const [cardError, setCardError] =useState(null)
  const stripe = useStripe();
  const elements = useElements();
  const handleChange = (event) => {
event?.error.message? setCardError(event?.error.message) : setCardError(null)
  }
  return (
    <Layout>
      {/* header */}
      <div className={classes.paymentHeader}>Checkout {totalItem} items</div>
      {/* payment methos */}
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
              <form>
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
                  <button>Pay Now</button>
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
