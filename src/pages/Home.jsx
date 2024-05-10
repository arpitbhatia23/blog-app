import React, { useEffect, useState } from 'react'
import { Contaniner,PostForm, Postcard } from '../components'
import appwriteServices from '../appwrite/config'
function Home() {
    const [post ,setpost]= useState([])
        useEffect(()=>{
appwriteServices.getPosts().then((post)=>{
    if(post ){
        setpost(post.documents)

    }
})
},[])
    
 if(post.length===0){
    return(
        <div className='w-fullpy-8 mt-4 text-center'>
            <Contaniner>
                <div className='flex flex-wrap'>
                    <div className='p-2 w-full'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            login to read post
                        </h1>
                    </div>

                </div>
            </Contaniner>
        </div>
    )
 }
 return(
    <div className='w-full py-8 '>
        <Contaniner>
            <div className='flex flex-wrap'>
{post.map((post)=>(
    <div key={post.$id} className='p-2 w-1/4'>
        <Postcard {...post}/>
        </div>
))}
            </div>
        </Contaniner>
    </div>
 )

  
}

export default Home
