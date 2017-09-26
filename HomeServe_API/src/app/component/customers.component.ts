import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../class/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'my-customers',
  templateUrl: './view/customers.component.html',
  styleUrls: [ './style/customers.component.css' ]
})

export class CustomersComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(
    private router: Router,
    private customerService: CustomerService) { }

  getCustomers(): void {
    this.customerService.getCustomers()
      .then(customers => this.customers = customers)
      .catch(err => console.log('error:',err));
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  goDetail(): void {
    this.router.navigate(['/customer/', this.selectedCustomer.id]);
  }
}
