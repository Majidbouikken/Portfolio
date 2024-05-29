import { useState } from "react";

interface HoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface UseHoverResult {
  hovered: boolean;
  bind: HoverBind;
}

const useHover = (): UseHoverResult => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  return {
    hovered,
    bind: {
      onMouseEnter,
      onMouseLeave,
    },
  };
};

export default useHover;
