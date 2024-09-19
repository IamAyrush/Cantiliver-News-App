import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import './public.css'

const Navbar = ({setCategory,setCountry,setQuery}) => {
  let searchInput = document.querySelector('#searchInput')
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
  <div className="container-fluid" >
    <a className="navbar-brand  m-auto " href="/">NewsTea <FontAwesomeIcon icon={faMugHot} /> </a>
  </div>
</nav>
   <div className='filter'>
   <button type="button" onClick={()=>setCategory('technology')} className="btn btn-outline-primary">Technology</button>
<button type="button" onClick={()=>setCategory('entertainment')} className="btn btn-outline-info">Social</button>
<button type="button" onClick={()=>setCategory('sport')} className="btn btn-outline-success">Sports</button>
<button type="button" onClick={()=>setCategory('business')} className="btn btn-outline-info">Business</button>
<button type="button" onClick={()=>setCategory('health')} className="btn btn-outline-warning">LifeStyle</button>
<button type="button" onClick={()=>setCategory('science')} className="btn btn-outline-info">Science</button>
<button type="button" onClick={()=>setCategory('education')} className="btn btn-outline-success">Education</button>
<button type="button" onClick={()=>setCategory('politics')} className="btn btn-outline-warning">Politics</button>
<button type="button" onClick={()=>setCountry('us')} className="btn btn-info">INDIA</button>
<button type="button" onClick={()=>setCountry('us')} className="btn btn-warning">USA</button>
 </div>
 
      
    </>
  )
}

export default Navbar
