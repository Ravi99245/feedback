import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackSubmitted: true,
    heading: 'How satisfied are you with our customer support performance?',
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isFeedBackSubmitted: !prevState.isFeedBackSubmitted,
    }))
    this.setState({heading: 'Thank You !'})
  }

  render() {
    const {isFeedBackSubmitted, heading} = this.state
    console.log(isFeedBackSubmitted)
    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources
    console.log(emojis[1])

    return (
      <div className="bg-container">
        <div className="container">
          {isFeedBackSubmitted ? (
            <>
              <h1 className="heading">{heading}</h1>
              <ul className="emoji-container">
                {emojis.map(eachItem => (
                  <li key={eachItem.id}>
                    <img
                      src={eachItem.imageUrl}
                      className="emoji"
                      onClick={this.changeStatus}
                      alt={eachItem.name}
                    />
                    <p className="name">{eachItem.name}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="love-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love" />
              <h1 className="heading">{heading}</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
