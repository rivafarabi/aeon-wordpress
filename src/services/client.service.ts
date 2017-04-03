import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { ApiUrl } from '../constants/api-url.var';

@Injectable()
export class ClientService {
    private api: ApiUrl = new ApiUrl();
    constructor(private http: Http) {

    }

    getListPosts(page: number) {
        return this.http.get(`${this.api.GET_POSTS}?page=${page}`)
            .map(res => {
                let posts = res.json();
                posts.forEach(post => {
                    if (post.featured_media) {
                        this.getMedia(post.featured_media)
                            .subscribe(res => {
                                post.featuredmedia = res;
                            })
                    }
                });
                return posts;
            });
    }

    getListTags() {
        return this.http.get(this.api.GET_TAGS)
            .map((res: Response) => res.json())
    }

    getListPages() {
        return this.http.get(this.api.GET_PAGES)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            });
    }

    getListComments() {
        return this.http.get(this.api.GET_COMMENTS)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            });
    }

    getMedia(id: number) {
        return this.http.get(this.api.GET_MEDIA + id)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            });
    }

    getPostContent(id: number) {
        return this.http.get(`${this.api.GET_POSTS}/${id}`)
        .map((res: Response) => res.json())
        .map(res=>{
            return res;
        });
    }
}