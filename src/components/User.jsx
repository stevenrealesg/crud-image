import { useEffect, useState } from "react"

function User({ userData, handleUpdate, handleDelete }) {
    const { name, lastName, email, user } = userData
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState("")

    useEffect(() => {
        setIsLoading(true)
    }, [])

    useEffect(() => {
        if(isLoading){
            const getImage = async () => {
                const { url } = await fetch('https://picsum.photos/200')
                setImage(url)
                return url
            }
            getImage()
            setIsLoading(false)
        }
    }, [isLoading])

    return (
        <div className="col-md-12 mb-3">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name} {lastName}</h5>
                            <p className="card-text">{email}</p>
                            <p className="card-text"><small className="text-muted"><i className="bi bi-person-fill"></i> {user}</small></p>
                            <button className="btn btn-link" onClick={handleUpdate}><i className="bi bi-pencil-fill"></i> Editar</button>
                            <button className="btn btn-link text-danger" onClick={handleDelete}><i className="bi bi-trash3-fill"></i> Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;