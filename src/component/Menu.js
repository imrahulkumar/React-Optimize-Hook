import useRestaurantMenu from '../util/useRestaurantMenu'; // imported custom hook useResMenuData which gives restaurant Menu data from swigy api
import useOnline from "../util/useOnline"; // imported custom hook useOnline which checks user is online or not

const Menu = () => {

        const [allRestaurants, filteredRestaurants] = useRestaurantMenu();
        const isOnline = useOnline();
        console.log('allRestaurants', allRestaurants);
        console.log('filteredRestaurants', filteredRestaurants);
        console.log('isOnline', isOnline);


    return (<div> 
                    <div> Online Status {isOnline ? 'Yes' : 'No'}</div>
                   <span> Restaurant List </span>
                   <div> {allRestaurants.map((item) => (
                   <div key={item.data.uuid}>
                        <div>
                            {item.data.name} 
                        </div>
                   </div>
                   ))} </div>
           </div>)
}


export default Menu;