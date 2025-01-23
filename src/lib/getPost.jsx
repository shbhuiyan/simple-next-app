import axios from "axios";

const getPost = async(id) => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return res.data;
};

export default getPost;