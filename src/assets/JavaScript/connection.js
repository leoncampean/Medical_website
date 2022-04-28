import axios from "axios";


export async function login(){
    const url = 'http://localhost:3000/users'
    return axios.get(url);
}