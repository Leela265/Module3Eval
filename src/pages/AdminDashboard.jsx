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
    const update =(r)=>{
        window.location.href=`/admin/restaurant/update?restaurantId=${r.restaurantId}`
    }
    return (
        <div style={{display:'flex'}}>
            <div style={{width:280, padding:20}}>
                <h3>Add Restaurantn</h3>
                <form onSubmit={handleAdd}>
                    <input placeholder="Name" value={formData.restaurantName} onChange={e=>
                        setFormData({...formData,restaurantName:e.target.value})
                    } required style={{display:"block",width:'100%', margin:'5px 0' , padding:'8px'}}/>
                    <input placeholder="Address" value={formData.address} onChange={e=>setFormData({...formData,address:e.target.value})} required
                    style={{display:"block",width:'100%', margin:'5px 0' , padding:'8px'}}/>
                    <select value={formData.type} onChange={e=>setFormData({...formData,type:e.target.value})}
                    required style={{display:"block",width:'100%', margin:'5px 0' , padding:'8px'}}/>
                </form>
            </div>
        </div>
    )
}