import './App.css';
import ReactTomatoes from './assets/tomatos.png'
import { useState } from 'react'

function App() {

  const [likeCount, setLikeCount] = useState(0)
  const [review, setReview] = useState("...awaiting review")
  const [posts, setPosts] = useState([])

  const increaseLikes = () => {
    setLikeCount(prevState => prevState + 1)
    console.log(likeCount)
  }

  const decreaseLikes = () => {
    if (likeCount > 0) {
      setLikeCount(prevState => prevState - 1)
      console.log(likeCount)
    }
  }

  const reviewHandler = (e) => {
    setReview(e.target.value)
  }

  const postHandler = (e) => {
    e.preventDefault()
    setPosts([...posts, review])
  }

  return (
    <div className="App">
      <div className="form-group">
        <img id="tomato" src={ReactTomatoes} alt="rotten tomatos" />
        <h1>ReactTomatoes</h1>
      </div>

      {/* Start Here */}
      <form onSubmit={postHandler}>
        <h2>Squid Games</h2>


        <div id="count">
          {/* mission: increment/decrement */}
          {/* bonus: find and import a picture to represent our class show */}
          <p>Squid Games has: {likeCount} likes</p>
          <button onClick={increaseLikes} type='button'>Like</button>
          <button onClick={decreaseLikes} type='button'>Dislike</button>
        </div>


        <div id="review">
          {/* mission: leave a review and display it in live time */}
          {/* bonus: write validations that will pop up if review is less than 5 characters */}
          <textarea cols={30} rows={5} name="review" onChange={reviewHandler} placeholder="write a review!"></textarea>
          <p>{review}</p>
          <input type="submit" value="Post"/>
        </div>


        <h2>Dashboard:</h2>
        <div id="post">
          {/* mission: post review to an alert popup when post button is clicked */}
          {/* bonus: post review to dashboard */}
          <p>{posts}</p>
        </div>
        
      </form>
    </div>
  );
}

export default App

