import {Component} from 'react'
import CommentList from './CommentList'

class CommentArea extends Component {

    state = {
        comments:[]
    }

    componentDidMount = async () => {
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/ + this.props.asin', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2MzMwNDE3MzEsImV4cCI6MTYzNDI1MTMzMX0.GE40mgxzMHYfFO5F7QcpvD2R_CSdUUkOIEkhxIjl-bs'
                }
            })
            console.log(response)
            let comments = await response.json()
            this.setState({comments: comments})
        }
        catch (error){ console.log(error) }
    }

    render(){
        return( <div><CommentList commentsToShow={this.state.comments}/></div> )
    }
}

export default CommentArea