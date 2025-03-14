"use client"

import { useState } from 'react'

interface CounterProps {
  initialCount?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <button 
        onClick={() => setCount(count + 1)} 
      >
        Clicked {count} times
      </button>
    </div>
  );
}; 