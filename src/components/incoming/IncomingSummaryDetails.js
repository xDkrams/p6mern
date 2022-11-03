import { useIncomingContext } from "../../hooks/useIncomingContext";

const IncomingSummaryDetails = ({ inc }) => {
  const { dispatch } = useIncomingContext();

  const handleClick = async () => {
    const response = await fetch("/summary/incoming/" + inc._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_INCOMING", payload: json });
    }
  };
  return (
    <div className="incomming-details">
      <h4> {inc.subject}</h4>
      <p>
        <strong>ICD: </strong>
        {inc.icd}
      </p>
      <p>
        <strong>ID: </strong>
        {inc._id}
      </p>
      <p>
        <strong>SUBJECT TYPE: </strong>
        {inc.subjectType}
      </p>
      <p>
        <strong>CONTENT TYPE: </strong>
        {inc.contentType}
      </p>
      <p>
        <strong>SENDER NAME: </strong>
        {inc.senderName}
      </p>
      <p>
        <strong>SENDER OFFICE: </strong>
        {inc.senderOffice}
      </p>
      <p>
        <strong>DEADLINE: </strong>
        {inc.deadline}
      </p>
      <p>{inc.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};
export default IncomingSummaryDetails;
