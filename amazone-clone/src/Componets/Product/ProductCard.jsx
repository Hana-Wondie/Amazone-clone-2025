import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../CurrencyFormatter.jsx/CurrencyFormatter";
import classes from "../Product/Products.module.css"
import {Link} from "react-router-dom"
import { useContext } from "react";

import Type from "../../Utility/action.type";
import { DataContext } from "../DataProvider/Dataprovider";


function ProductCard({
  image,
  title,
  rate,
  count,
  price,
  id,
  flex,
  renderDescription,
  description,
  renderAdd
}) {

const [state, dispatch] = useContext(DataContext);
  console.log(state);
const addToCart = () => {
  dispatch({
    type: Type.ADD_TO_BASKET,
    item: {
      image,
      title,
      rate,
      count,
      price,
      id,
      flex,
      renderDescription,
      description,
    },
  });
}
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_fixed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDescription && (
          <div style={{ width: "490px" }}>{description}</div>
        )}
        <div className={classes.rating}>
          <Rating value={rate} precision={0.1} />
          <small>{count}</small>
        </div>
        <div>
          <CurrencyFormatter amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard
