import { useState,useEffect } from 'react'
import './App.css'
import Card from "./card"

function App() {
  const [query, setQuery] = useState("")
  const [characters, setCharacters] = useState([])
  const fetchData = () =>{
    
    fetch(`https://rickandmortyapi.com/api/character/?page=2`)
    .then(res =>res.json())
    .then(data => setCharacters(data.results))
  
    
  }
  
  useEffect(fetchData,[])
  {console.log(characters)}
  // const displayData = (query) =>{
  //   console.log(query)
  //     characters.filter((item) => {
  //       if(query ===""){
  //         return item
  //       }else if(item.name.toLowerCase().includes(query.toLowerCase()) ){
  //         return item
  //       }
  //     }
  //     )
    
  //   setQuery("")



  return (
    <>
      <input type='text' placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
      <div className='app'>
      {
        characters.filter((data) => {
          if(data ===""){
            return data
          }else if(data.name.toLowerCase().includes(query.toLowerCase()) ){
            return data
            setQuery("")
          }
        }).map((item) => {
          return(
            <Card image={item.image} name={item.name} status={item.status} species={item.species} location={item.location} origin={item.origin} />

          )
        })
      }
      </div>
    </>
  )
    }

export default App
