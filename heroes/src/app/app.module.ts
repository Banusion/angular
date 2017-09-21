import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './component/app.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import { HeroesComponent }     from './component/heroes.component';
import { DashboardComponent }  from './component/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

import { HeroService }         from './service/hero.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
