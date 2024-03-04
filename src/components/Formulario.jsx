import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [email, setEmail] = useState("");
    const [error,setError]=useState(false);

    const validarDatos = (e) => {
        //funcion antes de enviar el formulario
        e.preventDefault()

        //validacion
        if (nombre === '' || apellido === '' || edad === "" | email === '') {
            setError(true);
            return;
        }
        setError(false);
        setNombre('');
        setApellido('');
        setEdad('');
        setEmail('');

    };


    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setApellido(e.target.value)}
                        value={apellido}
                    />
                </div>

                <div className="form-group">
                    <label>Edad</label>
                    <input
                        type="text"
                        name="edad"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setEdad(e.target.value)}
                        value={edad}
                    />

                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <br />

                <button type="submit" className="btn btn-primary">Registrarse</button>

                {error?<p className="error">Todos los campos son obligatorios</p>:null}
            </form>

        </>
    )


}

export default Formulario