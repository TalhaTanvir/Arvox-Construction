import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SCROLL_THRESHOLD = 50;
const RADIUS = 21;
const STROKE_WIDTH = 2;
const NORMALIZED_RADIUS = RADIUS - STROKE_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * NORMALIZED_RADIUS;

function ScrollToTop() {
  const { pathname, search } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animationFrameRef = useRef(null);

  const animateProgress = () => {
    const diff = targetProgressRef.current - currentProgressRef.current;

    if (Math.abs(diff) < 0.05) {
      currentProgressRef.current = targetProgressRef.current;
      setScrollProgress(currentProgressRef.current);
      animationFrameRef.current = null;
      return;
    }

    currentProgressRef.current += diff * 0.1;
    setScrollProgress(currentProgressRef.current);
    animationFrameRef.current = window.requestAnimationFrame(animateProgress);
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search]);

  useEffect(() => {
    const updateScrollValues = () => {
      const scrollingElement = document.scrollingElement || document.documentElement;
      const scrollTop = scrollingElement.scrollTop;
      const scrollHeight = scrollingElement.scrollHeight - scrollingElement.clientHeight;

      const progress =
        scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0;

      setIsVisible(scrollTop > SCROLL_THRESHOLD);
      targetProgressRef.current = progress;

      if (!animationFrameRef.current) {
        animationFrameRef.current = window.requestAnimationFrame(animateProgress);
      }
    };

    updateScrollValues();
    window.addEventListener('scroll', updateScrollValues, { passive: true });
    window.addEventListener('resize', updateScrollValues);
    window.addEventListener('load', updateScrollValues);

    return () => {
      window.removeEventListener('scroll', updateScrollValues);
      window.removeEventListener('resize', updateScrollValues);
      window.removeEventListener('load', updateScrollValues);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dashOffset = CIRCUMFERENCE - (scrollProgress / 100) * CIRCUMFERENCE;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ease-out md:bottom-6 md:right-6 ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-3 opacity-0 pointer-events-none'
      } hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2`}
    >
      <svg
        className="-rotate-90 absolute inset-0 h-full w-full"
        viewBox={`0 0 ${RADIUS * 2} ${RADIUS * 2}`}
        aria-hidden="true"
      >
        <circle
          cx={RADIUS}
          cy={RADIUS}
          r={NORMALIZED_RADIUS}
          fill="none"
          stroke="rgb(209 213 219)"
          strokeWidth={STROKE_WIDTH}
        />
        <circle
          cx={RADIUS}
          cy={RADIUS}
          r={NORMALIZED_RADIUS}
          fill="none"
          stroke="rgb(250 204 21)"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <span className="relative z-10 flex h-full w-full items-center justify-center">
        <ArrowUp className="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </span>
    </button>
  );
}

export default ScrollToTop;
