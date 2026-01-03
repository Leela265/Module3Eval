import { use, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({allowedRole}) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    useEffect(()=>{
        if(!user || user.role !== allowedRole){
            localStorage.removeItem('user');
            navigate('/');
        }
    },[user, allowedRole, navigate]);

    if (!user || user.role !== allowedRole){
        return <div>Redirecting...</div>
    }
    return <Outlet />;
}