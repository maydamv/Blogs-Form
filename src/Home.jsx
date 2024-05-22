import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'algooo', author: 'Mayda', id: 1},
        {title: 'Welcome Party!', body: 'algooo', author: 'Carlos', id: 2},
        {title: 'University UCLV', body: 'algooo', author: 'Bosco', id: 3},
        {title: 'Environment', body: 'algooo', author: 'Mayda', id: 4}    
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id)
        setBlogs(newBlogs)
    }

    useEffect(() => {

     console.log('use Effect ran')
    }, []);

    return (  
        <div className="Home">
            <BlogList blogs = {blogs} title="All Blogs!!" handleDelete={handleDelete}></BlogList>
        </div>   
    );
}
 
export default Home;