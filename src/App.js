import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import User from './components/User';
import { getList, remove } from './services/user'

function App() {

  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState(null);

  const getData = async () => {
    const users = await getList()
    setUsers(users)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleUpdate = (user) => {
    setUserUpdate(user)
  }

  const handleDelete = async (id) => {
    const res = await remove(id) 
    if (res) {
      const users = await getList()
      setUsers(users)
    }
  }

  return (
    <div className="container">
      <h2>Gestión de usuarios</h2>
      <hr/>
      <div className='row'>
        <div className='col-md-6'>
          <h3>Agregar usuario</h3>
          <Form userUpdate={userUpdate} setUserUpdate={setUserUpdate} getData={getData}/>
        </div>
        <div className='col-md-6'>
          <h3>Lista de usuarios</h3>
          {users.map(user => <User key={user.id} userData={user} handleUpdate={() => handleUpdate(user)} handleDelete={() => handleDelete(user.id)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
