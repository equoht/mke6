import { useEffect } from "react";
import { useState } from "react";
import Search from "../../components/Search/Search"

export default function PostsPage(){
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState([]);

    const[search, setSearch] = useState('');
    function handleChange(e){
        setSearch(e.target.value);
    }
    const filtredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()));

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users'),{
            method: 'POST',
            body: formData,
        };
        e.target.reset();
        setMessage( 'Форма отправлена' );
    }
    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }

    useEffect(() => {
        fetchUsers();
    },[]);

    console.log(users)

    return(
        <div className="container">
            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:'column', gap:'10px', maxWidth:'600px', padding: '15px', border: '1px solid blue', marginBottom:'20px'}}>
                <input style = {{border: '1px solid #e5e5e5', width: '100%', padding:'15px',}}type="text" name="title" placeholder="Имя" />
                <input style = {{border: '1px solid #e5e5e5', width: '100%', padding:'15px',}}type="text" name ='body' placeholder="Фамилия" />
                <button style = {{backgroundColor:'darkblue', padding:'15px', color:'white'}}type="submit">Отправить форму</button>
                <p style={{color:'red'}}>{message}</p>
            </form>
            <Search handleChange={handleChange}/>

            {
                
                filtredUsers.map(user => {
                    return(
                       <div className="user" style={{ marginTop:'15px', padding: '15px', border: '1px solid #e5e5e5', marginBottom:'20px'}}>
                            <h3>id: {user.id} </h3>
                            <p>{user.name}</p>

                          
                            

                        </div> 
                    )
                })
            }

        </div>
    )
}