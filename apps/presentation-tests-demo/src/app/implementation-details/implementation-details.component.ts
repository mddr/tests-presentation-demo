import { Component } from '@angular/core';
import { Subject, switchMap } from 'rxjs';

import { ImplementationDetailsService } from './implementation-details.service';

const pageSize = 25;

@Component({
  selector: 'presentation-tests-demo-implementation-details',
  templateUrl: './implementation-details.component.html',
  styleUrls: ['./implementation-details.component.css'],
})
export class ImplementationDetailsComponent {
  fetch$$ = new Subject<void>();

  data$ = this.fetch$$.pipe(switchMap(() => this.service.fetchFood(pageSize)));

  constructor(private service: ImplementationDetailsService) {}

  fetchData() {
    this.fetch$$.next();
  }
}
