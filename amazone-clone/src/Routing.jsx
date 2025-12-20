import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth"
import Payment from "./Pages/Payment/Payment"
import Orders from "./Pages/Orders/Orders"
import Cart from "./Pages/Cart/Cart"
import Results from "./Pages/Results/Results"
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import { CheckoutProvider } from "@stripe/react-stripe-js/checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Sg9A6PbUnsHewp99crmt2hJHPFYwZVHlzcU7vR5neJoIGtb74raOejVCCSP4LcT57VO2HjL93RjAsPDGQJ6iDIx00ZAkmJCuO"
);
function Routing() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/payment" element=
          {
          <Elements stripe={stripePromise}>
            <Payment />

          </Elements>
          
          } />
          <Route path="/orders" element={<Orders />} />
          <Route path="/categories/:catagoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routing
