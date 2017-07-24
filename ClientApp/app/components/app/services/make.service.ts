import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
@Injectable()
export class MakeService {

  constructor(private http: Http) { }

  getFamililies() {
      return this.http.get('')
          .map(res => res.json());

    }
}
