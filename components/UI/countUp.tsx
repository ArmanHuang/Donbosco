"use client"
import { useEffect, useState } from "react"

type CountUpProps = {
  end: number
  duration?: number
}

export function CountUp({ end, duration = 3000 }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const value = Math.min((progress / duration) * end, end)
      setCount(Math.floor(value))

      if (progress < duration) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return <>{count.toLocaleString()}</>
}