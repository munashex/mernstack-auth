import {react, useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './App.css'




const Signup = () => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault()


      if(password.length < 5){
          setError('at least 6 numerics')
          setTimeout(() => {
           setError('')
          }, 4000)
      }

      const config = {
          headers: {
              "Content-type": "application/json"
          }
      }

try{

    await axios.post('/api/signup', {
        email: email,
        name: name,
        password: password
    },config)

    history.push('/login')
}catch(error){
    setError(error.message)
}

    }

    return (
        <div className="App">
            {error && <span style={{color: "red"}}>{error}</span>}
            <br/>
<form onSubmit={handleSubmit}>
<input
placeholder='name'
onChange={(e) => setName(e.target.value)}
/>
<br/>
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
<button type="submit">signup</button>
</form>

        </div>
    )
}



export default Signup;
