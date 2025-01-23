import Card from '@/components/card/card';
import getAllPosts from '@/lib/getAllPosts';
import React from 'react';

const Home = async() => {

  const allPosts = await getAllPosts()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-20'>
      {
        allPosts.map(post => <Card key={post.id} postData={post} /> )
      }
    </div>
  );
};

export default Home;