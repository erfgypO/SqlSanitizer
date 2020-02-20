import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormatRequest } from '../models/format-request';
import { Observable } from 'rxjs';
import { FormatResponse } from '../models/format-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormatApiService {

  constructor(private http: HttpClient) { }

  format(request: FormatRequest): Observable<FormatResponse> {
    return this.http.post<FormatResponse>(environment.apiUrl, request);
  }
}
