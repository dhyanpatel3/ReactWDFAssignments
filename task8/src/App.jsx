import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person name="dhyan" age={20}/>
      <Product name="Google pixel6a" price="$500"/>
    </div>
  )
}

export default App