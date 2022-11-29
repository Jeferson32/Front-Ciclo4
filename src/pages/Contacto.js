import React from 'react'
import BannerContacto from '../components/BannerContacto'
import FormCotacto from '../components/FormContacto'
import Navegacion from '../components/Navegacion'



const Contacto = () => {
    return (
        <div>
            <Navegacion></Navegacion>
            <BannerContacto></BannerContacto>
            <FormCotacto></FormCotacto>
        </div>
    )
}

export default Contacto