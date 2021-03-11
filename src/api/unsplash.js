import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID BsRhtIuYnf22aSIyLn0xxtR_I8LIyYVaVubSD0Yx4l4'
    }
});