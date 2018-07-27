import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
@Injectable()
export class OfferService {

  constructor(private http:Http) { 
      
  }

  getOffers(): Observable<any>{
      return this.http.get("https://jsonplaceholder.typicode.com/users")
      .map(this.extractData)
  }
  /* 
        Extracting Data from response otherwise throw error
     */
    private extractData(res: Response) {

        if (res.status < 200 || res.status >= 300) {
            throw new Error('This request has failed ' + res.status);
        }
        // If everything went fine, return the response
        else {
            return res.json();

        }

    }
}