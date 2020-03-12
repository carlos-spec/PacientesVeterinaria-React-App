import React, {Component} from 'react';
import './bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCita from './components/ListaCita';

class App extends Component{
  state={
    citas:[]
    
  }// cuando la aplicacion carga
  componentDidMount(){
    const citasLS= localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }

  }// cuando eliminamos o agregamos unanueva cita
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearNuevaCita = datos =>{
    //copiar el state actual
    
    const citas=[...this.state.citas, datos];
    //agregar el nuevo state
    this.setState({
      citas
    })
  }

  // elimina las citas del state
  eliminarCita= id =>{
    //TOMAR UNA COPIA DEL STATE
    const citasActuales=[...this.state.citas];

    // utilizar filter para sacar el id del arreglo
    const citas= citasActuales.filter(cita => cita.id !== id)

    //actualizar el state
    this.setState({
      citas
    })
  }
  render(){
        return(
        <div className='container'>
          <Header
          titulo='Administrador Pacientes Veterinaria'
          />
          <div className='row'>
            <div className='col-md-10 mx-auto'>
              <NuevaCita
              crearNuevaCita={this.crearNuevaCita}
              />
            </div>
            <div className='mt-5 col-md-10 mx-auto'>
              <ListaCita
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
