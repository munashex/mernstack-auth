import {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Private = () => {

    const [userClient, setUser] = useState();
    const [error, setError] = useState();
    

    const history = useHistory()

    useEffect(() => {

const config = {
    headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem('accessToken')
    }
}

axios.get('/api/clients', config)
.then(res => {
    console.log(res.data)
    setUser(res.data)
})
.catch(error => setError('access denied login first'))
        
    }, [])

    const handleLogout = () => {
        localStorage.clear()
        history.push('/login')
    }

    return (
        <div className='App'>
{error? <span>access denied</span>:
<div>
    {userClient && userClient.map((item, index) => {
        return (
            <div key={index}>
<h1>{item.name}</h1>
<br/>
<pre>{item.age}</pre>
            </div>
        )
    })}
</div> 
 }
 <button onClick={handleLogout}>logout</button>

        </div>
    )

}

export default Private