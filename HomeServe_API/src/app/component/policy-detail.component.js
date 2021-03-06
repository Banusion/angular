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
var policies_1 = require("../class/policies");
var policy_service_1 = require("../service/policy.service");
var PolicyDetailComponent = (function () {
    function PolicyDetailComponent(policyService, route, location) {
        this.policyService = policyService;
        this.route = route;
        this.location = location;
    }
    PolicyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.policyService.getPolicy(+params.get('id')); })
            .subscribe(function (policy) { return _this.policy = policy; });
    };
    PolicyDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PolicyDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", policies_1.Policies)
], PolicyDetailComponent.prototype, "policy", void 0);
PolicyDetailComponent = __decorate([
    core_1.Component({
        selector: 'policy-detail',
        templateUrl: './view/policy-detail.component.html',
        styleUrls: ['./style/policy-detail.component.css']
    }),
    __metadata("design:paramtypes", [policy_service_1.PolicyService,
        router_1.ActivatedRoute,
        common_1.Location])
], PolicyDetailComponent);
exports.PolicyDetailComponent = PolicyDetailComponent;
//# sourceMappingURL=policy-detail.component.js.map