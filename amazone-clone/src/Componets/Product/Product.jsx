import {useState, useEffect} from 'react'
import axios from "axios"
import ProductCard from './ProductCard';
import classes from "../Product/Products.module.css"
function Product() {
    const [products, setProducts] = useState([])
    useEffect(() => {

axios
  .get("https://dummyjson.com/products")
  .then((res) => {
    console.log(res);
    setProducts(res.data.products);
  })
  .catch((error) => {
    console.log(error);
  });
    }, [])
  return (
    <section className= {classes.product_container}>
      {
        products?.map((results) => (
<ProductCard
key = {results.id}
id = {results.id}
image = {results.thumbnail}
title = {results.title}
rate = {results.rating}
count = {results.stock}
price = {results.price}

/>
            
        ))
      }
    </section>
  )
}

export default Product
