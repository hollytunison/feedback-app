import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  // setting new array minus the one we're deleting
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Prop drilling handleDelete and catching it in FeedbackList, then passing it to FeedbackItem
  return (
    <>
    <Header />
    <div className='container'>
    <FeedbackList feedback={feedback} 
      handleDelete={deleteFeedback}
    />
    </div>
    </>
  )
}

export default App