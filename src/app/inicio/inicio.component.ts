import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

 private router: Router;

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
  }

  login(){
    this.autenticacionService.inicioSesionGmail();
    this.router.navigate(['/contactos'])
  }

}
