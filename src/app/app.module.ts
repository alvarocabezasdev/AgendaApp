import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { InicioComponent } from './inicio/inicio.component';
import { AutenticacionService } from './services/autenticacion.service';
import { AddContactoComponent } from './add-contacto/add-contacto.component';
import { ContactosComponent } from './contactos/contactos.component';

import { GuardService } from './services/guard.service';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nuevo', component: AddContactoComponent , canActivate: [GuardService] },
  { path: 'contactos', component: ContactosComponent, canActivate: [GuardService]},
  { path: '**', component: InicioComponent}
  ];

  @NgModule({
    declarations: [
      AppComponent,
      InicioComponent,
      HeaderComponent,
      AddContactoComponent,
      ContactosComponent,
    ],
  
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule, // imports firebase/firestore, only needed for database features
      AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ],

    providers: [
      AutenticacionService
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }