import { useEffect, useState, useRef } from "react";
import { DisplayContext } from "./DisplayContext";
import PageContainer from "../../components/PageContainer";

export default function DisplayContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTimeout, setLoadingTimeout] = useState<boolean>(false);

  const reset = () => {
    setLoading(true);
    setLoadingTimeout(false);

    setWidth(null);
    setHeight(null);

    setIsSmallScreen(null);

    timeoutHit.current = false;
  };

  const timeoutHit = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      timeoutHit.current = true;
      setLoadingTimeout(true);
      setLoading(false); // force stop on timeout
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const updateDisplay = () => {
      if (timeoutHit.current) return; // force stop everything on timeout

      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      setWidth(currentWidth);
      setHeight(currentHeight);

      setIsSmallScreen(currentWidth <= 768);

      setLoading(false);
    };

    updateDisplay();

    window.addEventListener("resize", updateDisplay);

    return () => {
      window.removeEventListener("resize", updateDisplay);
    };
  }, []);

  if (loading || (loading && loadingTimeout)) {
    return (
      <PageContainer>
        <div className="w-full h-full flex justify-center items-center">
          {loadingTimeout ? (
            <div className="flex flex-col items-center gap-4">
              <p className="text-white text-lg font-semibold">
                Loading Timed Out
              </p>

              <button
                className="px-4 py-2 rounded-lg bg-(--p-green) text-white hover:bg-(--p-h-green)"
                onClick={reset}
              >
                Reload Page
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <p className="text-white text-lg font-semibold">Loading...</p>
            </div>
          )}
        </div>
      </PageContainer>
    );
  }

  return (
    <DisplayContext.Provider
      value={{
        width,
        height,
        isSmallScreen,
        setWidth,
        setHeight,
        setIsSmallScreen,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
