import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from 'rxjs';

const departments = ['HR', 'Sales', 'Finance', 'Engineering', 'Other', 'Marketing', 'Legal', 'IT'];

@Injectable({providedIn: 'root'})
export class DataResolverService implements Resolve<any> {
    
    resolve(): Observable<any> {
        //todo: call service
        return of(departments);
    }
}