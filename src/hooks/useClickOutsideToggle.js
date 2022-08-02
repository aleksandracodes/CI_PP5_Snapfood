import { useEffect, useRef, useState } from 'react'

const useClickOutsideToggle = () => {
    const[expanded, setExpanded] = useState(false);
  const ref = useRef(null) // a variable that will hold a reference to the burger icon
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      
      if (e.target?.classList.contains('exp')) return;

      if (ref.current && !ref.current.contains(e.target)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref]);

  return { expanded, setExpanded, ref }
}

export default useClickOutsideToggle