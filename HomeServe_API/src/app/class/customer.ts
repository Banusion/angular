import { Policies } from './policies';

export class Customer {
  id: number;
  title: string;
  lastName: string;
  firstName: string;
  email: string;
  policies: Policies;
}
