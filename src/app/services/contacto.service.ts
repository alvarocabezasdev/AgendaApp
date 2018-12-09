import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { contactoInterface } from '../models/contactoInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  contactoCollection: AngularFirestoreCollection<contactoInterface>;
  contacto: Observable<contactoInterface[]>;
  contactoDoc: AngularFirestoreDocument<contactoInterface>;


  constructor(public afs: AngularFirestore) {
    
    this.contactoCollection = afs.collection<contactoInterface>('contactos', ref => ref.orderBy('apellidos', 'desc'));
    this.contacto = this.contactoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as contactoInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  getContactos() {
    return this.contacto;
  }
  addContacto(contacto: contactoInterface) {
    console.log('NEW CONTACT');
    this.contactoCollection.add(contacto);
  }
  deleteContacto(contacto: contactoInterface) {
    this.contactoDoc = this.afs.doc(`contactos/${contacto.id}`);
    this.contactoDoc.delete();
  }
  updateContacto(contacto: contactoInterface) {
    this.contactoDoc = this.afs.doc(`contactos/${contacto.id}`);
    this.contactoDoc.update(contacto);
}
}
