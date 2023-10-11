import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetAmountData() {
    return this.http.get<any>(environment.apiUrl);
  }

  GetAmountDataWithId(id: number) {
    return this.http.get<any>(environment.apiUrl + '/' + id);
  }

  PostAmountData(data: any) {
    return this.http.post<Response>(environment.apiUrl, data, { observe: 'response' });
  }

  PostAmountDataWithId(id: number, data: any) {
    return this.http.post<Response>(environment.apiUrl + `/${id}`, data, { observe: 'response' });
  }

  DeleteAmountData(id: number) {
    return this.http.delete<Response>(environment.apiUrl + `/${id}`, { observe: 'response' });
  }


  PutAmountData(id: number, data: any): Observable<any> {
    return this.http.put<Response>(environment.apiUrl + `/${id}`, data, { observe: 'response' });
  }



}
