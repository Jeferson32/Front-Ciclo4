import React from 'react'
import '../css/formContacto.css'




const FormCotacto = () => {
    return (
        <div className="container form-contacto">
            <form className="row g-3">
                <h2 className="titulo-contacto">Contáctanos</h2>
                <div className="col-md-6 position-relative">
                    <label className="form-label">Nombres</label>
                    <input type="text" className="form-control" id="validationTooltip01" required />
                </div>
                <div className="col-md-6 position-relative mb-4">
                    <label for="validationTooltip02" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="validationTooltip02" required />
                </div>
                <div className="col-md-6 position-relative mb-4">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" required />
                </div>
                <div className="col-md-6 position-relative mb-4">
                    <label className="form-label">Celular</label>
                    <input type="number" className="form-control" required />
                </div>
                <div className="col-md-12 position-relative pt-2">
                    <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto mt-5">
                    <button className="btn btn-success" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default FormCotacto;