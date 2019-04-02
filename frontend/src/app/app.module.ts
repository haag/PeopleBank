import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TESTComponent } from './test/test.component';
import { HeroService } from './test/hero.service';
import { ContactComponent } from './contact/contact.component';
import { CreatePersonComponent } from './create-person/create-person.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { PersonService } from './create-person/person.service';
import { ViewPeopleComponent } from './view-people/view-people.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    TESTComponent,
    ContactComponent,
    CreatePersonComponent,
    ViewPeopleComponent,
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
    CreatePersonComponent
  ],
  providers: [HeroService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
