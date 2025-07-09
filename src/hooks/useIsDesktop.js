import { useEffect, useState } from "react";

const useIsDesktop = (breakpoint = 720) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= breakpoint);

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
