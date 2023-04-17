import React from 'react'
import Card from './Card'
import Feature from './Feature'
import Pricing from './Pricing'
function Main() {
  return (
    <main classNameName='container'>
      <section>
        <Feature/>
      </section>
      <section className='card'>
       <Card />
      </section>
      <section>
        <Pricing />
      </section>
    </main>
  )
}

export default Main