import { v4 as uuid } from 'uuid'

const DEFAULT_USER_KEY = 'users'

function saveUsers(users) {
    localStorage.setItem(DEFAULT_USER_KEY, JSON.stringify(users))
}

export function createUser(user) {
    const users = getUsers();

    // VALIDA OS DADOS DO USUÁRIO
    // users.find(user => )
    users.push({
        ...user,
        id: uuid()
    });
    saveUsers(users)
}

export function updateUser({id, ...user}) {
    const savedUser = getUserById(id);
    if(!savedUser) throw new Error('User not found!');
    const users = getUsers();
    const index = users.findIndex(user => user.id === id);
    users[index] = {
        ...users[index],
        ...user
    }
    saveUsers(users)
}

export function deleteUser(id) {
    const savedUser = getUserById(id);
    if(!savedUser) throw new Error('User not found!');
    const users = getUsers().filter(user => user.id !== id);
    saveUsers(users)
}

export function getUsers() {
    return JSON.parse(localStorage.getItem(DEFAULT_USER_KEY)) || []
}

export function getUserById(id) {
    const users = getUsers();
    return users.find(user => user.id === id);
}

export function getUserByEmail(email) {
    const users = getUsers();
    return users.find(user => user.email === email);
}