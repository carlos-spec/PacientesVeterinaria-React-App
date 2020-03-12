import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita,eliminarCita }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{cita.mascota}</h3>
<p className='card-text'><strong>Nombre dueño:</strong>{cita.propietario}</p>
<p className='card-text'><strong>Fecha:</strong>{cita.fecha}</p>
<p className='card-text'><strong>Hora:</strong>{cita.hora}</p>
<p className='card-text'><strong>Sintomas:</strong></p>
<p className='card.text'>{cita.sintomas}</p>

<button className='btn btn-danger' 
onClick={()=>eliminarCita(cita.id)}
>Borrar &times;</button>
    </div>
  </div>
);

Cita.protoType = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default Cita;

