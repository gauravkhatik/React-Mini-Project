import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLength] = useState(0);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("")


  //useref hook
  const passRef = useRef(null)

  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(noAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&*?{}()~"

    for( let i =1; i<= length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }

    setPass(pass)

  },[length,
    noAllowed,
    charAllowed, setPass])


    const copypass = useCallback(() => {
      passRef.current?.select()
      window.navigator.clipboard.writeText(pass)
    },
    [pass])


    useEffect(() => {
      passwordgenerator()
    },[length, noAllowed, charAllowed, passwordgenerator])


    
  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-900'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
     <input type='text' value={pass}  className='outline-none w-full py-1 px-3' placeholder='password' readOnly  ref={passRef}/>
     
     <button type="button" class="btn btn-primary" onClick={copypass}>
      Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={8} max={15} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
        <label> Length : {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultValue={noAllowed}
        id='numberInput' onChange={()=>{
          setNoAllowed((prev) => !prev)
        }}/> 
        <label>Number</label>
      </div>


      <div className='flex items-center gap-x-1'>
        <input type='checkbox' defaultValue={charAllowed}
        id='charrInput' onChange={()=>{
          setCharAllowed((prev) => !prev)
        }}/> 
        <label>Character</label>
      </div>


    </div>

    </div>
   
     
      
    </>
  )
}

export default App
