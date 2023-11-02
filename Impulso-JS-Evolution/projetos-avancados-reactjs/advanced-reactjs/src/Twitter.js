import React, { Component } from "react";

class Twitter extends Component {

    state = {
        tweet: 'title'
    }

  componentDidMount(){
    const {posts} = this.props
    console.log('componentDidMount', posts)
  }

  componentDidUpdate(prevProps){
    const {loading} = this.props
    if(this.props.loading !== prevProps.loading){
        console.log('componentDiUpdate: loading', loading)
    }
  }

  componentWillUnmount(){
    console.log('componentWillUnmount: fui removido :(')
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state.tweet !== nextState.tweet
  }

  tweet = () => {
    this.setState({
        tweet: true
    })
  }

  render (){
    const {posts} = this.props
    console.log('render', posts)
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
      </div>
    )
  }
}

export default Twitter