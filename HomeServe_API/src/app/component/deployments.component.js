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
var deployments_1 = require("../class/deployments");
var deployment_service_1 = require("../service/deployment.service");
var DeploymentsComponent = (function () {
    function DeploymentsComponent(router, deploymentService, route, location) {
        this.router = router;
        this.deploymentService = deploymentService;
        this.route = route;
        this.location = location;
    }
    DeploymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.deploymentService.getDeployment(params.get('id')); })
            .subscribe(function (deployment) { return _this.deployment = deployment; });
    };
    DeploymentsComponent.prototype.onSelect = function (deployment) {
        this.selectedDeployment = deployment;
    };
    DeploymentsComponent.prototype.goBack = function () {
        this.location.back();
    };
    DeploymentsComponent.prototype.goDetail = function () {
        this.router.navigate(['/deployments/', this.selectedDeployment.id]);
    };
    return DeploymentsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", deployments_1.Deployments)
], DeploymentsComponent.prototype, "deployment", void 0);
DeploymentsComponent = __decorate([
    core_1.Component({
        selector: 'deployments',
        templateUrl: './view/deployments.component.html',
        styleUrls: ['./style/deployments.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        deployment_service_1.DeploymentService,
        router_1.ActivatedRoute,
        common_1.Location])
], DeploymentsComponent);
exports.DeploymentsComponent = DeploymentsComponent;
//# sourceMappingURL=deployments.component.js.map