import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CotizacionComponent } from './pages/cotizacion/cotizacion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexHomeComponent } from './pages/index-home/index-home.component';
import { InventariosComponent } from './pages/inventarios/inventarios.component';
import { NavbarInventariosComponent } from './components/shared/navbar-inventarios/navbar-inventarios.component';
import { ProveedoresComponent } from './components/inventarios/proveedores/proveedores.component';
import { ComprasComponent } from './components/inventarios/compras/compras.component';
import { VentasComponent } from './components/inventarios/ventas/ventas.component';
import { AlmacenComponent } from './components/inventarios/almacen/almacen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CotizacionComponent,
    HomeComponent,
    LoginComponent,
    IndexHomeComponent,
    InventariosComponent,
    NavbarInventariosComponent,
    ProveedoresComponent,
    ComprasComponent,
    VentasComponent,
    AlmacenComponent,
    EmpleadosComponent,
    ClientesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
