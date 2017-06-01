import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';

import { WP_USER } from '../constants/endpoint.constant';

@Injectable()
export class AuthProvider {
    constructor(private http: Http, private storage: Storage) {
    }

    register(registerData) {
        return this.http.post(WP_USER.REGISTER, registerData)
            .map((res: Response) => res.json())
            .map(res => {
                console.log(res);
                return this.login({username: registerData.username, password: registerData.password})
                .then(res => {
                    return res
                })
            })
    }

    login(loginData) {
        return this.http.post(WP_USER.GET_TOKEN, loginData).toPromise()
        .then(success => { 
            this.saveToken(success);
            return success; 
        })
        .catch(error => { return error; })
    }

    logout() {
        this.removeToken();
    }

    validateToken() {
        return this.http.post(WP_USER.VALIDATE, this.getToken()).toPromise()
        .then(sucess => { return sucess; })
        .catch(error => { return error; })
    }

    saveToken(token){
        this.storage.set('token', token);
    }

    getToken() {
        return this.storage.get('token').then(res => {
            return res;
        });
    }

    removeToken() {
        this.storage.remove('token');
    }

}