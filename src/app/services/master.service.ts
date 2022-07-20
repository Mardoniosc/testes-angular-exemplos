import { Injectable } from '@angular/core';
import { ValueService } from './dependencies/value.service';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private valueService: ValueService) {}

  getValueMaster(): string {
    return this.valueService.getValue();
  }
}
