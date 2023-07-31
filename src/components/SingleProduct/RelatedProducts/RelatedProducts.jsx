import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import Loader from "../../loader/Loader.jsx";
import Products from "../../Products/Products.jsx";

// * Here we will show the related data and fetch it from our custom hook

const RelatedProducts = ({ productId, categoryId }) => {
  // * creating state for loading
  const [load, setLoad] = useState(true);
  const { data } = useFetch(
    `/api/products?populate=*&[filters][id][$ne]=${productId} &[filters][categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=6`
  );
  // console.log(data);
  useEffect(() => {
    if (data === undefined) {
      return setLoad(true);
    } else {
      return setLoad(false);
    }
  }, [data]);

  return (
    <div className="related-products">
      {load ? (
        <Loader />
      ) : (
        <>
          <Products headingText="Related Products" products={data} />
        </>
      )}
    </div>
  );
};

export default RelatedProducts;
