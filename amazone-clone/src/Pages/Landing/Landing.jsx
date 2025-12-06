import CarouselEffect from "../../Componets/CarouselEffect/CarouselEffect.jsx"
import Catagory from "../../Componets/Catagories/Catagory.jsx"
import Layout from "../../Componets/Layout/Layout.jsx";
import Product from "../../Componets/Product/Product.jsx"

function Landing() {
  return (
    <>
      <Layout>
        <CarouselEffect />
        <Catagory />
        <Product />
      </Layout>
    </>
  );
}

export default Landing
