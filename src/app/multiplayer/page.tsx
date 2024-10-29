'use client'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function MultiplayerPage() {

  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleCreateRoom = async () => {
    const userId = uuidv4();
    const newRoomId = uuidv4(); // Generate a new room ID
  
    try {
      const response = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId: newRoomId, userId, username }),
      });
  
      if (response.ok) {
        // Redirect to the room
        window.location.href = `/room/${newRoomId}?userId=${userId}`;
      } else {
        console.error('Failed to create room');
      }
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };
  

  // Handle Room Join
  const handleJoinRoom = async () => {
    const userId = uuidv4();

    try {
      // Verify that the room ID exists in the database
      const response = await fetch(`/api/room/${roomId}`);
      if (response.ok) {
        // If room exists, navigate to it
        window.location.href = `/room/${roomId}?userId=${userId}`;
      } else {
        console.error('Room not found');
      }
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  return (
    <div>
      <h1>Multiplayer</h1>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Room ID (if joining)"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={handleCreateRoom}>Create Room</button>
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
}
