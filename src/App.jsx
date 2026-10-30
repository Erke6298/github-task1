import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Card() {
  const [count, setCount] = useState(0)

  return (

    <h1>hey</h1>
    
  )
}

function App() {

  return (

    <div>
      
      <p style={{color:'black',

        width:'200px',height:'200px' ,
        background:'red'}}>Адам өмірі дөңгелекті арба секілді, қатты жүріп бара жатқан арбаның сені қай бұрылыстан түсіріп кетері белгісіз.
        
        </p>
        <p style={{color:'blue',

        width:'200px',height:'200px' ,
        background:'yellow'}}>Өмірдің қысқалығы сонша, ол туралы ойланып та үлгермейсің.

        
        </p>
        <p style={{color:'white',

        width:'200px',height:'200px' ,
        background:'purple'}}>Өмір - бұл қазір. Ол «кеше» немесе «ертең» емес.
        
        </p>
    
    </div>
  )
}

export default App
