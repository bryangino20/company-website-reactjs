import video from "../video.mp4";

function Header() {
  return (
    <header>
      <video src={video} loop autoPlay muted></video>
      <h1>American Outdoor Living</h1>
      <h2 className="subheader">
        Servicing southern Nevada, AOL is a family-owned and operated business dedicated to providing exceptional landscaping services. 
        We pride ourselves on being customer-centric, ensuring every project exceeds expectations.
      </h2>
      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
