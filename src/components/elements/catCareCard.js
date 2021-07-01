import image from "./../../assets/images/breedcard1.jpg";

const catCareCard = () => {
  return (
    <div className="pc-card res-font-size">
      <div className="pccards-heading p-5 res-padding-0 res-margin-1 container">
        <p className="res-font res-margin-left">DOG HEALTH</p>
        <hr />
      </div>
      <div className="pc-card-body ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-12">
              <div className="img-holder">
                <img className="img-size" src={image} alt />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pc-content">
                <ul className="list-unstyled">
                  <li className="vio-font-color fw-bolder res-margin">
                    Understanding Pet Food Ingredients
                  </li>
                  <li className="mt-2 res-margin">
                    Pet food ingredients and pet nutrition in general can be
                    confusing for pet owners, but by-products...
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pc-details res-margin">
                <ul className="list-unstyled vio-font-color">
                  <li className="mb-2">
                    <a className="card-details" href>
                      Age-Related Health Problems by Breed
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="card-details" href>
                      Why Neuter Your Dog?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="card-details" href>
                      Angel Pets: Treating Pets with
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="card-details" href>
                      Chronic Health Conditions
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="card-details" href>
                      Bone Cancer in Dogs: Introduction
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="card-details" href>
                      More About Dog Health
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default catCareCard;
