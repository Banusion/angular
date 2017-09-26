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
var http_1 = require("@angular/http");
var app_config_1 = require("../app.config");
require("rxjs/add/operator/map");
var CustomerSearchService = (function () {
    function CustomerSearchService(http, config) {
        this.http = http;
        this.config = config;
    }
    CustomerSearchService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CustomerSearchService.prototype.authentication = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.config.getConfig('api_token'));
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    CustomerSearchService.prototype.search = function (term) {
        return this.http
            .get(this.config.getConfig('api_url_customer') + ("?lastName=" + term), this.authentication())
            .map(function (response) { return response.json().data; });
    };
    return CustomerSearchService;
}());
CustomerSearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        app_config_1.AppConfig])
], CustomerSearchService);
exports.CustomerSearchService = CustomerSearchService;
//# sourceMappingURL=customer-search.service.js.map