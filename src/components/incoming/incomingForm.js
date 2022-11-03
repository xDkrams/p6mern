import { useState } from "react";
import { useIncomingContext } from "../../hooks/useIncomingContext";

const IncomingForm = () => {
  //state
  const { dispatch } = useIncomingContext();
  const [subject, setSubject] = useState("");
  const [subjectType, setSubjectType] = useState("");
  const [subjectContentType, setSubjectContentType] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderOffice, setSenderOffice] = useState("");
  const [icd, setIcd] = useState("");
  const [deadline, setDeadline] = useState("");
  const [dateReceived, setDateReceived] = useState("");
  const [initialAction, setInitialAction] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIcd("");
    setDeadline("");
    setDateReceived("");

    const incoming = {
      icd,
      subject,
      subjectType,
      subjectContentType,
      senderName,
      senderOffice,
      dateReceived,
      deadline,
      initialAction,
    };

    const response = await fetch("/home/incoming", {
      method: "POST",
      body: JSON.stringify(incoming),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setSubject("");
      setSubjectType("");
      setSubjectContentType("");
      setSenderName("");
      setSenderOffice("");
      setInitialAction("");
      setError(null);
      console.log("new data added", json);
      dispatch({ type: "SET_NEW_INCOMING", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3> Add new Incoming Document/Request </h3>
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

      <label>Content Type:</label>
      <input
        type="text"
        onChange={(e) => setSubjectContentType(e.target.value)}
        value={subjectContentType}
      />

      <label>Sender Name: </label>
      <input
        type="text"
        onChange={(e) => setSenderName(e.target.value)}
        value={senderName}
      />

      <label> Office:</label>
      <input
        type="text"
        onChange={(e) => setSenderOffice(e.target.value)}
        value={senderOffice}
      />

      <label>Initial Action</label>
      <input
        type="text"
        onChange={(e) => setInitialAction(e.target.value)}
        value={initialAction}
      />

      <button>Add Document/Request</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default IncomingForm;
