import { Component, OnInit } from '@angular/core';
import { contactoInterface } from '../models/contactoInterface';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contacto: contactoInterface[];
  editState: boolean = false;
  contactoToEdit: contactoInterface;
  constructor(private contactoService: ContactoService) { }

  ngOnInit() {
    this.contactoService.getContactos().subscribe(contacto => {
      this.contacto = contacto;
    });
  }
  editContacto(event, contacto: contactoInterface) {
    this.editState = true;
    this.contactoToEdit = contacto;
  }
  onUdpdateContacto(contacto: contactoInterface) {
    this.contactoService.updateContacto(contacto);
    this.clearState();
  }
  deleteContacto(event, contacto: contactoInterface) {
    this.contactoService.deleteContacto(contacto);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.contactoToEdit = null;
}

}
