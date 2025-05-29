
const Registro = () => {

    return (
        <>
        <h1>Mini App Registro</h1>
        <form>
            <div className="d-flex flex-column">
                <div className="mb-3 mt-3">
                    <label for="name" className="form-label">Nombre Completo</label>
                    <input type="texr" className="form-control" id="name" aria-describedby="nameHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">No compartimos tu contraseña con nadie!</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
            </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
        </form></>
    );
}

export default Registro;