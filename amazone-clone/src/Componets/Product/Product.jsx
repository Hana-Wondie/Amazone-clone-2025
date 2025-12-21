import {useState, useEffect} from 'react'
import axios from "axios"
import ProductCard from './ProductCard';
import classes from "../Product/Products.module.css"
import Loader from '../Loader/Loader';
function Product() {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
setLoading(true)
axios
  .get("https://fakestoreapi.com/products")
  .then((res) => {
    console.log(res);
    setProducts(res.data);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });
    }, [])
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products?.map((results) => (
            <ProductCard
              key={results.id}
              id={results.id}
              image={results.image}
              title={results.title}
              rate={results.rating.rate}
              count={results.rating.count}
              price={results.price}
              renderAdd={true}
             
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product
