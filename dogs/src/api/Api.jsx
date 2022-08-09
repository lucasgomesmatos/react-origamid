import React from 'react';
import PhotoPost from './endpoints/PhotoPost';
import TokenPost from './endpoints/TokenPost';
import UserPost from './endpoints/UserPost';

const Api = () => {
  return (
    <div>
      <UserPost />
      <TokenPost />
      <PhotoPost />
    </div>
  );
};

export default Api;
