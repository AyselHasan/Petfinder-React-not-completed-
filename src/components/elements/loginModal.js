function closeModal2() {
  document.getElementById("Mymodal-2").classList.add("d-none");
}

const loginModal = () => {
  return (
    <section id="Mymodal-2" className="d-none">
      <div className="home-modal d-flex justify-content-center">
        <div className="modal-content p-4 font-regular">
          <div className="d-flex justify-content-end">
            <button
              onclick={closeModal2}
              id="close-btn"
              className="font-size-35 vio-font-color close-modal"
            >
              x
            </button>
          </div>
          <p className="fw-bold font-color-gray text-center font-size-35">
            Log In
          </p>
          <div className="d-flex justify-content-center">
            <div className="login-forms mt-3">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <input
                    className="form-control form-control-lg mt-3 login-input"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-12 col-md-12">
                  <input
                    className="form-control form-control-lg mt-3 login-input"
                    type="text"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button className="login-btn mt-4 text-white fw-bolder mb-3">
                Log In
              </button>
              <p className="text-center font-color-gray fw-bolder">
                or log in with
              </p>
              <div className="row">
                <div className="col-lg-6 col-xl-12">
                  <div className="modal-btn mt-3" id="fb-btn">
                    <button>
                      <svg
                        className="btn-svg"
                        id="icon-facebookLogo"
                        viewBox="0 0 58 58"
                      >
                        <path d="M53.85 0H3.15A3.15 3.15 0 0 0 0 3.15v50.7A3.15 3.15 0 0 0 3.15 57h27.3V35H23v-8.67h7.41V20c0-7.37 4.49-11.38 11.06-11.38a62.15 62.15 0 0 1 6.68.38v7.69h-4.54c-3.57 0-4.26 1.69-4.26 4.18v5.5h8.55L46.79 35h-7.44v22h14.5A3.15 3.15 0 0 0 57 53.85V3.15A3.15 3.15 0 0 0 53.85 0z" />
                      </svg>
                      Facebook
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-12">
                  <div className="modal-btn mt-3" id="google-btn">
                    <button>
                      <svg
                        className="btn-svg"
                        id="icon-googleLogo"
                        viewBox="0 0 18 18"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                            fill="#4285F4"
                          />
                          <path
                            d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                            fill="#34A853"
                          />
                          <path
                            d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                            fill="#EA4335"
                          />
                        </g>
                      </svg>
                      Google
                    </button>
                  </div>
                </div>
              </div>
              <ul className="list-unstyled d-flex justify-content-center mt-5">
                <li className="font-color-gray fw-bolder">Need an account?</li>
                <li>
                  <button className="details-btn">
                    <a href>Sign up</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default loginModal;
