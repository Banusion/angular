import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claims } from '../class/claims';
import { ClaimService } from '../service/claims.service';
import {Deployments} from "../class/deployments";

@Component({
  selector: 'my-claims',
  templateUrl: './view/claims.component.html',
  styleUrls: [ './style/claims.component.css' ]
})

export class ClaimsComponent implements OnInit {
  claims: Claims[];
  selectedClaim: Claims;
  deployments: Deployments[];
  selectedDeployment: Deployments;


  constructor(
    private router: Router,
    private claimService: ClaimService) { }

  getClaims(): void {
    this.claimService.getClaims()
      .then(claims => this.claims = claims)
      .catch(err => console.log('error:',err));
  }

  ngOnInit(): void {
    this.getClaims();
  }

  onSelect(claim: Claims): void {
    this.selectedClaim = claim;
  }

  onSelectDeployment(deployment: Deployments): void {
    this.selectedDeployment = deployment;
  }

  goDetail(): void {
    this.router.navigate(['/deployments/', this.selectedDeployment.id]);
  }
}
