import { useCallback } from "react";

export const useIsAtBottom = (refElement, isLoading, callback) => {
  return useCallback(
    (node) => {
      if (isLoading) return;

      refElement.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // always observing one single node
          // see if the the element is visible, to call the callback
          callback();
        }
      });
      // make sure if we have a node
      if (node) refElement.current.observe(node);
    },
    [callback, isLoading, refElement]
  );
};
