import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrainingLayoutComponent} from './shared/components/training-layout/training-layout.component';
import {TrainingPageComponent} from './training-page/training-page.component';
import {CategoryPageComponent} from './category-page/category-page.component';

const routes: Routes = [
  {
    path: '', component: TrainingLayoutComponent, children: [
      {path: '', component: TrainingPageComponent, pathMatch: 'full'},
      {path: 'category', component: CategoryPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {

}
