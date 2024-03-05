import "../styles/pages/Contacts.css"

const Contacts = () => {
  return (
    <div className="contacts container">
      <div className="contacts-map">
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D0%A5%D0%B0%D1%80%D0%B8%D1%82%D0%BE%D0%BD%D1%8C%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA,%209+(annurclothes)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
      <div className="contacts-info">
        <div className="contacts-first">
          <h2 className="contacts-address">
            Москва, Большой Харитоньевский переулок, 9
          </h2>
          <p className="contacrs-phone">+7 (916) 955-93-83</p>
          <p className="contacts-email">annurclothes@mail.ru</p>
        </div>
        <div className="contacts-second">
          <h2 className="contacts-address">
            Москва, Большой Харитоньевский переулок, 9
          </h2>
          <p className="contacrs-phone">+7 (916) 955-93-83</p>
          <p className="contacts-email">annurclothes@mail.ru</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
