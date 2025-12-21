import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Componets/Layout/Layout";
import axios from "axios";
import { productURL } from "../../Api/endpoints";

import ProductCard from "../../Componets/Product/ProductCard";
import classes from "../Results/Results.module.css";
import Loader from "../../Componets/Loader/Loader";
function Results() {
  const { catagoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false)
  console.log(catagoryName);
  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `${productURL}/products/category/${catagoryName.replace(" ", "%20")}`
      )
      .then((res) => {
        setResults(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, [catagoryName]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Catagory/ ${catagoryName}</p>
          <hr />
          <div className={classes.product_container}>
            {results?.map((results) => (
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
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
