import { useState } from "react"
import { save } from '../services/user'

function Form() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleChangeName = (e) => { setName(e.target.value) }
    const handleChangeLastName = (e) => { setLastName(e.target.value) }
    const handleChangeEmail = (e) => { setEmail(e.target.value) }
    const handleChangeUser = (e) => { setUser(e.target.value) }
    const handleChangePassword = (e) => { setPassword(e.target.value) }

    const validateForm = () => {
        if (!name.trim()) {
            setError("El nombre es requerido")
            return false
        }
        if (!lastName.trim()) {
            setError("El apelido es requerido")
            return false
        }
        if (!email.trim()) {
            setError("El email es requerido")
            return false
        }
        if (!user.trim()) {
            setError("El usuario es requerido")
            return false
        }
        if (!password.trim()) {
            setError("La contraseña es requerida")
            return false
        }

        setError(null)
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(validateForm()) await save({ name, lastName, email, user, password })
    }

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={handleChangeName} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Apellido</label>
                            <input type="text" className="form-control" name="lastName" value={lastName} onChange={handleChangeLastName} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Correo</label>
                            <input type="text" className="form-control" name="email" value={email} onChange={handleChangeEmail} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Usuario</label>
                            <input type="text" className="form-control" name="user" value={user} onChange={handleChangeUser} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={handleChangePassword} />
                        </div>
                        {error && <div className="alert alert-danger"><i className="bi bi-exclamation-circle-fill"></i> {error}</div>}
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;