import Rating from "@mui/material/Rating";
import CurrencyFormatter from "../CurrencyFormatter.jsx/CurrencyFormatter";
import classes from "../Product/Products.module.css"

function ProductCard({image, title, rate, count, price}) {
  return (
    <div className= {classes.card_container}>
     <a href="">
        <img src= {image} alt="" /></a> 
        <div>
            <h3>{title}</h3>
            <div className= {classes.rating}>
              <Rating value={rate} precision={0.1}/>
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
