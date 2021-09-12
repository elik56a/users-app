import { useCallback } from "react";

/**
 * This is a hook that check if the last element is rendered on the screen,
 * implemented by using the intersection observer api
 * @param {*} refElement
 * @param {Boolean} isLoading
 * @param {Function} callback
 * @returns {Function}
 */
export const useIsLastElementVisible = (refElement, isLoading, callback) => {
  return useCallback(
    (node) => {
      // avoid infinite call
      if (isLoading) return;

      refElement.current = new IntersectionObserver((entries) => {
        // always observing one single node
        const isLastItemVisible = entries[0].isIntersecting;

        //  if the the element is visible, to call the callback
        if (isLastItemVisible) {
          callback();
        }
      });
      // make sure if we have a node
      if (node) refElement.current.observe(node);
    },
    [callback, isLoading, refElement]
  );
};
