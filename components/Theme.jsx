import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/theme/themeSlice'

const Theme = () => {
    const mode=useSelector((state)=>state.theme.mode)
    const dispatch=useDispatch()
  return (
    
    <> 
         <div className={`p-4 ${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} />
         <p>Current Theme: {mode}</p>
         <button
        onClick={() => dispatch(toggleTheme())}
        className="mt-4 px-4 py-2 border rounded"
      >
        Toggle Theme
      </button>


    </>
  )
}

export default Theme