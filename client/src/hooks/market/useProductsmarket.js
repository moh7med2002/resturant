import { useQuery} from 'react-query'


const fetchProductsForMarket = async (token) => {
    const res = await fetch(`${process.env.REACT_APP_API}api/market/product/all`,{
        headers:{
            "Authorization":token
        }
    });
    return res.json();
}

export const useProductsForMarket = (token) => {
    return useQuery('products-market' , ()=>fetchProductsForMarket(token))
}