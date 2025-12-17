import React from "react";
import { VideoBlock } from "../types";
import { Film } from "lucide-react";

interface VideoBlockComponentProps {
  block: VideoBlock;
  isSelected: boolean;
  onSrcChange: (src: string) => void;
}

export const VideoBlockComponent: React.FC<VideoBlockComponentProps> = ({
  block,
  isSelected,
  onSrcChange,
}) => {
  return (
    <div
      className={`relative p-4 transition-all ${
        isSelected ? "ring-2 ring-valasys-orange" : ""
      }`}
    >
      <div
        style={{
          textAlign: block.alignment as any,
          backgroundColor: "#f5f5f5",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        {block.src ? (
          <video
            width={block.width}
            height={block.height}
            controls
            poster={block.thumbnail}
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source src={block.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            style={{
              width: block.width,
              height: block.height,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e0e0e0",
              borderRadius: "8px",
            }}
          >
            <div className="text-center">
              <Film className="w-8 h-8 mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500 text-sm">Video not available</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
