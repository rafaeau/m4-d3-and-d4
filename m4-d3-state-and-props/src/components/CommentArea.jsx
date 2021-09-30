import {Component} from 'react'

class CommentArea extends Component {

    state = {
        comments:[]
    }

    componentDidMount = async () => {
        try{
            let response = await fetch()
        }
        catch (error){ console.log(error) }
    }

    render(){
        return{ <div><CommentListcomments={}/></div>}
    }
}

export default CommentArea