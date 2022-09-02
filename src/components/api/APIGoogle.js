import axios from "axios";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyBRIjwA8MMqP36rRKN0vnUfQMjDQ3rGroI'
    }
})