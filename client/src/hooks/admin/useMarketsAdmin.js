import { useQuery} from 'react-query'


const fetchMarketsForAdmin = async (token) => {
    const res = await fetch(`${process.env.REACT_APP_API}api/admin/market/all`,{
        headers:{
            "Authorization":token
        }
    });
    return res.json();
}

export const useMarketsForAdmin = (token) => {
    return useQuery('markets-admin' , ()=>fetchMarketsForAdmin(token))
}