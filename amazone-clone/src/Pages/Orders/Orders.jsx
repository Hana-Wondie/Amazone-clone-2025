import {useContext, useEffect, useState} from 'react'
import Layout from '../../Componets/Layout/Layout'
import {db} from "../../Utility/firebase"
import { DataContext } from '../../Componets/DataProvider/Dataprovider';
import classes from "../Orders/Orders.module.css"

import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import ProductCard from '../../Componets/Product/ProductCard';

function Orders() {
  const [orders, setOrders] = useState([])
  const [{user}, dispatch] = useContext(DataContext)
  useEffect(() => {
    if (user) {
      // Reference to the user's "orders" collection
      const ordersRef = collection(db, "users", user.uid, "orders");
      // Create query ordered by "created" descending
      const q = query(ordersRef, orderBy("created", "desc"));

      // Listen to real-time updates
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Cleanup listener on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <section className= {classes.container}>

<div className= {classes.orderContainer}>
  <h2>Your Orders</h2>
  {
    orders?.length === 0 && <p style={{
      padding:"20px"
    }}>No orders found</p>
  }
  {/* orderd items */}
  <div>
{
  orders?.map((eachOrders, i) => {
    return (
      <div key = {i}>
        <hr/>
        <p>order ID: {eachOrders?.id}</p>
        {
          eachOrders?.data?.basket?.map((results)=>{
            return(
              
            
            <ProductCard
              key={results.id}
              id={results.id}
              image={results.image}
              title={results.title}
              rate={results.rate}
              count={results.count}
              price={results.price}
              renderAdd={true}
              flex = {true}
            />
            )
          })
        }
      </div>
    )
  })
}
  </div>
</div>

      </section>
    </Layout>
  );
}

export default Orders
