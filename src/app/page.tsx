'use client';

import dynamic from 'next/dynamic'

// Dynamically import the component and disable server-side rendering
const Whiteboard = dynamic(() => import('./components/Whiteboard'), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <Whiteboard />
    </main>
  )
}