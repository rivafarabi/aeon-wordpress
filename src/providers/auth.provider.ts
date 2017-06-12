import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';

import { WP_API, WP_USER } from '../constants/endpoint.constant';

@Injectable()
export class AuthProvider {
    constructor(private http: Http, private storage: Storage) {
    }

    register(registerData) {
        return this.http.post(WP_USER.REGISTER, registerData)
            .map((res: Response) => res.json())
            .map(res => {
                return this.login({ username: registerData.username, password: registerData.password }).subscribe(res => {
                    return res
                })
            })
    }

    login(loginData) {
        return this.http.post(WP_USER.GET_TOKEN, loginData)
            .map((res: Response) => res.json())
            .map(res => {
                this.saveToken(res);
                this.fetchProfile(res.user_display_name).subscribe(res => {
                    this.storage.set('profile', res[0]);
                })
                return res;
            })
            .catch(error => { return error; })
    }

    logout() {
        return this.storage.remove('token')
            .then(sucess => { return sucess; })
            .catch(error => { return error; })
    }

    validateToken() {
        return this.http.post(WP_USER.VALIDATE, this.getToken()).toPromise()
            .then(sucess => { return sucess; })
            .catch(error => { return error; })
    }

    saveToken(token: any) {
        this.storage.set('token', token);
    }

    getToken() {
        return this.storage.get('token').then(res => {
            return res;
        });
    }

    fetchProfile(user: string) {
        return this.http.get(WP_API.GET_USER + '?search=' + user)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            })
    }

}