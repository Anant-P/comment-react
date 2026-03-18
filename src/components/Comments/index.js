import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  nameInput = event => {
    this.setState({name: event.target.value})
  }

  commentInput = event => {
    this.setState({comment: event.target.value})
  }

  onLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItems => {
        if (eachItems.id === id) {
          return {...eachItems, like: !eachItems.like}
        }
        return eachItems
      }),
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    const newList = commentsList.filter(eachItem => eachItem.id !== id)

    this.setState({commentsList: newList})
  }

  getRandomColor = () => {
    const index = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    return initialContainerBackgroundClassNames[index]
  }

  AddnewComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      like: false,
      bgColor: this.getRandomColor(),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="bg-container">
        <div className="top-container">
          <div className="left-content">
            <h1>Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <form onSubmit={this.AddnewComment}>
              <input
                value={name}
                placeholder="Your Name"
                onChange={this.nameInput}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                value={comment}
                onChange={this.commentInput}
              >
                Your Comment
              </textarea>
              <br />
              <button className="add-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="right-img-container">
            <img
              className="right-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="top-hr" />
        <p>
          <span className="comment-count">{commentsList.length}</span> Comments
        </p>
        <ul>
          {commentsList.map(eachItem => (
            <CommentItem
              key={eachItem.id}
              commentItem={eachItem}
              onDelete={this.onDelete}
              onLike={this.onLike}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
