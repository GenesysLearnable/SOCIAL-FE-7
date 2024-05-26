import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const VideoCall = () => {
  const [roomId, setRoomId] = useState('');
  const [socket, setSocket] = useState(null);
  const [peers, setPeers] = useState({});
  const userVideo = useRef();
  const peersRef = useRef({});

  useEffect(() => {
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      userVideo.current.srcObject = stream;

      newSocket.on('user-joined', (userId) => {
        const peer = createPeer(userId, newSocket.id, stream);
        peersRef.current[userId] = peer;
        setPeers(prevPeers => ({ ...prevPeers, [userId]: peer }));
      });

      newSocket.on('signal', (data) => {
        const peer = peersRef.current[data.userId];
        if (peer) {
          peer.signal(data.signal);
        } else {
          const peer = addPeer(data.signal, data.userId, stream);
          peersRef.current[data.userId] = peer;
          setPeers(prevPeers => ({ ...prevPeers, [data.userId]: peer }));
        }
      });
    });

    return () => newSocket.disconnect();
  }, []);

  const createPeer = (userIdToSignal, callerId, stream) => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream: stream
    });

    peer.on('signal', signal => {
      socket.emit('signal', { signal, userIdToSignal, callerId });
    });

    return peer;
  };

  const addPeer = (incomingSignal, callerId, stream) => {
    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: stream
    });

    peer.on('signal', signal => {
      socket.emit('signal', { signal, callerId });
    });

    peer.signal(incomingSignal);

    return peer;
  };

  const handleJoinRoom = () => {
    socket.emit('join', roomId);
  };

  return (
    <div>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Room ID"
      />
      <button onClick={handleJoinRoom}>Join Room</button>
      <video ref={userVideo} autoPlay playsInline />

      {Object.keys(peers).map((peerId) => (
        <Video key={peerId} peer={peers[peerId]} />
      ))}
    </div>
  );
};

const Video = ({ peer }) => {
  const ref = useRef();

  useEffect(() => {
    peer.on('stream', stream => {
      ref.current.srcObject = stream;
    });
  }, [peer]);

  return <video ref={ref} autoPlay playsInline />;
};

export default VideoCall;
