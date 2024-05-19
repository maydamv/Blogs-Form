import { useState } from "react"

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new wbsite', body: 'algooo', author: 'Mayda', id: 1},
        {title: 'Welcome Party!', body: 'algooo', author: 'Carlos', id: 2},
        {title: 'University UCLV', body: 'algooo', author: 'Bosco', id: 3}    
    ]);
 

    return (  
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Writen by {blog.author}</p>
                </div>
            ))}
        </div>   
    );
}
 
export default Home;