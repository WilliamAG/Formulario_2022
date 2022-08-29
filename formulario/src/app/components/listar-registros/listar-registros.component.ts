import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.css']
})
export class ListarRegistrosComponent implements OnInit {
  listRegistros: Registro[] = [];

  constructor(private _registroService: RegistroService) { }

  ngOnInit(): void {
    this.obtenerRegistros();
  }


  obtenerRegistros(){
    this._registroService.getRegistros().subscribe(data => {
      console.log(data);
      this.listRegistros = data;
    }, error => {
      console.log(error);
    })
  }
}
