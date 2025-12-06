import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../CurrencyFormatter.jsx/CurrencyFormatter";
import classes from "../Product/Products.module.css"
import {Link} from "react-router-dom"
function ProductCard({image, title, rate, count, price, id}) {
  return (
    <div className= {classes.card_container}>
     <Link to= {`/products/${id}`}>
        <img src= {image} alt="" /></Link> 
        <div>
            <h3>{title}</h3>
            <div className= {classes.rating}>
       z       <Rating value={rate} precision={0.1}/>
              <small>{count}</small>
            </div>
            <div>
                <CurrencyFormatter amount={price}/>
            </div>

            <button className= {classes.button}>
                add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard
