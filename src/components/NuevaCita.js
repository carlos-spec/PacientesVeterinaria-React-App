import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';


const stateInicial=  {
    cita : {
      mascota:'',
      propietario:'',
      Fecha:'',
      hora:'',
      sintomas:''
    },
    error:false
}

class NuevaCita extends Component {
  state = { ...stateInicial
  }
  // cuando el usuario escribe en los input
  handleChange = e=>{
        
        //colocar lo que el usuario escribe en el state de arriba
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
  }
  //cuando el usuario manda los formulario(le da click al boton)
  handleSubmit = (e) =>{
      e.preventDefault();

      // extraer los valores del state
      const{mascota, propietario,fecha,hora,sintomas}= this.state.cita;

      //validar que todos los campos esten llenos
      if(mascota==='' || propietario===''|| fecha===''|| hora==='' ||sintomas===''){
          this.setState({
              error:true
          });
          //deterner la ejecucion con un return
          return
      }
      // crear un objeto con los datos
      const NuevaCita= {...this.state.cita};
      NuevaCita.id= uuid();
      //agregar la cita al state de app(al padre mediante una funcion creada en el state de app)
      this.props.crearNuevaCita(NuevaCita)
      //colocar en el state el stateInicial
      this.setState({
          ...stateInicial
      })
  }


  render() {
       // EXTRAER EL VALOR DEL STATE
    const {error}= this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llenar el formulario para una nueva cita
          </h2>
          { error  ? <div className='alert alert-danger mt-2 mb-5 text-center'>todos los campos son obligatorios</div> : null 
          }
          <form 
            onSubmit={this.handleSubmit}
          >
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                    id='mascota'
                  type="text"
                  className="form-control"
                  placeholder="nombre mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño de mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño de mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input 
                type="date"
                 className="form-control"
                  name="Fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.Fecha}
                   />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input 
                type="time"
                 className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                  />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="describa los sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              className="py-3  mt-2 btn btn-success btn-block"
              value="Agregar cita"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

NuevaCita.propTypes={
  crearNuevaCita : PropTypes.func.isRequired
}
export default NuevaCita;
