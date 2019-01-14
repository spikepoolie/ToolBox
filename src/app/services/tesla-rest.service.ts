import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';




  const endpoint = 'https://www.goemobile.com/tesla/php/';
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TeslaRestService {

  constructor(
    private http: HttpClient
  ) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getQuestion(resource, questionid): Observable<any> {
    return this.http.get(endpoint + resource  + questionid).pipe(
      map(this.extractData));
  }

  getQuestionsCount(resource): Observable<any> {
    return this.http.get(endpoint + resource).pipe(
      map(this.extractData));
  }

  sendAnswer(resource: string, answer: string): Observable<any> {
     return this.http.get(endpoint + resource + answer).pipe(
       map(this.extractData));
  }

  getAnswers(resource: string): Observable<any> {
    return this.http.get(endpoint + resource).pipe(
      map(this.extractData));
  }

}
