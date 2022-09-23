import React,{useEffect} from 'react'

function Profile() {

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // })
  const addData=()=>{
      fetch("https://jsonplaceholder.typicode.com/posts/",      
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          userId: 21,
          body:"hello",
          title:"yo"
        }),
      }).then(response => response.json())
      .then(json => console.log(json))
  }

  return (
    <div>
      <h1>
        Profile Page
      </h1>
      <button onClick={addData}>Click me</button>
    </div>
  )
}

export default Profile