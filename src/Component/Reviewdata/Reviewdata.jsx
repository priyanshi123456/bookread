import React, { useState } from 'react'



const Reviewdata = (props)=>{
  const {title,image,id,description , author} = props.data
  // const [reviewtext,setreviewtext] = useState("")

  // const handlereviewsubmit = ()=>{
  //   const newreview = {text:reviewtext}
  //   setreviews([...reviews,newreview]);
  //   setreviews("")
  // }

  return(
    <>
   <div className="container">
      <div className="row">
        <div className="col-md-4 text-center">
          <div>
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-8">
          <div>
            <h1>{title}</h1>
            <h2 >{author}</h2>
            <p>{description}</p>
            <h3> write a review Review</h3>
           <p>what did you think write a review</p>
           <textarea placeholder='write a review'  cols="80" rows="6"></textarea>
           <button className='btn btn-primary' style={{width:"75%",marginTop:"20px"}} type='submit'>Submit</button>
          
          </div>
        </div>
      </div>
    </div>
    
    </>

  )
}
export default Reviewdata
