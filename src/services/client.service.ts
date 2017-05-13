import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Post } from '../model/post.model';
import { Endpoint } from '../constants/endpoint.constant';

@Injectable()
export class ClientService {
    private api: Endpoint = new Endpoint();
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
                    if (postItem.categories) {
                        this.getCategory(postItem.categories[0])
                            .subscribe(res => {
                                postItem.category_name = res;
                            })
                    }
                });
                return postJson;
            })
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
                let thumbnail_src = (res.media_details.sizes.thumbnail.source_url != null ? res.media_details.sizes.thumbnail.source_url : res.media_details.sizes.featured_thumbnail.source_url)
                return {
                    thumbnail: thumbnail_src,
                    featured: res.source_url
                };
            });
    }

    getAuthor(id: number) {
        return this.http.get(this.api.GET_USER + id)
            .map((res: Response) => res.json())
            .map(res => {
                return res.name;
            });
    }

    getCategory(id: number) {
        return this.http.get(this.api.GET_CATEGORIES + id)
            .map((res: Response) => res.json())
            .map(res => {
                return res.name;
            })
    }

    getPostContent(id: number) {
        return this.http.get(`${this.api.GET_POSTS}/${id}`)
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
                            res.author_name = resAuthor;
                        })
                }
                if (res.categories) {
                    this.getCategory(res.categories[0])
                        .subscribe(resCategory => {
                            res.category_name = resCategory;
                        })
                }
                console.log(res);
                return res;
            });
    }
}