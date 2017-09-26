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
var policy_service_1 = require("../service/policy.service");
var PoliciesComponent = (function () {
    function PoliciesComponent(router, policyService) {
        this.router = router;
        this.policyService = policyService;
    }
    PoliciesComponent.prototype.getPolicies = function () {
        var _this = this;
        this.policyService.getPolicies()
            .then(function (policies) { return _this.policies = policies; })
            .catch(function (err) { return console.log('error:', err); });
    };
    PoliciesComponent.prototype.ngOnInit = function () {
        this.getPolicies();
    };
    PoliciesComponent.prototype.onSelect = function (policy) {
        this.selectedPolicy = policy;
    };
    PoliciesComponent.prototype.goDetail = function () {
        this.router.navigate(['/policy/', this.selectedPolicy.id]);
    };
    return PoliciesComponent;
}());
PoliciesComponent = __decorate([
    core_1.Component({
        selector: 'my-policies',
        templateUrl: './view/policies.component.html',
        styleUrls: ['./style/policies.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        policy_service_1.PolicyService])
], PoliciesComponent);
exports.PoliciesComponent = PoliciesComponent;
//# sourceMappingURL=policies.component.js.map