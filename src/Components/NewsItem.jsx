import React from 'react'

const NewsItem = ({title,description,src,url,deFaultImg}) => {
  return (
    <>
    <div className="card bg-dark text-light mb-3 d-inline-block  mx-xl-2 mx-lg-3 mx-md-4 px-2 py-2" style={{maxWidth:'315px',marginLeft:'1.5rem'}}>
  <img src={src?src:deFaultImg} style={{height:'200px',width:'297px'}} className="card-img-top" alt='News Image'/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"please check Whole news article.It is information about something that just happend! "}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
      
    </>
  )
}

export default NewsItem
