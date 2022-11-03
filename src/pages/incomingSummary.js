import { useEffect } from "react";
import { useIncomingContext } from "../hooks/useIncomingContext";

import IncomingSummaryDetails from "../components/incoming/IncomingSummaryDetails";
const IncomingSummary = () => {
  const { incoming, dispatch } = useIncomingContext();

  useEffect(() => {
    const fetchIncoming = async () => {
      const response = await fetch("summary/incoming");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_INCOMING", payload: json });
      }
    };
    fetchIncoming();
  }, []);

  return (
    <div className="home">
      <div className="incoming">
        {incoming &&
          incoming.map((incoming) => (
            <IncomingSummaryDetails key={incoming._id} inc={incoming} />
          ))}
      </div>
    </div>
  );
};
export default IncomingSummary;
