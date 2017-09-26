import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Policies } from '../class/policies';

import { PolicyService } from '../service/policy.service';

@Component({
  selector: 'policy-detail',
  templateUrl: './view/policy-detail.component.html',
  styleUrls: [ './style/policy-detail.component.css' ]
})

export class PolicyDetailComponent implements OnInit {
  @Input() policy: Policies;
  constructor(
    private policyService: PolicyService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.policyService.getPolicy(+params.get('id')))
      .subscribe(policy => this.policy = policy);
  }

  goBack(): void {
    this.location.back();
  }

}
