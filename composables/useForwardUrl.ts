import {useState} from "#app";

export const useForwardUrl = () => {
    return useState('forwardURL', ()=> '')
}