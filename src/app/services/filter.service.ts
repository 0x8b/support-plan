import { Injectable } from '@angular/core';
import { PersistenceService } from './persistence.service';

const IDS_KEY = 'ids_bf516925bb37a8544c8ee19a24e15c05';

@Injectable()
export class FilterService {

  constructor(private storage: PersistenceService) {}

  save(labels) {
    this.storage.set(IDS_KEY, labels.filter(a => a.selected).map(a => a.id));
  }

  read() {
    return this.storage.get(IDS_KEY);
  }
}
