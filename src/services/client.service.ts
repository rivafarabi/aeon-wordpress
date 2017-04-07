import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Post } from '../model/post.model';
import { ApiUrl } from '../constants/api-url.var';

@Injectable()
export class ClientService {
    private api: ApiUrl = new ApiUrl();
    constructor(private http: Http) {

    }

    getListPosts(page: number, options?: any) {
        let opts: string;
        opts = options == null ? '' : `&${options.type}=${options.id}`;
        return this.http.get(`${this.api.GET_POSTS}?page=${page}${opts}`)
            .map(res => {
                let postJson = res.json();
                postJson.forEach(postItem => {
                    if (postItem.featured_media) {
                        this.getMedia(postItem.featured_media)
                            .subscribe(res => {
                                postItem.media_url = res;
                            })
                    }
                    if (postItem.author) {
                        this.getAuthor(postItem.author)
                            .subscribe(res => {
                                postItem.author_name = res;
                            })
                    }
                });
                return postJson;
            })
            // .map(res => {
            //     let postList = [];
            //     res.forEach(resItem => {
            //         console.log(resItem.author_name);
            //         postList.push(new Post(
            //             resItem.id,
            //             resItem.title,
            //             resItem.author_name,
            //             resItem.date,
            //             resItem.media_url,
            //             resItem.content));
            //     })
            //     return postList;
            // });
    }

    getListCategories(page: number) {
        return this.http.get(`${this.api.GET_CATEGORIES}?page=${page}`)
            .map((res: Response) => res.json())
    }

    getListTags(page: number) {
        return this.http.get(`${this.api.GET_TAGS}?page=${page}`)
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
                return res.source_url;
            });
    }

    getAuthor(id: number) {
        return this.http.get(this.api.GET_USER + id)
            .map((res: Response) => res.json())
            .map(res => {
                return res.name;
            });
    }

    getPostContent(id: number) {
        return this.http.get(`${this.api.GET_POSTS}/${id}`)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
                // return new Post(res.title, res.date, res.content);
            });
    }
}