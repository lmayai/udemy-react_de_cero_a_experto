import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['OnePunch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    //setCategories([...categories,'Naruto'])
    setCategories(cats => [...cats,'Naruto'])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory />
      <hr/>
      
      <ol>
        {
          categories.map( (category, i) => {
            return <li key={i}>{category}</li>
          })
        }
      </ol>

    </>
  )
}


export default GifExpertApp;
