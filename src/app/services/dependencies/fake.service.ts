import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  constructor() {}

  getValue(): string {
    return 'fake service';
  }
}
