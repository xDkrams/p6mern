import { IncomingContext } from "../Context/IncomingContext";
import { useContext } from "react";

export const useIncomingContext = () => {
  const context = useContext(IncomingContext);

  if (!context) {
    throw Error(
      "useIncomingContext must be used inside an IncomingContextProvider"
    );
  }

  return context;
};
