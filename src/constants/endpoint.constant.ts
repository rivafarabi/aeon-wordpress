export class Endpoint {
    private WP_URL = "https://finland.fi/wp-json/wp/v2";
    public GET_POSTS = `${this.WP_URL}/posts`;
    public GET_CATEGORIES = `${this.WP_URL}/categories/`;
    public GET_TAGS = `${this.WP_URL}/tags/`;
    public GET_PAGES = `${this.WP_URL}/pages/`;
    public GET_COMMENTS = `${this.WP_URL}/comments/`;
    public GET_MEDIA = `${this.WP_URL}/media/`;
    public GET_USER = `${this.WP_URL}/users/`;
}