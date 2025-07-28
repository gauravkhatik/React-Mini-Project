import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json")
  .then((res) => res.json())
  .then((res) => setData(res[currency]))
  .catch((err) => console.error("Failed to fetch currency data", err));

        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;