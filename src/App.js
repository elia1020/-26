import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Card from "./Card";
import './cards.css';
import restaurants from "./Restaurants";



function App(){
  


    const [newRestaurant, setNewRestaurant] = useState({
        id: '',
        name: '',
        restaurant: '',
        price: '',
        type: '',
        imageUrl: ''
    });

    const handleAddRestaurant = () => {
        restaurants.push(newRestaurant);
        setNewRestaurant({
            id: '',
            name: '',
            restaurant: '',
            price: '',
            type: '',
            imageUrl: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRestaurant({ ...newRestaurant, [name]: value });
    };
    
const [query,setQuery]=useState(""); 
const filtereData=restaurants.filter((item)=>{
    return item.name.toLowerCase().startsWith(query.toLowerCase());
});
const onClear=()=>{
    setQuery("")
};



return(
    <div className="main">
        <div className="titel">
            <h1 id="a1"> Restaurants</h1>
            
            <form onSubmit={(event)=>event.preventDefault()} id="a2">
                <label>Search restaurants by city:</label>
                <input id="search-query" type="text" onChange={(event)=>{setQuery(event.target.value)}}>
                </input>
                <button onClick={onClear} id="b1">clear</button>
            </form>
            <form onSubmit={(event) => { event.preventDefault(); handleAddRestaurant(); }}>
                    <input type="text" name="id" placeholder="ID" value={newRestaurant.id} onChange={handleChange} id="i1"/>
                    <input type="text" name="name" placeholder="Name" value={newRestaurant.name} onChange={handleChange} id="i2"/>
                    <input type="text" name="restaurant" placeholder="Restaurant" value={newRestaurant.restaurant} onChange={handleChange} id="i3"/>
                    <input type="text" name="price" placeholder="Price" value={newRestaurant.price} onChange={handleChange}id="i4" />
                    <input type="text" name="type" placeholder="Type" value={newRestaurant.type} onChange={handleChange} id="i5"/>
                    <input type="text" name="imageUrl" placeholder="Image URL" value={newRestaurant.imageUrl} onChange={handleChange} id="i6"/>
                    <button type="submit">Add Restaurant</button>
                </form>
            
        </div>
       
        <div className="main-cards">
            
           {filtereData.map((restaurants)=>(
            
                <Card Restaurants={restaurants}/>
                

            ))
            }
           
        </div>
        
    </div>


    


);


}  
export default App;   