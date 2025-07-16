'use client'

import { Tldraw, useMultiplayerState } from 'tldraw'
import 'tldraw/tldraw.css'

const ROOM_ID = 'shared-drawing-room'
const PARTYKIT_HOST = process.env.NEXT_PUBLIC_PARTYKIT_HOST!

export default function Whiteboard() {
  // This is the correct, modern hook for real-time collaboration.
  const store = useMultiplayerState({
    hostUrl: PARTYKIT_HOST,
    roomId: ROOM_ID,
  })

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw
        store={store}
        autoFocus
        shareZone={<></>}
      />
    </div>
  )
}