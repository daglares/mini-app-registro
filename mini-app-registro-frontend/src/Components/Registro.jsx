import { useState } from 'react'

const Registro = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [mensaje, setMensaje] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleEnviar = async (e) => {
        e.preventDefault()
        setMensaje('')

        try {
            const response = await fetch('https://silver-space-pancake-7vp5gvg77jqq3pr7g-5000.app.github.dev/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            if (response.ok) {
                setMensaje(data.mensaje)
            } else {
                setMensaje(data.error)
            }
        } catch (error) {
            setMensaje('Error conectando el servidor')
        }
    }

    return (
        <>
            <h1>Mini App Registro</h1>
            <form onSubmit={handleEnviar}>
                <div className="d-flex flex-column">
                    <div className="mb-3 mt-3">
                        <label htmlFor="name" className="form-label">Nombre Completo</label>
                        <input name="name" type="texr" className="form-control" id="name" aria-describedby="nameHelp" value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} required/>
                        <div id="emailHelp" className="form-text">No compartimos tu contraseña con nadie!</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input name="password" type="password" className="form-control" id="exampleInputPassword1" value={formData.password} onChange={handleChange} required/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <p>{mensaje}</p>
            </>
    );
}

export default Registro;