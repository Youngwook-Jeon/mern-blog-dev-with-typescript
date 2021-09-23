import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardHoriz from '../components/cards/CardHoriz';
import CreateForm from '../components/cards/CreateForm';
import NotFound from '../components/global/NotFound';
import { RootStore, IBlog } from '../utils/TypeScript';

const CreateBlog = () => {
  const initState = {
    user: '',
    title: '',
    content: '',
    description: '',
    thumbnail: '',
    category: '',
    createdAt: new Date().toISOString()
  };

  const [blog, setBlog] = useState<IBlog>(initState);
  const { auth, category } = useSelector((state: RootStore) => state); 
  const dispatch = useDispatch();

  if (!auth.access_token) return <NotFound />;
  return (
    <div className="my-4 create_blog">
      <div className="row mt-4">
        <div className="col-md-6">
          <h5>Create</h5>
          <CreateForm blog={blog} setBlog={setBlog} />
        </div>

        <div className="col-md-6">
          <h5>Preview</h5>
          <CardHoriz blog={blog} />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;