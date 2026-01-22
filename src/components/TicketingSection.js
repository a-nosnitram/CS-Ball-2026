import "./TicketingSection.css";

function TicketingSection() {
  return (
    <section className="ticketing-section" data-logo-color="cream">
      <div className="ticketing-content">
        <h2 className="ticketing-title">Ticketing Information</h2>
        <div className="ticket-info">
          <div className="ticket-tier">
            <h3>Regular</h3>
            <p className="price">£45</p>
            <p className="details">Limited fhjgsudfgn</p>
            <p className="details">Available on dfhfhd</p>
          </div>
          <div className="ticket-tier">
            <h3>Afterparty</h3>
            <p className="price">£30</p>
            <p className="details">General admission</p>
            <p className="details">Available from DATE</p>
          </div>
          <div className="ticket-tier">
            <h3>After-Afterparty</h3>
            <p className="price">£20</p>
            <p className="details">hdfhdfh</p>
            <p className="details">Only access to afterparty</p>
            <p className="details">Complimentary drinks</p>
          </div>
        </div>
        <div className="ticket-note">
          {/* <p>All tickets include frhfrhng</p> */}
          <p>Dress code: Formal attire with masks encouraged</p>
        </div>
      </div>
    </section>
  );
}

export default TicketingSection;
