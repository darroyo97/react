import React, { Component } from 'react'


class News extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }


    componentDidMount = (params) => {
        
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd"
        fetch(url)
            .then(response => {
            return response.json()
            })
            .then(articles => {
            
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default News
