import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Advantage {
  icon: string;
  title: string;
  text: string;
  titleSm?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdvantageDataService {

  constructor(private http: HttpClient) {
  }

  advantageData(): Observable<Advantage[]> {
    return this.http.get<Advantage[]>('https://run.mocky.io/v3/b56d78c6-5977-408f-be51-31036fdb9db7');
  }
}
