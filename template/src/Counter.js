import { useState, useCallback } from 'react'

export function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial)
  const incrementCount = useCallback(() => setCount(count + 1), [count])

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col gap-5 items-center space-x-4">
      Count: {count}
      <button
        onClick={incrementCount}
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
      >
        Increment
      </button>
    </div>
  )
}
