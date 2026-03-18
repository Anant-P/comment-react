// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentItem, onDelete, onLike} = props
  const {id, name, comment, like, bgColor} = commentItem

  const onDeleteClick = () => onDelete(id)

  const onLikeClick = () => onLike(id)

  const isLike = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-item">
      <div className="comment-title-container">
        <span className={`name-fist-letter-box ${bgColor}`}>
          {name[0].toUpperCase()}
        </span>
        <h2>{name}</h2>
        <p>less than a minute ago</p>
      </div>
      <p className="comment-para">{comment}</p>
      <div className="icon-container">
        <button className="like-btn" type="button" onClick={onLikeClick}>
          <img className="like-icon" src={isLike} alt="like" /> Like
        </button>

        <button type="button" data-testid="delete" onClick={onDeleteClick}>
          <img
            className="like-icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
