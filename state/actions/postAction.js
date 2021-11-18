import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_ERROR,
    GET_ALL_COMMENTS_SUCCESS,
    GET_ALL_COMMENTS,
    GET_ALL_COMMENTS_ERROR,
    GET_ALL_COMMENTS_BY_POSTID,
    GET_ALL_COMMENTS_BY_POSTID_SUCCESS,
    GET_ALL_COMMENTS_BY_POSTID_ERROR
} from "../dispatchTypes";
import axios from 'axios';


export const getPosts = async(dispatch) => {
    dispatch({
        type: GET_ALL_POSTS
    })
    await axios.get(`${process.env.NEXT_PUBLIC_CODING_INTERVIEW_URL}/posts`)
    .then((response) => {
        console.log(response);
        dispatch({
            type: GET_ALL_POSTS_SUCCESS,
            posts: response.data, 
        })
    })
    .catch(error => {
        dispatch({
            type: GET_ALL_POSTS_ERROR,
            errorMessage: error.response.data.error_message,
        });
    })
    .catch(() => {
        dispatch({
            type: GET_ALL_POSTS_ERROR,
            errorMessage:
                'Lost connection to the server. Kindly check your internet connection',
        });
    });
}

export const getComments = async(dispatch) => {
    dispatch({
        type: GET_ALL_COMMENTS
    })
    await axios.get(`${process.env.NEXT_PUBLIC_CODING_INTERVIEW_URL}/comments`)
    .then((response) => {
        console.log(response);
        dispatch({
            type: GET_ALL_COMMENTS_SUCCESS,
            comments: response.data, 
        })
    })
    .catch(error => {
        dispatch({
            type: GET_ALL_COMMENTS_ERROR,
            errorMessage: error.response.data.error_message,
        });
    })
    .catch(() => {
        dispatch({
            type: GET_ALL_COMMENTS_ERROR,
            errorMessage:
                'Lost connection to the server. Kindly check your internet connection',
        });
    });
}

export const getCommentByPostID = async(dispatch, postId) => {
    dispatch({
        type: GET_ALL_COMMENTS_BY_POSTID
    })
    await axios.get(`${process.env.NEXT_PUBLIC_CODING_INTERVIEW_URL}/comments?postId=${postId}`)
        .then((response) => {
            console.log(response);
            dispatch({
                type: GET_ALL_COMMENTS_BY_POSTID_SUCCESS,
                post_comments: response.data,
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ALL_COMMENTS_BY_POSTID_ERROR,
                errorMessage: error.response.data.error_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_ALL_COMMENTS_BY_POSTID_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
}
