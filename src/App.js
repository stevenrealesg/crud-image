import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User';
import { getList, remove, save } from './services/user'

function App() {

  const [users, setUsers] = useState([]);

  const getData = async () => {
    const users = await getList()
    setUsers(users)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleUpdate = (user) => {
  }

  const handleDelete = async (id) => {
    const res = await remove(id)
    if (res) {
      const users = await getList()
      setUsers(users)
    }
  }

  const addUser = async () => {
    const res = await save()
    if (res) {
      const users = await getList()
      setUsers(users)
    }
  }
  return (
    <div className="container">
      <h2>Gestión de usuarios</h2>
      <hr />
      <div className='row justify-content-md-center'>
        <div className='col col-md-10 text-end'>
          <button className="btn btn-primary mb-3" onClick={addUser}>Agregar usuario al azar</button>
        </div>
        <div className='row justify-content-center'>
          {users.map(user => <User key={user.id} userData={user} handleUpdate={() => handleUpdate(user)} handleDelete={() => handleDelete(user.id)} getData={getData} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
