import React from 'react'
import BannerContacto from '../components/BannerContacto'
import Navegacion from '../components/Navegacion'
import TableCarrito from '../components/TableCarrito'

const Carrito = () => {
  return (
    <div>
      <Navegacion></Navegacion>
      <BannerContacto></BannerContacto>
      <TableCarrito></TableCarrito>
    </div>
  )
}

export default Carrito