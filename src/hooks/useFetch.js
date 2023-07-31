import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

// here i am creating custom hook for calling api
const useFetch = (endPoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    const makeApiCallForSingleCategory = async () => {
      const res = await fetchDataFromApi(endPoint);
      setData(res);
    };

    makeApiCallForSingleCategory();
  }, [endPoint]);

  return { data };
};

export default useFetch;
