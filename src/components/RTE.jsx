import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
export default function RTE() {
  return (
   <Editor 
   initialValue='default value'
   init={{
    branding:false,
    height:500,
    plugins:['advlist autolink lists link image charmap print preview anchor ',
'searchreplace visuallblocks code fullscreen',
'insertdatetime media table paste code help wordcount'],
toolbar:'undo redo | formatselect | bold italic backcolor | \ alignleft algincenter alginright alginjustify | \ bullist numlist outdent indent | removeformat | help   '
}
   }/>
  )
}
