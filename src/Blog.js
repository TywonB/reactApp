import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        window.scrollTo(0,0)
        fetch("http://localhost:3001/api/post")
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        });
    }, []);
    
    return (
        <>
        <h1>Blog</h1>
        {posts.map (post => (
            <>
            <hr />
            <div className="Blog" key={post.id}>
                <img src="media/grey-box.jpg" alt="" className="grey-box img-responsive" />
            </div>
            <div style={{display: "inline-block"}}>
                <h2 className='blog-title'>{post.title}</h2>
                <p style={{marginLeft: "20px"}}>.............................................................................................</p>
                <p style={{marginLeft: "20px", /* fontSize: "15px",*/ marginTop: "-12px", marginBottom: "-20px"}}>By {post.name} on {post.date}</p>
                <p style={{marginLeft: "20px"}}>.............................................................................................</p>
                <p className="blog-post">{post.body}</p>
            </div>
            </>
            ))
        }
        </>
    )
}

export default Blog;