"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customers_component_1 = require("./component/customers.component");
var customer_detail_component_1 = require("./component/customer-detail.component");
var policy_detail_component_1 = require("./component/policy-detail.component");
var policies_component_1 = require("./component/policies.component");
var claims_component_1 = require("./component/claims.component");
var deployments_component_1 = require("./component/deployments.component");
var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'customers', component: customers_component_1.CustomersComponent },
    { path: 'customer/:id', component: customer_detail_component_1.CustomerDetailComponent },
    { path: 'policies', component: policies_component_1.PoliciesComponent },
    { path: 'policy/:id', component: policy_detail_component_1.PolicyDetailComponent },
    { path: 'claims', component: claims_component_1.ClaimsComponent },
    { path: 'deployments/:id', component: deployments_component_1.DeploymentsComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map