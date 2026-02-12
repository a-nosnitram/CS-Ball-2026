import "./TicketingSection.css";

function TicketingSection() {
  return (
    <section className="ticketing-section" data-logo-color="cream">
      <div className="ticketing-content">
        <h2 className="ticketing-title">Ticketing Information</h2>
        <div className="ticket-info">
          <div className="ticket-tier">
            <div className="ticket-tier-col1">
              <h3>Early Bird</h3>
              <p className="price">£40.5</p>
            </div>
            <div className="ticket-tier-col2">
              <p className="details">
                Dinner + Afterparty <br />
                Limited Availability, <br />
                get it while you can!
              </p>
              <p className="details">Drop on Feb 20, 12pm</p>
            </div>
          </div>
          <div className="ticket-tier">
            <div className="ticket-tier-col1">
              <h3>Dinner</h3>
              <p className="price">£45.5</p>
            </div>
            <div className="ticket-tier-col2">
              <p className="details">
                Dinner + Afterparty <br />
                Includes: three-course meal,
                <br /> wine, and the after-party!
              </p>
              <p className="details">Drop on Feb 27, 12pm</p>
            </div>
          </div>
          <div className="ticket-tier">
            <div className="ticket-tier-col1">
              <h3>Afterparty</h3>
              <p className="price">£20.5</p>
            </div>
            <div className="ticket-tier-col2">
              <p className="details">
                Includes: ceilidh, DJ, <br /> and photography all night!
              </p>
              <p className="details">Drop on Feb 27, 12pm</p>
            </div>
          </div>
        </div>
        <div className="ticket-note">
          <p>Dress code: Formal attire with masks encouraged</p>
        </div>
      </div>
    </section>
  );
}

export default TicketingSection;
