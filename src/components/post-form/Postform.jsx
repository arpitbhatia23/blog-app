import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {Button ,Input ,Select,RTE} from '../index'
import Service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PostForm = (post ) => {
    const {register ,handelSubmit,watch ,setValue,control,getValues}=useForm({
        defaultValues:{
            title:post ?.title || '',
            slug: post?.slug || '',
            content:post?.content || '',
            status :post?.status || '',


        },
        
    })
    const navigate = useNavigate()
    const userData =useSelector(state=>state.user.userData)
    const submit = async (data)=>{
        if (post){
        const file =    data.images[0]? appwiteService.uploadFile(data.image[0]):null
        if (file ){
            appwriteService.deleteFile(post.featuredImage)
        }


        const dbPost =await appwiteService.updatePost(post.$id ,{ ...data, featuredImage: file ? file.$id : undefined ,})
        if (db){
            navigate (`/post/${dbPost.$id}`)

        }
        else{
            const file =await appwiteService.uploadFile(data.image[0]);
            if(file){
               const fileId = file.$id 
               data.featuredImage=fileId
               await appwiteService.createPost({
                userId: userData.$id

               })
               if (dbPost){
                navigate(`/post/${dbPost.$id}`)
               }
            }
        }
    } 
        }
        const slugTransform = useCallback((value )=>{
      if (value && typeof  value === 'string')
       {
       
        return  value 
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g,'-S')
        return ''
      }
    

        },[])
        useEffect(()=>{

const subscription =watch ((value , {name} )=>{

    if (name=== "title"){
        setValue('slug', slugTransform(value.title,{shouldValidate:true}))
    }
})
return ()=>{
    subscription.unsubscribe()
}

        },[watch,slugTransform,setValue])
    
  return (
    <div>
      <form onSubmit={handelSubmit(submit) }className="flex flex-wrap">
        <div className='w-2/3 px-2 '>
            <Input lable="title"
            className="mb-4"
            {
                ...register('title',{
                    required:true})
            }/>
            <Input lable="slug :"
            placeholder="slug"
            className="mb-4"
            {...register("slug" ,{required:true})}
            onInput={(e)=>{
                setValue("slug",slugTransform(e,currentTarget.value),{
                    shouldValidate:true
                });
                
            }}
            />
            <RTE lable="Content :" name='content'
            control={control} defaultValue={getValues('content')}/>
        </div>
<div className='w-1/3 px-2'>
    <Input label="Featured Image :"
    type="file"
    className="mb-4"
    accept="image/pn, image/jpg ,image/jepg,/image/gif"
    {...register('image',{required:!post})}/>
    {post && (
        <div className='w-full mb-4 '>
            <img src={appwiteService.getFilePreview(post.featuredImage)
            } alt={post.title} className='rounded-lg' />
        </div>
    )}
    <Select options={['active','inactive']}
    lable="status"
    className="mb-4"
    {...register("status",{required:true})}/>
    <Button type='submit' bgcolor={post ? 'bg-green-500 ':undefined}
    className="w-full">
        {post ? 'update':"submit"}
    </Button>

</div>
      </form>
    </div>
  )
}

export default PostForm
