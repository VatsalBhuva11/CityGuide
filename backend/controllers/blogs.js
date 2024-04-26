import {Blog} from "../models/blog.js";
import axios from 'axios';

export const getAllBlogs = async (req,res)=>{
   const blogs = await Blog.find({});
   res.status(200).json({blogs});
}

export const getBlog = async (req,res)=>{
  const {id} = req.params;
  const blog = await Blog.findById(id).exec();
  res.status(200).json({blog});

}

export const createBlog = async (req,res)=>{
  const {title,city,description} = req.body;
  const authHeader = req.headers.authorization
  const token = authHeader.split(' ')[1]
  try {
      let response;
      response=await axios.post('http://localhost:7001/api/auth/authenticate', {
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.data.uidd)
      const requestBody={
        uid: `${response.data.uidd}`
      }
      const response2=await axios.post('http://localhost:7001/api/user/getUser',requestBody)
      console.log(response2.data);
   
  } catch (error) {
    console.log(error);
  }
  const UID = response2.data.UID;
  const author = response2.data.firstName+' '+ response2.data.surname;
  const newBlog = Blog.create({title,city,description,UID,author});
  res.status(201).json({newBlog});
}

