const incoming = ({ inc }) => {
  return (
    <div className="incomming-details">
      <h4> {inc.subject}</h4>
      <p>
        <strong>Sender: </strong>
        {inc.senderOffice}
      </p>
      <p>{inc.createdAt}</p>
    </div>
  );
};
export default incoming;
