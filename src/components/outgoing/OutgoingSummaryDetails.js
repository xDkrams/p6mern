import { useIncomingContext } from "../../hooks/useIncomingContext";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

const OutgoingSummaryDetails = ({ inc }) => {
  const { dispatch } = useIncomingContext();

  const handleClick = async () => {
    const response = await fetch("/summary/outgoing/" + inc._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_OUTGOING", payload: json });
    }
  };
  return (
    <div className="incomming-details">
      <h4> {inc?.subject}</h4>
      <p>
        <strong>OGD: </strong>
        {inc?.ogd}
      </p>
      <p>
        <strong>ID: </strong>
        {inc?._id}
      </p>
      <p>
        <strong>SUBJECT TYPE: </strong>
        {inc?.subjectType}
      </p>
      <p>
        <strong>CONTENT TYPE: </strong>
        {inc?.dateReleased}
      </p>
      <p>
        <strong>SENDER NAME: </strong>
        {inc?.transactionType}
      </p>

      <p>{inc?.createdAt}</p>
      <span id="delete" onClick={handleClick}>
        <AiTwotoneDelete />
      </span>

      <span id="edit">
        <AiFillEdit />
      </span>
    </div>
  );
};
export default OutgoingSummaryDetails;
