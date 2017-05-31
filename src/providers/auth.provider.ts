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
        this.http.post(WP_USER.REGISTER, registerData)
            .map((res: Response) => res.json())
            .map(res => {
                this.login({
                    username: registerData.username,
                    password: registerData.password
                })
            })
    }

    login(loginData) {
        this.http.post(WP_USER.GET_TOKEN, loginData)
            .map((res: Response) => res.json())
            .map(res => {
                this.storage.set('token', res)
            })
    }

    logout() {
        this.removeToken();
    }

    validateToken() {
        return this.http.post(WP_USER.VALIDATE, this.getToken())
            .map((res: Response) => res.json())
            .map(res => {
                if (res.data.status == 200) {
                    return true
                } else { 
                    return false 
                }
            })
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