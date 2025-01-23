import axios from "axios";

const getAllPosts = async() => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return res.data;
};

export default getAllPosts;
