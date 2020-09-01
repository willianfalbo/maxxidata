import { Farmer } from './farmers.model';
import { Observable } from 'rxjs';

export declare abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Observable<Farmer[]>;
}

export interface SearchParams {
  term: string;
}
