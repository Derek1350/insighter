
import './Form.css'

export default function Form(){
    return (
      <>
        <div className="form-main-container">
          <div className="form-upper">
              <div className="form-left-header form-border">
                <div className="add-social-account-icon">
                  <ion-icon name="add-outline"></ion-icon>
                </div>
                <div className="form-left-connected-platform"></div>
              </div>
              <div className="form-left-descp form-border">
                <textarea className="form-left-descp-input" placeholder="It's time to create your next best post"/>
              </div>
          </div>
          <div className="form-lower">
            <div className="form-footer">
              <div className="form-left-functions">
                <div className="footer-func-icon func-add-image form-on-focus">
                  <ion-icon name="image-outline"></ion-icon>
                </div>
                <div className="footer-func-icon func-add-location form-on-focus">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <div className="footer-func-icon func-insta-preview form-on-focus">
                  <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div className="footer-func-icon func-yt-settings form-on-focus">
                  <ion-icon name="logo-youtube"></ion-icon>
                </div>
                <div className="footer-func-icon func-add-hashtags form-on-focus">
                  {/* <i className="fas fa-solid fa-hashtag"></i> */}
                  <h1 className="hashtag-logo" style={{color:"white"}}>#</h1>
                </div>
                <div className="footer-func-icon func-add-emoji form-on-focus">
                  <ion-icon name="happy-outline"></ion-icon>
                </div>
              </div>
              <div className="form-right-post-btn">
                  Post Now
              </div>
            </div>
          </div>
        </div>
      </>
    );
}