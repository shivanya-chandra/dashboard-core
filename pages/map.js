import IconElem from "../components/iconElem";

export default function Map() {
  return (
    <div className="mapPage">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14017.958863383856!2d77.3439278!3d28.5550538!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1629117419355!5m2!1sen!2sin"
        width="1920"
        height="1080"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        className="mapPage__embed"
      ></iframe>
      <span className="mapPage__locationBox">Turn left in 800m<br/>Core Street</span>
      <span className="mapPage__music">Playing now<br/>Godzilla - Eminem</span>
      <span className="mapPage__ac">AC: 18° C<br/>Outside: 30° C</span>
      <IconElem className="mapPage__embed"/>
    </div>
  );
}
