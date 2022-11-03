import { useEffect } from "react";
import { useIncomingContext } from "../hooks/useIncomingContext";

// compo
import IncomingDetails from "../components/incoming/incomingDetails";
import IncomingForm from "../components/incoming/incomingForm";

const Home = () => {
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
            <IncomingDetails key={incoming._id} inc={incoming} />
          ))}
      </div>
      <IncomingForm />
    </div>
  );
};
export default Home;
