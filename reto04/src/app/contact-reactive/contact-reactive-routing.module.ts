import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { WithoutSaveGuard } from '../guards/without-save.guard';

const routes: Routes = [

  { 
    path: "", 
    component: ContactReactiveComponent, 
    canDeactivate: [WithoutSaveGuard],
    resolve: { departments: DataResolverService }
  
  },
  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
