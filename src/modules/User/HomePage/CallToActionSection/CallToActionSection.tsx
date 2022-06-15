import "./CallToActionSection.scss";

function CallToActionSection() {
  return (
    <div>
      <div className="subcribe-section bg-with-black">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="subcribe-head">
                <h2>Do you need mo tips</h2>
                <p>Sign up free and get the lastest tips</p>
                <form className="form-section">
                  <input placeholder="Your Email" name="email" type="email" />
                  <input name="subcribe" type="submit" value="Yes, I Want" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;
