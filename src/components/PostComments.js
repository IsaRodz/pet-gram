import React from 'react';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

export default function PostComments({ postId }) {
  const { result, loading } = useFetch(`/post/${postId}/comment`);

  if (loading) {
    return <Loading />;
  }

  if (!result.data.length) {
    return (
      <div className="empty-comments">
        <p>This post doesn't have comments to show</p>
      </div>
    );
  }

  return (
    <>
      <h3>Comments</h3>
      <div className="comments_container">
        {result.data.map(item => (
          <div className="comment" key={item.id}>
            <span className="author_name">
              {item.owner.firstName} {item.owner.lastName}
            </span>
            <span>{item.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
