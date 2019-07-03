import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailService {

    private service_url = "http://172.16.16.186:3000/api/";
    constructor(private http: Http) { }

    getDetails(): Observable<any[]> {
        return this.http.get(this.service_url + 'EMR')
            .map((response: Response) => response.json());
    }

    getDoctorDetails(): Observable<any[]> {
        return this.http.get(this.service_url + 'Doctor')
            .map((response: Response) => response.json());
    }

}
