function closeModal() {
  document.getElementById("Mymodal-1").classList.add("d-none");
}
const signInModal = () => {
  if (show == true) {
    return (
      <section id="Mymodal-1" className="d-none">
        <div className="home-modal d-flex justify-content-center">
          <div className="modal-content p-4 font-regular">
            <div className="d-flex justify-content-end">
              <button
                onclick={closeModal}
                id="close-btn"
                className="font-size-35 vio-font-color close-modal"
              >
                x
              </button>
            </div>
            <p className="fw-bold font-color-gray text-center font-size-35">
              Sign Up
            </p>
            <p className="mt-5 font-color-gray text-center font-size-20">
              Create an account
            </p>
            <div className="d-flex justify-content-center">
              <div className="modal-buttons">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="modal-btn mt-3" id="email-btn">
                      <button>
                        <svg
                          className="btn-svg"
                          id="icon-email"
                          viewBox="0 0 29.78 26.78"
                        >
                          <title>icon-email</title>
                          <path d="M1.44,6.84,13.78,17.66a1.75,1.75,0,0,0,2.22,0L28.34,6.84A3.41,3.41,0,0,0,29.78,4.3V4.23A4.26,4.26,0,0,0,25.53,0H4.26A4.26,4.26,0,0,0,0,4.23V4.3A3.56,3.56,0,0,0,1.44,6.84Z" />
                          <path d="M28.18,11.68l-9.84,8.63a5.31,5.31,0,0,1-6.9,0L1.6,11.68c-.88-.77-1.6-.45-1.6.72V22.55a4.26,4.26,0,0,0,4.26,4.24H25.53a4.26,4.26,0,0,0,4.25-4.24V12.4C29.78,11.23,29.06,10.91,28.18,11.68Z" />
                        </svg>
                        Sign up with Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center mt-5">
              <li className="font-color-gray fw-bolder">
                Already have an account?
              </li>
              <li>
                <button className="details-btn">
                  <a href>Log in</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
};

export default signInModal;
