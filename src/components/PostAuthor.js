export default function PostAuthor({ author, onClick }) {
  return (
    <div className="card_heading">
      <img className="img" src={author.picture} alt={author.email} onClick={onClick} />
      <div className="author">
        <div className="author_name" onClick={onClick}>
          {author.firstName} {author.lastName}
        </div>
        <div className="author_email">{author.email}</div>
      </div>
    </div>
  );
}
