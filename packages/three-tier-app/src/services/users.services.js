import {ajax} from './index';

export const createUser = (user) => {
    return ajax.post(`/users`, {
        user
    });
}

export const getUser = (id) => {
    return ajax.get(`/users/${id}`);
}

export const updateUser = (id, userUpdates) => {
    return ajax.patch(`/users/${id}`, {
        userUpdates
    });
}

export const getAllUser = () => {
    return ajax.get('/users');
}

export const deleteUser = (id) => {
    return ajax.delete(`/users/${id}`);
}

export const login = (user) => {

    return ajax.post('/authentication',{
        email: user.email,
        password: user.password,
        strategy: user.strategy
    });
}

