import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validUsers={
    'admin@gmail.com' : {password: 'admin1234', role: 'admin' },
    'customer@gmail.com' : {password: 'customer1234', role: 'customer'}
};

export default function Login(){
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if(validUsers[email] && validUsers[email].password === password){
            const user= {email, role: validUsers[email].role};
            localStorage.setItem('user', JSON.stringify(user));
            if(user.role ==='admin'){
                navigate('/admin/dashboard');
            }
            else{
                navigate('/customer/dashboard');
            }
        }
        else{
            setError('Invalid email or pwd')
        }
    };

    return(
        <div style={{padding: '2rem', margin: 'auto', maxWidth: "400px"}}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) =>
                        setEmail(e.target.value)
                    } required style={{width: '100%'}} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) =>
                        setPassword(e.target.value)
                    } required style={{width: '100%'}} />
                </div>
                {error && <p style={{color:'red'}}>{error}</p>}
                <button type="submit" style={{width: '100%'}}>Login</button>
            </form>
        </div>
    )
}