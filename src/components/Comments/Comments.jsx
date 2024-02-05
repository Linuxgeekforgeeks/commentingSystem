import React, { useEffect, useState } from 'react'
import { getComments as getCommentsApi } from '../../api/commentApi'

function Comments({currentUserId}) {
    const [backendComments,setBackendComments]=useState()
    const rootComments=backendComments.filter(backendcomment=>backendcomment.parentId==null);
    console.log(backendComments)
    useEffect(()=>{
        getCommentsApi().then(data=>{
            setBackendComments(data)
        })

    },[])
  return (
    <div className='comments'>
        <h3 className='comments-title'>comments</h3>
        <div className="comments-container">
            {rootComments.map(rootcomment=>(
                <div>{rootcomment.body}</div>
            ))}
        </div>
    </div>
  )
}

export default Comments