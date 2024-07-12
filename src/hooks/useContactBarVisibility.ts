import { useState, useEffect } from "react";

// Debounce function
const debounce = <T extends unknown[]>(func: (...args: T) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: T): void => {
    const later = () => {
      clearTimeout(timeout!);
      func(...args);
    };
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const useContactBarVisibility = () => {
  const getVisibilityThreshold = (): number => {
    if (window.matchMedia("(max-width: 650px)").matches) {
      return 7 * 16; // 7rem for screens <= 650px, converted to pixels
    } else if (window.matchMedia("(max-width: 1250px)").matches) {
      return 4.5 * 16; // 4.5rem for screens <= 1250px, converted to pixels
    }
    return 2.5 * 16; // 2.5rem for wider screens, converted to pixels
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const checkVisibility = () => {
      const currentPosition = window.scrollY;
      setIsVisible(currentPosition >= getVisibilityThreshold());
    };

    const handleScroll = () => checkVisibility();

    const handleResize = debounce(() => {
      checkVisibility();
    }, 250); // Debounce resize events

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check in case the page is already scrolled past the threshold
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize as EventListener);
    };
  }, []);

  return isVisible;
};

export default useContactBarVisibility;
