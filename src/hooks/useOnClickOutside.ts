import { MutableRefObject, RefObject, useEffect } from "react";

export const useOnClickOutside = <T extends HTMLElement>(
  ref: MutableRefObject<T> | RefObject<T>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // If I click on ref element or its child nothing to do
      if (
        !ref.current ||
        (event.target instanceof Node && ref.current.contains(event.target))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};
