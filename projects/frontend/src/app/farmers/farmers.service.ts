import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  SearchParams,
  FarmerSearchAbstractProvider,
} from './farmers.interface';
import { Farmer } from './farmers.model';
import { API_URI } from '../app.config';

@Injectable()
export class FarmersService implements FarmerSearchAbstractProvider {
  constructor(private http: HttpClient) {}

  searchFarmers(params: SearchParams): Observable<Farmer[]> {
    let queryParams: HttpParams;
    if (params) {
      queryParams = new HttpParams().append('term', params.term);
    }
    return this.http.get<Farmer[]>(`${API_URI}/farmers`, {
      params: queryParams,
    });
  }
}
