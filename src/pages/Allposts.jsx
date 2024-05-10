import React ,{useState ,useEffect}from 'react'
import appwriteServices from '../appwrite/config'
import { Contaniner ,Postcard } from '../components'
const Allposts = () => {
    const [posts ,setposts ]=useState([])
    useEffect(()=>{
    },[])
    appwriteServices.getPost([]).then((posts)=>{
        if (posts){
            setposts(posts.documents)
        }
    })
  return (
    <div>
      <Contaniner>
        <div className='flex flex-wrap'>
        {posts.map((posts)=>(
          <div key={posts.$id} className='p-2 w-1/4'>
            <Postcard {...posts} />
          </div>
        ))}
        </div>
      </Contaniner>
    </div>
  )
}

export default Allposts
