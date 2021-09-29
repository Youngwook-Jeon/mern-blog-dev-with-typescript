import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NotFound from '../../components/global/NotFound';
import CardVert from '../../components/cards/CardVert';
import { IBlog, IParams, RootStore } from '../../utils/TypeScript';
import { getBlogsByCategoryId } from '../../redux/actions/blogAction';

const BlogsByCategory = () => {
  const { category, blogsCategory } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();
  const { slug } = useParams<IParams>();

  const [categoryId, setCategoryId] = useState('');
  const [blogs, setBlogs] = useState<IBlog[]>();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cat = category.find(item => item.name === slug);
    if (cat) setCategoryId(cat._id);
  }, [slug, category]);

  useEffect(() => {
    if (!categoryId) return;

    if (blogsCategory.every(item => item.id !== categoryId)) {
      dispatch(getBlogsByCategoryId(categoryId));
    } else {
      const data = blogsCategory.find(item => item.id === categoryId);
      if (!data) return;

      setBlogs(data.blogs);
      setTotal(data.total);
    }

  }, [categoryId, blogsCategory, dispatch])

  if (!blogs) return <NotFound />;
  return (
    <div className="blogs_category">
      <div className="show_blogs">
        {
          blogs.map(blog => (
            <CardVert key={blog._id} blog={blog} />
          ))
        }
      </div>
    </div>
  );
};

export default BlogsByCategory;