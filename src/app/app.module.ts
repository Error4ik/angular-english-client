import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CategoriesComponent} from './view/categories/categories.component';
import {HeaderComponent} from './view/header/header.component';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SidebarModule} from 'ng-sidebar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CategoryService} from './dao/impl/CategoryService';
import { CardsComponent } from './view/cards/cards.component';
import {CardService} from './dao/impl/CardService';
import {MatDialogModule} from '@angular/material/dialog';
import { EditCategoryDialogComponent } from './dialog/edit-category-dialog/edit-category-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HeaderComponent,
    CardsComponent,
    EditCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [CategoryService, CardService],
  entryComponents: [EditCategoryDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
