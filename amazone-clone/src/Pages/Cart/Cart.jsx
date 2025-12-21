import { useContext } from "react";
import Layout from "../../Componets/Layout/Layout";
import { DataContext } from "../../Componets/DataProvider/Dataprovider";
import ProductCard from "../../Componets/Product/ProductCard";
import CurrencyFormatter from "../../Componets/CurrencyFormatter.jsx/CurrencyFormatter";
import { Link } from "react-router-dom";
import classes from "../Cart/Cart.module.css";
import Type from "../../Utility/action.type";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (results) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item : results,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cartContainer}>
          <h3>hello</h3>
          <h2>Your shooping basket</h2>
          <br />
          {basket?.length == 0 ? (
            <p>Opps!! no item in your basket</p>
          ) : (
            basket?.map((results) => (
              <section className={classes.cart_product}>
                <ProductCard
                  key={results.id}
                  id={results.id}
                  image={results.image}
                  title={results.title}
                  rate={results.rating?.rate}
                  count={results.rating?.count}
                  price={results.price}
                  flex={true}
                  renderDescription={true}
                  renderAdd={false}
                />

                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(results)}
                  >
                    <KeyboardArrowUpIcon/>
                  </button>
                  <span>{results.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(results.id)}
                  >
                    <KeyboardArrowDownIcon/>
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subTotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormatter amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
