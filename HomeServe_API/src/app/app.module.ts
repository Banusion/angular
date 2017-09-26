import { APP_INITIALIZER } from '@angular/core';
import { AppConfig }       from './app.config';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }            from './component/app.component';
import { CustomersComponent }      from './component/customers.component';
import { CustomerDetailComponent } from './component/customer-detail.component';
import { PoliciesComponent}        from './component/policies.component';
import { PolicyDetailComponent}    from './component/policy-detail.component';
import { ClaimsComponent }         from './component/claims.component';
import { DeploymentsComponent }    from './component/deployments.component';
import { CustomerSearchComponent } from './component/customer-search.component';

import { CustomerService }         from './service/customer.service';
import { PolicyService}            from './service/policy.service';
import { ClaimService }            from './service/claims.service';
import { DeploymentService }       from './service/deployment.service';
import { CustomerSearchService }   from './service/customer-search.service';

@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
  	AppComponent,
    CustomersComponent,
    CustomerDetailComponent,
    PoliciesComponent,
    PolicyDetailComponent,
    ClaimsComponent,
    DeploymentsComponent,
    CustomerSearchComponent,
  ],
  providers: [
    CustomerService,
    PolicyService,
    ClaimService,
    DeploymentService,
    CustomerSearchService,
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
