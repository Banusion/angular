"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var customer_1 = require("../class/customer");
var customer_service_1 = require("../service/customer.service");
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(router, customerService, route, location) {
        this.router = router;
        this.customerService = customerService;
        this.route = route;
        this.location = location;
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.customerService.getCustomer(+params.get('id')); })
            .subscribe(function (customer) { return _this.customer = customer; });
    };
    CustomerDetailComponent.prototype.onSelect = function (policy) {
        this.selectedPolicy = policy;
    };
    CustomerDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CustomerDetailComponent.prototype.goDetail = function () {
        this.router.navigate(['/policy/', this.selectedPolicy.id]);
    };
    return CustomerDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", customer_1.Customer)
], CustomerDetailComponent.prototype, "customer", void 0);
CustomerDetailComponent = __decorate([
    core_1.Component({
        selector: 'customer-detail',
        templateUrl: './view/customer-detail.component.html',
        styleUrls: ['./style/customer-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        customer_service_1.CustomerService,
        router_1.ActivatedRoute,
        common_1.Location])
], CustomerDetailComponent);
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customer-detail.component.js.map