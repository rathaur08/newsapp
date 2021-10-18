import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        // console.log("Hello I am a constructor from News Component");
        this.state ={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=93d253a1024344abb951599bb1c4b1bd&page=1&pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log("parseData");
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
    }

    handlePrevClick = async ()=>{
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=93d253a1024344abb951599bb1c4b1bd&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log("parseData");
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }

    handleNextClick = async ()=>{
        console.log("Next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=93d253a1024344abb951599bb1c4b1bd&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json()
            console.log("parseData");
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
    }
    }


    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsA-Z - Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title.slice(0, 47)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
