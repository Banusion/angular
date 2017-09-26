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
var claims_service_1 = require("../service/claims.service");
var ClaimsComponent = (function () {
    function ClaimsComponent(router, claimService) {
        this.router = router;
        this.claimService = claimService;
    }
    ClaimsComponent.prototype.getClaims = function () {
        var _this = this;
        this.claimService.getClaims()
            .then(function (claims) { return _this.claims = claims; })
            .catch(function (err) { return console.log('error:', err); });
    };
    ClaimsComponent.prototype.ngOnInit = function () {
        this.getClaims();
    };
    ClaimsComponent.prototype.onSelect = function (claim) {
        this.selectedClaim = claim;
    };
    ClaimsComponent.prototype.onSelectDeployment = function (deployment) {
        this.selectedDeployment = deployment;
    };
    ClaimsComponent.prototype.goDetail = function () {
        this.router.navigate(['/deployments/', this.selectedDeployment.id]);
    };
    return ClaimsComponent;
}());
ClaimsComponent = __decorate([
    core_1.Component({
        selector: 'my-claims',
        templateUrl: './view/claims.component.html',
        styleUrls: ['./style/claims.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        claims_service_1.ClaimService])
], ClaimsComponent);
exports.ClaimsComponent = ClaimsComponent;
//# sourceMappingURL=claims.component.js.map