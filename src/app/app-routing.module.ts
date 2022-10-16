import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenComponent } from './components/inventarios/almacen/almacen.component';
import { ComprasComponent } from './components/inventarios/compras/compras.component';
import { ProveedoresComponent } from './components/inventarios/proveedores/proveedores.component';
import { VentasComponent } from './components/inventarios/ventas/ventas.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexHomeComponent } from './pages/index-home/index-home.component';
import { InventariosComponent } from './pages/inventarios/inventarios.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'Login', pathMatch:'full'},
  {path:'cotizacion', component:CotizacionComponent},
  {path:'home', component:HomeComponent},
  {path:'Login', component:LoginComponent},
  {path:'Index', component:IndexHomeComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'cliente', component:ClientesComponent},
  {
    path:'Invetarios', component:InventariosComponent,
    children:[
      {path:'proveedores', component:ProveedoresComponent},
      {path:'Compras', component:ComprasComponent},
      {path:'ventas', component:VentasComponent},
      {path:'Almacen', component:AlmacenComponent}
    ]

  },

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
