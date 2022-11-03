import { useEffect, useState } from "react";
import axios from "axios";

import OutgoingSummaryDetails from "../components/outgoing/OutgoingSummaryDetails";
import OutgoingEditForm from "../components/outgoing/OutgoingEditForm";

const OutgoingSummary = () => {
  const [outgoing, setOutgoing] = useState();
  const [editDetails, setEditDetails] = useState(null);

  useEffect(() => {
    axios.get("/summary/outgoing").then((res) => {
      console.log(res);
      if (res.status === 200) {
        setOutgoing(res.data);
      } else {
        alert(res.data.error);
      }
    });
  }, []);
  console.log(outgoing);
  return (
    <div className="home">
      <div className="incoming">
        {outgoing &&
          outgoing?.map((outgoing) => (
            <OutgoingSummaryDetails
              key={outgoing._id}
              outgoing={outgoing}
              setOutgoing={setOutgoing}
              setEditDetails={setEditDetails}
            />
          ))}
      </div>
      {editDetails && (
        <OutgoingEditForm
          editDetails={editDetails}
          setEditDetails={setEditDetails}
          setOutgoing={setOutgoing}
        />
      )}
    </div>
  );
};
export default OutgoingSummary;
