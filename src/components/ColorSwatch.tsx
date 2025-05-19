import React from "react";

interface Props {
  colors: string[];
  size?: number;
}

const ColorSwatch: React.FC<Props> = ({ colors, size = 16 }) => {
  return (
    <div className="flex items-center gap-2">
      {colors.map((color, idx) => (
        <span
          key={idx}
          className="rounded-full border"
          style={{
            backgroundColor: color,
            width: size,
            height: size,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(ColorSwatch);
