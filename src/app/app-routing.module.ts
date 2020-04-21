import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent},
  {path: 'training', loadChildren: './training/training.module#TrainingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
