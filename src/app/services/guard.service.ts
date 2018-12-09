import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanActivate {
  
  constructor(private autenticacionService: AutenticacionService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.autenticacionService.isAuthenticated().pipe(map(user=>{
        if(user)
         return true;
        else
         return false;
    }));
  
  }
}