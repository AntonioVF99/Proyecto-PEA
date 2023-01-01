import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//paginacion
import { LoginComponent } from './paginacion/login/login.component';
import { RegistrarComponent } from './paginacion/registrar/registrar.component';
import { BienvenidaComponent } from './paginacion/bienvenida/bienvenida.component';
import { PaginaPrincipalComponent } from './paginacion/pagina-principal/pagina-principal.component';
import { ConfiguracionComponent } from './paginacion/configuracion/configuracion.component';
import { TuscursoscreadosComponent } from './paginacion/tuscursoscreados/tuscursoscreados.component';
import { CrearcursoComponent } from './paginacion/crearcurso/crearcurso.component';
import { CrearmaterialComponent } from './paginacion/crearmaterial/crearmaterial.component';
import { ModificarcursoComponent } from './paginacion/modificarcurso/modificarcurso.component';
import { ModificarmaterialComponent } from './paginacion/modificarmaterial/modificarmaterial.component';
import { SeleccionmaterialComponent } from './paginacion/seleccionmaterial/seleccionmaterial.component';
import { TumaterialComponent } from './paginacion/tumaterial/tumaterial.component';
import { PaginatuscursosComponent } from './paginacion/paginatuscursos/paginatuscursos.component';
import { PaginacursoComponent } from './paginacion/paginacurso/paginacurso.component';

//componentes
import { BarraNavegacionComponent } from './navbar/barra-navegacion/barra-navegacion.component';
import { TuscursosComponent } from './paginacion/paginatuscursos/tuscursos/tuscursos.component';
import { PrincipalcursosComponent } from './paginacion/pagina-principal/principalcursos/principalcursos.component';
import { SeccioncursoComponent } from './paginacion/paginacurso/seccioncurso/seccioncurso.component';
import { MenuUsuarioComponent } from './navbar/menu-usuario/menu-usuario.component';



const appRoutes:Routes=[

  {path:'', component:BienvenidaComponent},
  {path:'configuracion',component:ConfiguracionComponent},
  {path:'crearcurso',component:CrearcursoComponent},
  {path:'crearmaterial',component:CrearmaterialComponent},
  {path:'login', component:LoginComponent},
  {path:'modificarcurso',component:ModificarcursoComponent},
  {path:'modificarmaterial',component:ModificarmaterialComponent},
  {path:'paginaprincipal', component:PaginaPrincipalComponent},
  {path:'paginacurso',component:PaginacursoComponent},
  {path:'paginatuscursos',component:PaginatuscursosComponent},
  {path:'registrar', component:RegistrarComponent},
  {path:'seleccionmaterial', component:SeleccionmaterialComponent},
  {path:'tumaterial', component:TumaterialComponent},
  {path:'tuscursoscreados', component:TuscursosComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    BienvenidaComponent,
    PaginaPrincipalComponent,
    PaginacursoComponent,
    PaginatuscursosComponent,
    BarraNavegacionComponent,
    MenuUsuarioComponent,
    SeccioncursoComponent,
    PrincipalcursosComponent,
    TuscursosComponent,
    ConfiguracionComponent,
    TuscursoscreadosComponent,
    CrearcursoComponent,
    CrearmaterialComponent,
    ModificarcursoComponent,
    ModificarmaterialComponent,
    SeleccionmaterialComponent,
    TumaterialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
