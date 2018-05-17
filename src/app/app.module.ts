import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatNativeDateModule , MatIconModule} from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BlogpostAddComponent } from './blogpost-add/blogpost-add.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostItemComponent } from './blogpost-item/blogpost-item.component';
import { MatSortModule, MatTableModule, MatSort } from '@angular/material'
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Observable } from 'rxjs/Rx'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    BlogpostAddComponent,
    BlogpostListComponent,
    BlogpostItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [MatSort],
  bootstrap: [AppComponent]
})
export class AppModule { }
