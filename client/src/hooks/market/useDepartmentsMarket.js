import { useQuery} from 'react-query'


const fetchDepartmentForMarket = async (token) => {
    const res = await fetch(`${process.env.REACT_APP_API}api/market/department/all`,{
        headers:{
            "Authorization":token
        }
    });
    return res.json();
}

export const useDepartmentForMarket = (token) => {
    return useQuery('department-market' , ()=>fetchDepartmentForMarket(token))
}