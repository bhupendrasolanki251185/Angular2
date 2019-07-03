import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {
    users = [{ name: 'Bob', role: 'Patient' },
    { name: 'Scott', role: 'Patient' }, { name: 'Tiger', role: 'Doctor' }, { name: 'Alice', role: 'Doctor' }]

    constructor(private http: Http) { }

    login(user: any): boolean {
        // console.log(`user ` + this.users.includes({ name: 'Tiger', role: 'Doctor' }));
        let flag = false;
        this.users.forEach(userItem => {
            if (userItem.name === user['name'] && userItem.role === user['role']) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                flag = true;
            }
        });
        return flag;
    }

    logout() {
        localStorage.removeItem('currentUser');
    }


}
