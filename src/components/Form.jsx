import { useEffect, useState } from "react"
import { update } from '../services/user'

function Form({ userUpdate, getData }) {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(null)

    const handleChangeName = (e) => { setName(e.target.value) }
    const handleChangeLastName = (e) => { setLastName(e.target.value) }
    const handleChangeEmail = (e) => { setEmail(e.target.value) }
    const handleChangeUser = (e) => { setUser(e.target.value) }

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

        setError(null)
        return true
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            await update(userUpdate.id, { name, lastName, email, user })
            getData()
            // resetForm()
            setMessage("Usuario actualizado correctamente.")
        }
    }

    useEffect(() => {
        if (userUpdate) {
            setName(userUpdate.name)
            setLastName(userUpdate.lastName)
            setEmail(userUpdate.email)
            setUser(userUpdate.user)
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
                        {error && <div className="alert alert-danger"><i className="bi bi-exclamation-circle-fill"></i> {error}</div>}
                        {message && <div className="alert alert-success"><i className="bi bi-exclamation-circle-fill"></i> {message}</div>}
                        <div className="d-flex justify-content-end">
                            <div>
                                <button type="button" className="btn btn-warning" onClick={handleUpdate}>Actualizar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;