import { IRoute } from '../../routes';

export interface NestedRouteBaseProps {
  routes?: IRoute[];
}

export interface HttpResponse<T> {
  data: T;
}
