import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Customer } from '../class/customer';
import { Policies } from '../class/policies';

import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'customer-detail',
  templateUrl: './view/customer-detail.component.html',
  styleUrls: [ './style/customer-detail.component.css' ]
})

export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  selectedPolicy: Policies;
  constructor(
    private router: Router,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.customerService.getCustomer(+params.get('id')))
      .subscribe(customer => this.customer = customer);
  }

  onSelect(policy: Policies): void {
    this.selectedPolicy = policy;
  }

  goBack(): void {
    this.location.back();
  }

  goDetail(): void {
    this.router.navigate(['/policy/', this.selectedPolicy.id]);
  }
}
