import React from 'react';
import { Card } from 'react-bootstrap'
import SocialButton from './SocialButton';
import Formulario from './Formulario';



const Registro = ({mostrarMensaje}) => {
    return (
        <Card className="rounded-4" >
            <Card.Body>
                <h1>Crea una Cuenta</h1>
                <br />
                <div className="insideCard" >
                    <SocialButton linkIMG="./src/assets/img/facebook.png"/>
                    <SocialButton linkIMG="./src/assets/img/github.png"/>
                    <SocialButton linkIMG="./src/assets/img/linkedin.png"/>
                </div>
                <br />
                <h5>O usa tu mail par registrarte</h5>
                <br />
                <div className="containerFormulario">
                    <Formulario mostrarMensaje={mostrarMensaje}/>
                </div>
            </Card.Body>
        </Card>
    );
}
export default Registro

