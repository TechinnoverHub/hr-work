import { useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

export default function ScrollToTopPackages({ children }) {
  const { pathname } = useLocation();
  const match = useRouteMatch();
  // console.log(match, '+++ match +++');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}
