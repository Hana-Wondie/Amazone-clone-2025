
import { useParams } from 'react-router-dom';
import Layout from '../../Componets/Layout/Layout'
import { useEffect, useState } from 'react';
import axios from "axios"
import { productURL } from '../../Api/endpoints';
import ProductCard from '../../Componets/Product/ProductCard';
import Loader from "../../Componets/Loader/Loader"
function ProductDetail() {

const {productId} = useParams()
console.log(productId);
const [product, setProduct] = useState({})
const [isLoading, setLoading] =  useState(false)
useEffect(() => {
  setLoading(true)
axios.get(`${productURL}/products/${productId}`).then((products) => {
  setProduct(products.data)
  setLoading(false)
  console.log(product);
}).catch((err) => {
  console.log("error", err);
  setLoading(false)
});



}, [productId])
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          rate={product.rating?.rate}
          count={product.rating?.count}
          price={product.price}
          flex = {true}
          renderDescription = {true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail
