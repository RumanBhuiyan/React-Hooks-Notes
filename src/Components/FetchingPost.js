import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchingPost() {
    const [postId,setPostId] = useState([])
    const [posts,setPosts] = useState([])
    const [singlepost,setSinglePosts] = useState({})

    // rule :01 Due to missing dependency array the function inside useEffect is called
    // everytime when component is rendered or anything of the component is changed
    // this may create infinite loop so be alert before using it
    // useEffect(()=>{
    //     console.log('Component updated!')
    // })

    // rule :02 Due to [] empty array, function is called just once
    useEffect(()=>{
        console.log('FetghingPost Component is Called')
    },[])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((response)=>{
            setPosts(response.data)
        }).catch((error)=> console.log(error))
    },[])

    //rule 03 :Due to [postId],log statement will be executed whenever postId is changed
    useEffect(()=>{
        console.log('Changing post id value!!')
    },[postId])

    const fetchSinglePost = () =>{
        if(postId < posts.length){
            setSinglePosts(posts[postId])
        }
    }

    return (
        <div>
            <input type="text" onChange={e => setPostId(e.target.value)} />
            <button onClick={fetchSinglePost}>Fetch Post Details</button>
            <p>Post Body : {singlepost.body}</p>
            <p>Post Details : {JSON.stringify(singlepost)}</p>
            <p>All Posts Title : </p>
         <ul>
             {
                 posts.map((item)=> <li key={item.id}>{item.title}</li>)
             }
         </ul>
        </div>
        
    )
}

export default FetchingPost
