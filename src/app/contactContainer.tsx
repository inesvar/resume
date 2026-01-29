import { you } from "./resumeData/you";
import { IS } from "./strings";

export const ContactContainer = ({}) => {
  const compactPhoneNumber = you.phoneNumber.replace(/ /g, "");
  return (
    <section className="contact">
      <h2>
        <span className="icon contact-icon inverted"></span>
        {IS.contact}
      </h2>
      <div>
        <p>🪪&nbsp;&nbsp;{you.age}</p>
        <p>📍&nbsp;&nbsp;{you.location}</p>
        <p>
          📞&nbsp;&nbsp;
          <a href={`tel:${compactPhoneNumber}`}>{you.phoneNumber}</a>
        </p>
        <p>
          📭&nbsp;&nbsp;<a href={`mailto:${you.email}`}>{you.email}</a>
        </p>
      </div>
    </section>
  );
};
