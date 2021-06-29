import Loading from './Loading';
import useFetch from '../hooks/useFetch';
import { format } from 'timeago.js';

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
            <div className="row">
              <img src={item.owner.picture} alt={item.owner.email} />
              <div className="text">
                <span className="author_name">
                  {item.owner.firstName} {item.owner.lastName}
                </span>
                <span>{item.message}</span>
                <div className="date">{format(item.publishDate)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
