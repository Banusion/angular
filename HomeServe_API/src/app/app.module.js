"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_config_1 = require("./app.config");
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./component/app.component");
var customers_component_1 = require("./component/customers.component");
var customer_detail_component_1 = require("./component/customer-detail.component");
var policies_component_1 = require("./component/policies.component");
var policy_detail_component_1 = require("./component/policy-detail.component");
var claims_component_1 = require("./component/claims.component");
var deployments_component_1 = require("./component/deployments.component");
var customer_search_component_1 = require("./component/customer-search.component");
var customer_service_1 = require("./service/customer.service");
var policy_service_1 = require("./service/policy.service");
var claims_service_1 = require("./service/claims.service");
var deployment_service_1 = require("./service/deployment.service");
var customer_search_service_1 = require("./service/customer-search.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_2.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            customers_component_1.CustomersComponent,
            customer_detail_component_1.CustomerDetailComponent,
            policies_component_1.PoliciesComponent,
            policy_detail_component_1.PolicyDetailComponent,
            claims_component_1.ClaimsComponent,
            deployments_component_1.DeploymentsComponent,
            customer_search_component_1.CustomerSearchComponent,
        ],
        providers: [
            customer_service_1.CustomerService,
            policy_service_1.PolicyService,
            claims_service_1.ClaimService,
            deployment_service_1.DeploymentService,
            customer_search_service_1.CustomerSearchService,
            app_config_1.AppConfig,
            { provide: core_1.APP_INITIALIZER, useFactory: function (config) { return function () { return config.load(); }; }, deps: [app_config_1.AppConfig], multi: true }
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map