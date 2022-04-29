import './App.css';
import User from './components/User';

function App() {


  return (
    <div className="container">
      <h2>Gestión de usuarios</h2>
      <hr/>
      <div className='row'>
        <div className='col-md-6'>
          <h3>Agregar usuario</h3>
        </div>
        <div className='col-md-6'>
          <h3>Lista de usuarios</h3>
          <User/>
          <User/>
          <User/>
        </div>
      </div>
    </div>
  );
}

export default App;
