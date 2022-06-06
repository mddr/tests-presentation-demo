import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Food } from './implementation-details.model';

@Injectable({ providedIn: 'root' })
export class ImplementationDetailsService {
  constructor(private http: HttpClient) {}

  fetchFood(amount: number): Observable<Food[]> {
    return this.http.get<Food[]>(
      `https://random-data-api.com/api/food/random_food`,
      { params: { size: amount } }
    );
  }
}
