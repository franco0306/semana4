import React from 'react';
import { Button } from 'react-bootstrap';

const Aside = () => {
    return (
        <aside>
            <h2 style={{ color: '#004d00' }}>Datos Personales: <span className="badge text-bg-secondary" style={{ backgroundColor: '#004d00' }}>Ahora!</span></h2>
            <br />
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Nombres" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" style={{ color: '#004080' }} />
                </div>
            </div>
            <br />
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label" style={{ color: '#004080' }}>GMAIL</label>
                    <input type="email" className="form-control" id="inputEmail4" style={{ color: '#004080' }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label" style={{ color: '#004080' }}>Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword4" style={{ color: '#004080' }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label" style={{ color: '#004080' }}>Dirección 1</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" style={{ color: '#004080' }} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label" style={{ color: '#004080' }}>Dirección 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" style={{ color: '#004080' }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label" style={{ color: '#004080' }}>Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" style={{ color: '#004080' }} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label" style={{ color: '#004080' }}>Estado</label>
                    <select id="inputState" className="form-select" style={{ color: '#004080' }}>
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label" style={{ color: '#004080' }}>Zip</label>
                    <input type="text" className="form-control" id="inputZip" style={{ color: '#004080' }} />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck" style={{ color: '#004080' }}>
                            Acepta términos y condiciones
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <Button variant="primary" type="submit">Registrar</Button>
                </div>
            </form>
        </aside>
    );
}

export default Aside;
