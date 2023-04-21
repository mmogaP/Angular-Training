import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.hasUser()) {
      return true;
    }

    //redireccionar a login
    alert('No tienes permisos para acceder a esta página');
    return false;
  }

  hasUser(): boolean {
    return false;
  }
  
}
