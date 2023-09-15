import { useState, useEffect } from "react"

const Timer = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      setCount(prevCount => prevCount +1 )
    }, 1000)

    return() => clearInterval(timer)

  }, [])
  return(
    <h1>Timer: {count}</h1>
  )
}
export default Timer
