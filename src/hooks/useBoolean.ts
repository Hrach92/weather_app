import { useCallback, useState } from "react";

type BooleanReturnType = {
  setTrue: () => void;
  setFalse: () => void;
  setToggle: () => void;
  state: boolean;
};

const useBoolean = (): BooleanReturnType => {
  const [open, setOpen] = useState(false);

  const setTrue = useCallback(() => setOpen(true), [setOpen]);
  const setFalse = useCallback(() => setOpen(false), [setOpen]);
  const setToggle = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return {
    state: open,
    setTrue,
    setFalse,
    setToggle,
  };
};

export default useBoolean;
