import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent {

  p1: Persona = new Persona(0,"a","aa","000000000","Hombre");
  p2: Persona = new Persona(1,"b","bb","000000000","Mujer");
  listaPersonas: Array<Persona> = [this.p1,this.p2];
  
}
