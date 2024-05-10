import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller } from 'react-hook-form'
export default function RTE({name, control ,lable ,defaultValue=""}) {
  return (

<div className='w-full'>
  {lable && <label className='inline-block mb-1 pl-1'>
    {lable}
  </label>}
  <Controller
  name={name || "content "}
  control={control}
 render ={({field:{onChange}})=>(
<Editor 
apiKey='g82lq0qfit53ts1jxrcr4hezjwtu6x9tyqit6l45sysqupc7'
initialValue={defaultValue}
init={{height:500,
  initialValue:defaultValue,
  menubar:true,
  plugins:['' ,
    'advlist autolink list link image charmap print     preview anchor ',
    'searchreplace visualblocks code fullscreen ',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar:
  'undo redo | formatselect | bold italic underline | \ alignleft aligncenter alignright alignjustify \ bullist numlist outdent indent | removeformat | help  ',
  content_style:'body {font-family:Helvetica ,arial,sans-serif ; font-size:14px }'

}}
onEditorChange={onChange}
/>


 )}

  
  />
</div>


  )
}
