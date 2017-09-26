import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Deployments } from '../class/deployments';

import { DeploymentService } from '../service/deployment.service';

@Component({
  selector: 'deployments',
  templateUrl: './view/deployments.component.html',
  styleUrls: [ './style/deployments.component.css' ]
})

export class DeploymentsComponent implements OnInit {
  @Input() deployment: Deployments;
  selectedDeployment: Deployments;
  constructor(
    private router: Router,
    private deploymentService: DeploymentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.deploymentService.getDeployment(params.get('id')))
      .subscribe(deployment => this.deployment = deployment);
  }

  onSelect(deployment: Deployments): void {
    this.selectedDeployment = deployment;
  }

  goBack(): void {
    this.location.back();
  }

  goDetail(): void {
    this.router.navigate(['/deployments/', this.selectedDeployment.id]);
  }
}
