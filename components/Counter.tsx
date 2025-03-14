"use client"

import { useState } from 'react'
import styles from './counters.module.css'

interface CounterProps {
  initialCount?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      <button 
        onClick={() => setCount(count + 1)} 
        className={styles.counter}
      >
        Clicked {count} times
      </button>
    </div>
  );
}; 