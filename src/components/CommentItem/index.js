// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteCommentItem} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails

  const postedTime = formatDistanceToNow(date)

  const btnClassName = isLiked ? 'liked-btn' : 'like-btn'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDelete = () => {
    deleteCommentItem(id)
  }

  return (
    <li className="comment-container-item">
      <div className="initial-date-name-comment-container">
        <div className={`initial-container ${initialClassName}`}>
          <p className="initial">{name[0].toUpperCase()}</p>
        </div>
        <div className="comment-name-date-container">
          <div className="name-date-container">
            <h1 className="name">{name}</h1>
            <p className="time-date">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="delete-like-container">
        <div className="like-btn-container">
          {isLiked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="liked"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />
          )}
          <button
            type="button"
            className={`btn ${btnClassName}`}
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>

      <hr className="line" />
    </li>
  )
}

export default CommentItem
