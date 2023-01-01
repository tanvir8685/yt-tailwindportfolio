import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
  <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
</div>

                    <div className=' w-full  h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <p>Comming soon !!!!!</p>
        </div>
        </div>

    );
};

export default Blog;