import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ffa3179d70cfd093391dc741c434dae156d354b58931da558cf34097731c423e'
    }
});