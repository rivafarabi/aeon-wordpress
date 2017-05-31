const WP_URL = "https://www.slashgear.com";

export const WP_API = {
    GET_POSTS : `${WP_URL}/wp-json/wp/v2/posts`,
    GET_CATEGORIES : `${WP_URL}/wp-json/wp/v2/categories/`,
    GET_TAGS : `${WP_URL}/wp-json/wp/v2/tags/`,
    GET_PAGES : `${WP_URL}/wp-json/wp/v2/pages/`,
    GET_COMMENTS : `${WP_URL}/wp-json/wp/v2/comments/`,
    GET_MEDIA : `${WP_URL}/wp-json/wp/v2/media/`,
    GET_USER : `${WP_URL}/wp-json/wp/v2/users/`,
}

export const WP_USER = {
    REGISTER : `${WP_URL}/wp-json/wp/v2/users/`,
    GET_TOKEN : `${WP_URL}/jwt-auth/v1/token`,
    VALIDATE: `${WP_URL}/jwt-auth/v1/token/validate`
}