import { useEffect, useState } from "react"
import { save, update } from '../services/user'

function Form({ userUpdate, setUserUpdate, getData }) {

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

    const resetForm = () => {
        setName("")
        setLastName("")
        setEmail("")
        setUser("")
        setPassword("")
        setUserUpdate(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(validateForm()){
            await save({ name, lastName, email, user, password })
            getData()
            resetForm()
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if(validateForm()){
            await update(userUpdate.id, { name, lastName, email, user, password })
            getData()
            resetForm()
        }
    }

    useEffect(() => {
        if(userUpdate) {
            setName(userUpdate.name)
            setLastName(userUpdate.lastName)
            setEmail(userUpdate.email)
            setUser(userUpdate.user)
            setPassword(userUpdate.password)
        }
    }, [userUpdate])

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
                            <input type="email" className="form-control" name="user" value={user} onChange={handleChangeUser} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={handleChangePassword} />
                        </div>
                        {error && <div className="alert alert-danger"><i className="bi bi-exclamation-circle-fill"></i> {error}</div>}
                        <div className="d-flex justify-content-end">
                            {
                                userUpdate ?
                                    <div>
                                        <button type="button" className="btn btn-secondary me-2" onClick={() => resetForm()}>Cancelar</button>
                                        <button type="button" className="btn btn-warning" onClick={handleUpdate}>Actualizar</button>
                                    </div>
                                    :
                                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;