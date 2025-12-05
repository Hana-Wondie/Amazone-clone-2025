import {useState, useEffect} from 'react'
import axios from "axios"
import ProductCard from './ProductCard';
import classes from "../Product/Products.module.css"
function Product() {
    const [products, setProducts] = useState([])
    useEffect(() => {

axios.get("https://fakestoreapi.com/products").then((res) => {
    console.log(res);
  setProducts(res.data)
}).catch((error) => {
    console.log(error);
});
    }, [])
  return (
    <section className= {classes.product_container}>
      {
        products?.map((results) => (
<ProductCard
key = {results.id}
image = {results.image}
title = {results.title}
rate = {results.rating.rate}
count = {results.rating.count}
price = {results.price}

/>
            
        ))
      }
    </section>
  )
}

export default Product
