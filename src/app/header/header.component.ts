import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  isAuth() {
      return this.autService.isAuthenticated();
    }


    onLogout() {
      console.log("Vamos a desloguar");
      this.autService.logout().then(()=>{
        this.router.navigate(['/inicio']);
      }).catch(
        err=>{
          console.log(err)
        }
      );

      }

}
