import { useEffect, useState } from "react";
import { swiggy_api_URL}   from './constant'
const useRestaurantMenu = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{

        fetchData();

    },[]);


    const  fetchData = async () => {
        try {
                let response = await fetch(swiggy_api_URL)
                response = await response.json();
                setAllRestaurants(response?.data?.cards[2]?.data?.data?.cards);
                setFilteredRestaurants(response?.data?.cards[2]?.data?.data?.cards);
                console.log('response', response)
        }  catch(err){
                console.error(err); 
        }
       
    }

      return [allRestaurants, filteredRestaurants];;

}



export default useRestaurantMenu;