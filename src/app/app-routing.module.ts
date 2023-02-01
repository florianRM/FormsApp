import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module')
    .then(m => m.ReactiveModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template-routing.module')
    .then(m => m.TemplateRoutingModule)
  },
  {
    path: '',
    redirectTo: 'template',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
