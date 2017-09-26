import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { CustomersComponent }      from './component/customers.component';
import { CustomerDetailComponent } from './component/customer-detail.component';
import { PolicyDetailComponent }   from './component/policy-detail.component';
import { PoliciesComponent}        from './component/policies.component';
import { ClaimsComponent }         from './component/claims.component';
import { DeploymentsComponent }    from './component/deployments.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'customers',  component: CustomersComponent },
  { path: 'customer/:id' , component: CustomerDetailComponent },
  { path: 'policies',  component: PoliciesComponent },
  { path: 'policy/:id' , component: PolicyDetailComponent },
  { path: 'claims' , component: ClaimsComponent },
  { path: 'deployments/:id', component: DeploymentsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
