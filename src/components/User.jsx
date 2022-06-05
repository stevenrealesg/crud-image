import Form from "./Form";
import Modal from "./Modal";

function User({ userData, handleUpdate, handleDelete, getData }) {
    const { name, lastName, email, user, picture } = userData

    return (
        <div className="col-sm-6 col-md-5 mb-3">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-2">
                            <h6 className="card-title m-0">{name} {lastName}</h6>
                            <p className="card-text m-0"><small>{email}</small></p>
                            <p className="card-text m-0"><small className="text-muted"><i className="bi bi-person-fill"></i> {user}</small></p>
                            {/* <button className="btn btn-link" onClick={handleUpdate}><i className="bi bi-pencil-fill"></i> Editar</button> */}
                            <Modal
                                id={`modal-${userData.id}`}	
                                title="Editar usuario"
                                buttonContent={"Editar"}
                                buttonType={"link"}
                                prevIconTag={"pencil-fill"}
                                onClick={handleUpdate}
                            >
                                <Form userUpdate={userData} getData={getData} />
                            </Modal>
                            <button className="btn btn-link text-danger" onClick={handleDelete}><i className="bi bi-trash3-fill"></i> Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;