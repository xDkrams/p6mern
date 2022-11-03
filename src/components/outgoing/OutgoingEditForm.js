import { useEffect, useState } from "react";
import axios from "axios";

const OutgoingEditForm = ({
  outgoing,
  setOutgoing,
  editDetails,
  setEditDetails,
}) => {
  //state

  const [subject, setSubject] = useState("");
  const [subjectType, setSubjectType] = useState("");
  const [dateReleased, setDateReleased] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [icdDrop, setIcdDrop] = useState([]);
  const [icd, setIcd] = useState("");
  const [ogd, setOgd] = useState("");
  const [error, setError] = useState(null);
  const [finalAction, setFinalAction] = useState("");

  useEffect(() => {
    setSubject(editDetails?.subject);
    setSubjectType(editDetails?.subjectType);
    setTransactionType(editDetails?.subjectType);
    setDateReleased(editDetails?.dateReleased);
    setFinalAction(editDetails?.finalAction);
    setOgd(editDetails?.ogd);
    setIcd(editDetails?.icd);
  }, [editDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editDetails && editDetails._id !== "") {
      setOgd("");
      setIcd("");

      const outgoingData = {
        ogd,
        icd,
        subject,
        subjectType,
        dateReleased,
        transactionType,
        finalAction,
      };

      axios
        .put(
          `http://localhost:8080/summary/outgoing/${editDetails?._id}`,
          outgoingData
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            axios.get("/summary/outgoing").then((res) => {
              console.log(res);
              if (res.status === 200) {
                setOutgoing(res.data);
              } else {
                alert(res.data.error);
              }
              setFinalAction("");
              setOgd("");
              setIcd("");
              setDateReleased("");
              setSubject("");
              setSubjectType("");
              setTransactionType("");
              setEditDetails(null);
            });
          } else {
            alert(res.data.error);
          }
        });
    } else {
      alert("NO item selected");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3> Edit Outgoing Document </h3>
      <label>Subject :</label>
      <input
        type="text"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <label>Subject Type:</label>
      <input
        type="text"
        onChange={(e) => setSubjectType(e.target.value)}
        value={subjectType}
      />
      <label>Transaction Type:</label>
      <input
        type="text"
        onChange={(e) => setTransactionType(e.target.value)}
        value={transactionType}
      />
      <label>Date Released:</label>
      <input
        type="text"
        onChange={(e) => setDateReleased(e.target.value)}
        value={dateReleased}
      />
      <label>Final Action:</label>
      <input
        type="text"
        onChange={(e) => setFinalAction(e.target.value)}
        value={finalAction}
      />

      <button>Edit Document </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default OutgoingEditForm;
