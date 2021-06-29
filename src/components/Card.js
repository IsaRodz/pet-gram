import { Fragment, useState } from 'react';
import Modal from './Modal';
import AuthorInfo from './AuthorInfo';
import { format } from 'timeago.js';
import PostAuthor from './PostAuthor';
import PostReactions from './PostReactions';
import PostComments from './PostComments';

export default function Card({ item, onClickTag }) {
  const [authorModal, setAuthorModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);

  return (
    <Fragment>
      <div key={item.id} className="card">
        <PostAuthor author={item.owner} onClick={() => setAuthorModal(true)} />
        <img src={item.image} alt={item.text} />
        <div className="card_content">
          <PostReactions likes={item.likes} onClick={() => setCommentsModal(true)} />
          <div className="text">
            <span className="author_name">
              {item.owner.firstName} {item.owner.lastName}
            </span>
            <span>{item.text}</span>
          </div>

          <div className="tags">
            {item.tags.map((tag, index) => (
              <div key={index} className="tag" onClick={() => onClickTag(tag)}>
                #{tag}
              </div>
            ))}
          </div>

          <div className="date">{format(item.publishDate)}</div>
        </div>
      </div>

      <Modal active={authorModal} onClose={() => setAuthorModal(false)}>
        <AuthorInfo userId={item.owner.id} />
      </Modal>

      <Modal active={commentsModal} onClose={() => setCommentsModal(false)}>
        <PostComments postId={item.id} />
      </Modal>
    </Fragment>
  );
}
