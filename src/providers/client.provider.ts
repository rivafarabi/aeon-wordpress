import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AuthProvider } from './auth.provider';
import { Post } from '../model/post.model';
import { WP_API } from '../constants/endpoint.constant';

@Injectable()
export class ClientProvider {
    jwtToken: any

    constructor(private http: Http, private auth: AuthProvider) {
        this.fetchToken().subscribe(res => {
            this.jwtToken = res;
        })
    }

    getListPosts(page: number, param?: any) {
        let paramString: string = "";
        if (param != null) {
            paramString = this.transParams(param);
        }
        return this.http.get(`${WP_API.GET_POSTS}?page=${page}${paramString}`)
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
                                postItem.author_name = res.name;
                            })
                    }
                    if (postItem.categories) {
                        this.getCategory(postItem.categories[0])
                            .subscribe(res => {
                                postItem.category_name = res.name;
                            })
                    }
                });
                return postJson;
            })
    }

    getListCategories(page: number, param?: any) {
        let paramString: string = "";
        if (param != null) {
            paramString = this.transParams(param);
        }
        return this.http.get(`${WP_API.GET_CATEGORIES}?page=${page}${paramString}`)
            .map((res: Response) => res.json())
    }

    getListAuthors(page: number, options?: any) {
        let opts: string = "";
        if (options != null) {
            opts = this.transParams(options);
        }
        return this.http.get(`${WP_API.GET_USER}?page=${page}${opts}`)
            .map((res: Response) => res.json())
    }

    getListTags(page: number, options?: any) {
        let opts: string = "";
        if (options != null) {
            options.forEach(opt => {
                opts = opts + `&${opt.type}=${opt.id}`;
            })
        }
        return this.http.get(`${WP_API.GET_TAGS}?page=${page}${opts}`)
            .map((res: Response) => res.json())
    }

    getListPages() {
        return this.http.get(WP_API.GET_PAGES)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            });
    }

    getComments(id: number, page: number) {
        return this.http.get(`${WP_API.GET_COMMENTS}?post=${id}&page=${page}`)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            });
    }

    postCommnent(param: any) {
        let paramString: string = this.transParams(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.jwtToken.token)
        let options = new RequestOptions({ headers: headers });
        let body = '';
        return this.http.post(`${WP_API.POST_COMMENTS}?${paramString}`, body, options)
            .map((res) => res.json())
            .map(res => {
                return res;
            });
    }

    getMedia(id: number) {
        return this.http.get(WP_API.GET_MEDIA + id)
            .map((res: Response) => res.json())
            .map(res => {
                let thumbnail_src = (res.media_details.sizes.thumbnail.source_url != null ? res.media_details.sizes.thumbnail.source_url : res.media_details.sizes.featured_thumbnail.source_url)
                return {
                    sizes: res.media_details.sizes,
                    featured: res.source_url
                };
            });
    }

    getAuthor(id: number) {
        return this.http.get(WP_API.GET_USER + id)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            });
    }

    getCategory(id: number) {
        return this.http.get(WP_API.GET_CATEGORIES + id)
            .map((res: Response) => res.json())
            .map(res => {
                return res;
            })
    }

    getPostContent(id: number) {
        return this.http.get(`${WP_API.GET_POSTS}/${id}`)
            .map((res: Response) => res.json())
            .map(res => {
                if (res.featured_media) {
                    this.getMedia(res.featured_media)
                        .subscribe(resMedia => {
                            res.media_url = resMedia;
                        })
                }
                if (res.author) {
                    this.getAuthor(res.author)
                        .subscribe(resAuthor => {
                            res.author_name = resAuthor.name;
                        })
                }
                if (res.categories) {
                    this.getCategory(res.categories[0])
                        .subscribe(resCategory => {
                            res.category_name = resCategory.name;
                        })
                }
                console.log(res);
                return res;
            });
    }

    transParams(param: any) {
        let opts: string = "";
        if (param != null) {
            param.forEach(opt => {
                opts = opts + `&${opt.type}=${opt.id}`;
            })
        }
        return opts;
    }

    fetchToken() {
        return Observable.fromPromise(this.auth.getToken())
            .map(res => {
                return res;
            });;
    }
}