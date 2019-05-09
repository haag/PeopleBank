import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreatePersonComponent } from './create-person/create-person.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { PersonService } from './create-person/person.service';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { EditPersonService } from './edit-person/edit-person.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CreatePersonComponent,
    EditPersonComponent,
    TableComponent,
    CardsComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    BrowserAnimationsModule,

  ],
  entryComponents: [
    CreatePersonComponent,
    EditPersonComponent,
    TableComponent
  ],
  providers: [ PersonService, SidenavService, EditPersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
