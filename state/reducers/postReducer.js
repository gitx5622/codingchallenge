import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_ERROR,
    GET_ALL_COMMENTS,
    GET_ALL_COMMENTS_SUCCESS,
    GET_ALL_COMMENTS_ERROR,
    GET_ALL_COMMENTS_BY_POSTID,
    GET_ALL_COMMENTS_BY_POSTID_SUCCESS, GET_ALL_COMMENTS_BY_POSTID_ERROR
} from '../dispatchTypes'

export const initialState = {
    posts: [],
    comments: [],
    post_comments: [],
    isLoading: false,
    errorMessage: ""
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_ALL_POSTS_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                posts: action.posts
            };
        }
        case GET_ALL_POSTS_ERROR: {
            return {
                ...state,
                isLoading: true,
                errorMessage: action.errorMessage
            };
        }
        case GET_ALL_COMMENTS: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_ALL_COMMENTS_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                comments: action.comments
            };
        }
        case GET_ALL_COMMENTS_ERROR: {
            return {
                ...state,
                isLoading: true,
                errorMessage: action.errorMessage
            };
        }
        case GET_ALL_COMMENTS_BY_POSTID: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_ALL_COMMENTS_BY_POSTID_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                post_comments: action.post_comments
            };
        }
        case GET_ALL_COMMENTS_BY_POSTID_ERROR: {
            return {
                ...state,
                isLoading: true,
                errorMessage: action.errorMessage
            };
        }
        default:
            return state
    }
}