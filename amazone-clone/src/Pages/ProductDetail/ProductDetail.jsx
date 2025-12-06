
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
axios.get(`${productURL}/${productId}`).then((products) => {
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
          image={product.images?.[0]}
          title={product.title}
          rate={product.rating}
          count={product.stock}
          price={product.price}
        />
      )}
    </Layout>
  );
}

export default ProductDetail
