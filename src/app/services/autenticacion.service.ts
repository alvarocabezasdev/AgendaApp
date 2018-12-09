import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute, public afAuth: AngularFireAuth)  { }



inicioSesionGmail () {
  return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}




isAuthenticated() {
  return this.afAuth.authState;
  }

  logout() {
    return firebase.auth().signOut();
    }

  

}