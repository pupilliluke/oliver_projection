import React from 'react';

const AdSection = () => {
  return (
    <section className="pb-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="place_ad_body my-3">
              <div className="row">
                <div className="col-md-6 py-2 d-flex align-items-center">
                  <div className="ad_left d-flex align-items-center">
                    <h5><a href="">Want to Remove Ads?</a></h5>
                  </div>
                </div>
                <div className="col-md-6 py-2 d-flex align-items-center">
                  <div className="ad_right d-flex align-items-center">
                    <h5>Sign up to <a href="">Oliver Premium</a> and get no ads, research applications, discounts and more!</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSection;