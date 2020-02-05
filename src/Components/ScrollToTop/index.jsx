import { useEffect, useRef } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = usePrevious(pathname);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    const condition =
      prevPathname &&
      prevPathname.includes('/packages') &&
      pathname.includes('/packages');

    if (!condition) {
      window.scrollTo(0, 0);
    }
  }, [pathname, prevPathname]);

  return null;
}
