import { Component, OnInit } from '@angular/core';
import { proveedoresModel } from 'src/app/models/invenentarios/proveedores/proveedores.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor() { }
  ltscompras!:Array<proveedoresModel>
  compras!: proveedoresModel
  ngOnInit(): void {
  }
  onSumit(){
    console.log(this.ltscompras)
  }
}
