import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './component/app.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import { HeroesComponent }     from './component/heroes.component';
import { DashboardComponent }  from './component/dashboard.component';

import { HeroService }         from './service/hero.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
