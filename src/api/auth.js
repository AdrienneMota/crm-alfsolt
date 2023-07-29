import { getUserByEmail } from "./user";

export default function loginAuth({email, password}){
    const userExist = getUserByEmail(email)
    if((userExist) && userExist.password === password){
        authPost(userExist)
    }else{
        throw new Error('Email e senha incorretos.')
    }
}

function authPost(user){
    localStorage.setItem('session', JSON.stringify(user))
}