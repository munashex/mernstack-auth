import {react, useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './App.css'




const Login = () => {


    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const handleLogin = async(e) => {
        e.preventDefault()


      

      const config = {
          headers: {
              "Content-type": "application/json"
          }
      }

try{

   const {data} = await axios.post('/api/login', {
        email: email,
      
        password: password
    },config)

    localStorage.setItem('accessToken', data.accessToken)
    history.push('/private')
}catch(error){
    setError(error.message)
}

    }

    return (
        <div className="App">
            {error && <span style={{color: "red"}}>{error}</span>}
            <br/>
<form onSubmit={handleLogin}>
<input
placeholder='email'
onChange={(e) => setEmail(e.target.value)}
/>
<br/>
<input
placeholder='password'
onChange={(e) => setPassword(e.target.value)}
/>
<br/>
<button type="submit">login</button>
</form>
        </div>
    )
}



export default Login;