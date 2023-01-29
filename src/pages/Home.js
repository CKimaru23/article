import React, {useState} from 'react'
import Articles from '../components/Articles/Articles'
import Headers from '../components/Headers';


function Home() {
    return (
    <div>
        <Headers/>
        
        <Articles/>
    </div>
  )
}

export default Home