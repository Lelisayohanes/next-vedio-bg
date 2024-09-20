import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  children: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VideoBackground;
