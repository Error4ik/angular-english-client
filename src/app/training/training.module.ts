import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TrainingRoutingModule} from './training.routing.module';
import {TrainingLayoutComponent} from './shared/components/training-layout/training-layout.component';
import {TrainingPageComponent} from './training-page/training-page.component';
import {CategoryPageComponent} from './category-page/category-page.component';

@NgModule({
  declarations: [TrainingLayoutComponent, TrainingPageComponent, CategoryPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrainingRoutingModule
  ],
  exports: [RouterModule]
})
export class TrainingModule {

}
