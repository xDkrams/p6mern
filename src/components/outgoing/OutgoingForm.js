import { useEffect, useState } from "react";
import { useIncomingContext } from "../../hooks/useIncomingContext";
import axios from "axios";

const OutgoingForm = ({ outgoing, setOutgoing }) => {
  //state
  const { dispatch } = useIncomingContext();
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
    axios.get("/summary/outgoing").then((res) => {
      console.log(res.data);
    });
    axios.get("/summary/incoming").then((res) => {
      console.log(res.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFinalAction("");
    setOgd("");
    setIcd("");
    setDateReleased("");

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
      .post("http://localhost:8080/home/outgoing/", outgoingData)
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
          });
        } else {
          alert(res.data.error);
        }
      });
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3> Add new Outgoing Document </h3>
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

      <button>Add Document </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default OutgoingForm;
