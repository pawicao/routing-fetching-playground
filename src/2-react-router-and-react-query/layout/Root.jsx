import { useEffect } from 'react';
import { Outlet, useNavigation } from "react-router-dom";
import topbar from "topbar";

// Configure the topbar for routes changes
topbar.config({
  barThickness: 5,
  barColors: {
    0: '#e52a30',
    '1.0': '#ae0308',
  },
  shadowBlur: 5,
  shadowColor: 'rgba(0, 0, 0, .5)',
});

export default function Root() {
  const { state } = useNavigation();

  useEffect(() => {
    if (state === 'loading') {
      topbar.show();
    } else {
      topbar.hide();
      // Normally remember to hide the topbar also in the global error boundary (or other error boundaries as well I guess)
    }
  }, [state]);

  return <Outlet />;
}
