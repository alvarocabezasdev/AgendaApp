import { Component, OnInit } from '@angular/core';
import { contactoInterface } from '../models/contactoInterface';
import { ContactoService } from '../services/contacto.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacto',
  templateUrl: './add-contacto.component.html',
  styleUrls: ['./add-contacto.component.css']
})
export class AddContactoComponent implements OnInit {

  private router: Router;

  contacto: contactoInterface = {

    nombre: '',
    apellidos: '',
    telefono: '',
    correo: '',
    observaciones: ''



  };

  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
  }

  onGuardarContacto(myForm: NgForm) {
    if (myForm.valid === true) {
      this.contactoService.addContacto(this.contacto);
      myForm.resetForm();
      this.router.navigate(['/contactos'])
      
    } else {
      console.log('Algo va mal');
    }

  }

}
