import * as api from '../api/index.js';


// actions creaters

export const getPosts=()=> async(dispatch) =>{

    try{
        const {data} =await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload:data});
    }
    catch(error){
        console.log(error.message+"hello");
    }
}

export const createPost=(post)=> async(dispatch) =>{

    try{
        const {data} =await api.createPost(post);
        dispatch({type:'CREATE', payload:data});
    }
    catch(error){
        console.log(error.message+"hello");
    }
}



