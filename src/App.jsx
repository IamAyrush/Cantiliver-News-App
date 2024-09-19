
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {
  const [category,setCategory]=useState('general')
const [country,setCountry]=useState('us')
const [query,setQuery]=useState('politics')

  return (
    <>
      <Navbar setCategory={setCategory} setCountry={setCountry} setQuery={setQuery}/>
      <NewsBoard category={category} country={country} query={query}/>
      
    </>
  )
}

export default App
