import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policies } from '../class/policies';
import { PolicyService } from '../service/policy.service';

@Component({
  selector: 'my-policies',
  templateUrl: './view/policies.component.html',
  styleUrls: [ './style/policies.component.css' ]
})

export class PoliciesComponent implements OnInit {
  policies: Policies[];
  selectedPolicy: Policies;

  constructor(
    private router: Router,
    private policyService: PolicyService) { }

  getPolicies(): void {
    this.policyService.getPolicies()
      .then(policies => this.policies = policies)
      .catch(err => console.log('error:',err));
  }

  ngOnInit(): void {
    this.getPolicies();
  }

  onSelect(policy: Policies): void {
    this.selectedPolicy = policy;
  }

  goDetail(): void {
    this.router.navigate(['/policy/', this.selectedPolicy.id]);
  }

}
