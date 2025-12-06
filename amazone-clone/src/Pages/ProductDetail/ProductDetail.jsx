
import { useParams } from 'react-router-dom';
import Layout from '../../Componets/Layout/Layout'
import { useEffect, useState } from 'react';
import axios from "axios"
import { productURL } from '../../Api/endpoints';
import ProductCard from '../../Componets/Product/ProductCard';
function ProductDetail() {

const {productId} = useParams()
console.log(productId);
const [product, setProduct] = useState({})
useEffect(() => {
axios.get(`${productURL}/${productId}`).then((products) => {
  setProduct(products.data)
  console.log(product);
}).catch((err) => {
  console.log("error", err);
});



}, [productId])
  return (
    <Layout>
      <ProductCard
        key={product.id}
        image={product.images?.[0]}
        title={product.title}
        rate={product.rating}
        count={product.stock}
        price={product.price}
      />
    </Layout>
  );
}

export default ProductDetail
