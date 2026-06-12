import { createContext, useContext } from "react";

export type DisplayContextType = {
    width: number | null;
    height: number | null;

    isSmallScreen: boolean | null;

    setWidth: (n: number) => void;
    setHeight: (n: number) => void;


    setIsSmallScreen: (b: boolean) => void;
};

export const DisplayContext = createContext<
    DisplayContextType | undefined
>(undefined);

export const useDisplayContext = () => {
    const context = useContext(DisplayContext);

    if (!context) {
        throw new Error(
            "useDisplayContext must be used within a DisplayContextProvider",
        );
    }

    return context;
};