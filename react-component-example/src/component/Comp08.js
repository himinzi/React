import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    console.log("effect");
    if (isPlaying) {
      console.log('video.play() 호출');
      ref.current.play();
    } else {
      console.log('video.pause() 호출');
      ref.current.pause();
    }
  },[isPlaying]); // 이렇게 뒤에 변수를 적어주면, 이 변수가 바뀌었을때만 effect를 실행해준다. 

  return <video ref={ref} src={src} loop playsInline />;
}

export default function Comp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '일시 정지' : '재생'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
