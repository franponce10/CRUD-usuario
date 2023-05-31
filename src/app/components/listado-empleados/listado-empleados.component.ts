import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent {

  listaPersonas: Array<Persona> = [];
  
}
