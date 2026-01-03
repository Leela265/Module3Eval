import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const restaurantTypes = ['Rajasthani', 'Gujarati','Mughlai','Jain','Thai', 'North Indian', 'South Indian'];
const parkingOptions = ['Yes' , 'No'];
export default function AdminDashboard(){
    const [restaurants, setRestaurants] =useState([]);
    const [formData, setFormData] = useState({
        restaurantId: '',
        restaurantName: '',
        address: '',
        type: '',
        parking: '',
        image:"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"

    });
    useEffect(() => {
        const stored= localStorage.getItem('restaurants');
        if(stored)
            setRestaurants(JSON.parse(stored));
    }, [] );
    const handleAdd=(e) => {
        e.preventDefault();
        const id= Date.now().toString();
        const newRestaurant ={...FormDataEvent,restaurantId: id};
        const updated=[...restaurants, newRestaurant];
        localStorage.setItem('restaurants', JSON.stringify(updated));
        setRestaurants(updated);
        setFormData({restaurantId: '', restaurantName: '',address: '',type:'',parking:''});
        alert('Restaurant added successfully!');
    };
    
}