import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category,country,query}) => {
  let [articles,setArticals] = useState([])
  let [start,setStart] = useState(0)
  const deFaultImgURL='https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    function getData(){
    useEffect(()=>{
      let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${import.meta.env.VITE_API_KEY}`
     fetch(url)
      .then(response=>response.json()).then(data=>setArticals(data.articles.slice(0,40)));
  
    },[category,country])
  }
  getData();
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      <hr />
      {articles? (articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} deFaultImg={deFaultImgURL}/>

      })):"No Results For This :["}
      <hr />

    </div>
  )
}

export default NewsBoard
