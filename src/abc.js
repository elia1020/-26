import React, { useState } from 'react';
import Card from './Card'; // ייבוא הקומפוננטה Card מקובץ חיצוני

function Abc({ restaurants }) { // העברת המשתנה restaurants כפרמטר לפונקציה



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

    return (
        <div>
            <form onSubmit={(event) => { event.preventDefault(); handleAddRestaurant(); }}>
                <input type="text" name="id" placeholder="ID" value={newRestaurant.id} onChange={handleChange} id="i1"/>
                <input type="text" name="name" placeholder="Name" value={newRestaurant.name} onChange={handleChange} id="i2"/>
                <input type="text" name="restaurant" placeholder="Restaurant" value={newRestaurant.restaurant} onChange={handleChange} id="i3"/>
                <input type="text" name="price" placeholder="Price" value={newRestaurant.price} onChange={handleChange} id="i4" />
                <input type="text" name="type" placeholder="Type" value={newRestaurant.type} onChange={handleChange} id="i5"/>
                <input type="text" name="imageUrl" placeholder="Image URL" value={newRestaurant.imageUrl} onChange={handleChange} id="i6"/>
                <button type="submit">Add Restaurant</button>
            </form>

            <div className="main-cards">
                {restaurants.map((restaurant) => (
                    <Card key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Abc;
