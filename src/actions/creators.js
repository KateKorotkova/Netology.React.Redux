import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, FILTER_SERVICE } from './actionTypes';


export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function addService(name, price) {
    return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}};
}

export function editService(id, newName, newPrice) {
    return {type: EDIT_SERVICE, payload: {id, newName, newPrice}};
}

export function filterService(nameFilter) {
    return {type: FILTER_SERVICE, payload: {nameFilter}};
}