import { useState } from "react"

const Formulario = ({ mostrarMensaje }) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState(false);
    const [erroremail, setErroremail] = useState(false);
    const [errorpass, setErrorpass] = useState(false);


    const validarDatos = (e) => {
        //funcion antes de enviar el formulario
        e.preventDefault()

        //Verifica que input no esten vacios
        if (nombre === '' || email === '' || pass1 === "" || pass2 === '') {
            mostrarMensaje('Completa todos los campos', 'danger');
            return;
        }


        //Validacion de correo
        const emailVerification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVerification.test(email)) {
            mostrarMensaje('Mail Invalido', 'danger');
            return;
        }





        //Validacion de Constraseña
        if (pass1 !== pass2) {
            mostrarMensaje('Contraseñas no coinciden', 'danger');
            return;
        }


        mostrarMensaje('Registro exitoso', 'success');


        setNombre('');
        setEmail('');
        setPass1('')
        setPass2('')

    }


    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="tuemail@ejemplo.cl"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Constraseña"
                        className="form-control"
                        onChange={(e) => setPass1(e.target.value)}
                        value={pass1}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirma tu constraseña"
                        className="form-control"
                        //detecta el cambio de valor en el input
                        onChange={(e) => setPass2(e.target.value)}
                        value={pass2}
                    />
                </div>


                <br />

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                    {error ? <p className="error">Todos los campos son obligatorios</p> : null}
                </div>
            </form>

        </>
    )


}

export default Formulario