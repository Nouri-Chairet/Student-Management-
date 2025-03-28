import React from 'react'

const App = () => {
  const [data, setData] = React.useState(null);
  const [newUser, setNewUser] = React.useState(0);
  const [name, setName] = React.useState('');
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:3000/api/getUsers')
    .then(response => {
      response.json()
    .then(data => {
        setData(data);
      });
    }).catch(error => {
      console.error('Error:', error);
    }
    )}
    ,[newUser]);

    const handleSubmit = (event) => {

      event.preventDefault();

      if(name==='' || login==='' || password===''){
        alert("Please fill all the fields")
        return;
      }
      fetch("http://localhost:3000/api/addUser" 
        ,{
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
          'key':'value'
        },
        body: JSON.stringify({name, login, password})
      }
        
      ).then(res=>console.log(res.json) )
      .catch(error => {
        alert('Error:', error);
      }
      )
      setName('');
      setLogin('');
      setPassword('');
      setNewUser(newUser+1);
      alert("User added successfully")

    }
    
  return (
    <div>
      <div>
        <h1> Add User</h1>
        <form>
          <label>Name :</label>
          <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <label>Login :</label>
          <input type="text" name="login" value={login} onChange={(e)=>{setLogin(e.target.value)}} />
          <label>Password :</label>
          <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          <button onClick={handleSubmit}>Add User</button>
        </form>

      </div>
      <h1>Users:</h1>
      <ul>
        {data && data.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}


export default App
