import React,{useEffect,useState} from 'react'
import { Contaniner,PostForm } from '../components'
import appwriteServices from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
const Editpost = () => {
    const [posts,setposts]=useState(null)
    const {slug }=useParams()
    const navigate = useNavigate()
    useEffect(()=>{
if (slug){
    appwriteServices.getPost(slug).then((posts)=>{
        if(posts){
            setposts(posts)
        }
    }
    )}
else{
    navigate('/')

    }

    },[slug,navigate])
  return posts  ?  (
    <div className='py-8'>
      <Contaniner>
        <PostForm post={posts}/>
      </Contaniner>
    </div>
  ):null
}

export default Editpost
