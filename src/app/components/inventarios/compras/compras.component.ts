import { proveedoresModel } from './../../../models/invenentarios/proveedores/proveedores.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor() { }
  ltscompras!:Array<proveedoresModel>
  compras!: proveedoresModel
  ngOnInit(): void {
  }

  onSumit(){
    console.log(this.ltscompras)
  }

}
