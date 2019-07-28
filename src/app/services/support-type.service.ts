import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PhoneInterface, SupportTypeInterface } from '../api.models';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  "Content-Type": "application/json"
});

@Injectable()
export class SupportTypeService {

    constructor(private http: HttpClient) {}

    load() {
      return this.http.get<Array<SupportTypeInterface>>('./api/duty-types');
    }

    delete(id: number) {
      return this.http.delete('./api/duty-types/' + id, {});
    }

    update(support: SupportTypeInterface) {
      return this.http.put('./api/duty-types', support, { headers: headers })
    }

    add(support: SupportTypeInterface) {
      return this.http.post('./api/duty-types', support, { headers: headers })
    }
}
