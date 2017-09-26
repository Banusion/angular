import { Policies }    from './policies';
import { Deployments } from './deployments';

export class Claims {
  id: number;
  deployments: Deployments;
  policy: Policies;
}
