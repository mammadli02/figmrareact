import { BASE_URL } from "./base_url";
import axios from "axios";

//get all Blogs
export const getAllBlogs = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL+'/blogs';
  }
  else{
    URL = BASE_URL+'/blogs'+`?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};
//get Blogs by ID
export const getBlogsById = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/blogs/${ID}`).then((res) => {
    globalData = res.data.data;
  });
  return globalData;
};

//delete Blogs by  ID
export const deleteBlogsById = async (ID) => {
  let deletedBlogs;
  await axios.delete(`${BASE_URL}/blogs/${ID}`).then((res) => {
    deletedBlogs = res.data.data;
  });

  return deletedBlogs;
};
//post Blogs
export const postBlogs = (payload) => {
  axios.post(`${BASE_URL}/blogs`, payload);
};
//put BLOGS
export const editBlogs=(id,payload)=>{
  axios.put(`${BASE_URL}/blogs/${id}`,payload)
}