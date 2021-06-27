import logo from "./../../assets/images/logo-footer.png";
const Footer = () => {
  return (
    <footer>
      <div class="footer-1 resp-d-none mt-3">
        <div class="container">
          <div class="footer-logo">
            <img class="mt-4" src={logo} alt="" />
          </div>
          <div class="row">
            <div class="col-lg-2">
              <p class="text-white fw-bold font-regular mt-3">
                ABOUT PETFINDER
              </p>
              <br />
              <ul class="list-unstyled text-white font-regular font-size-13">
                <li>About Petfinder</li>
                <br />
                <li>FAQs</li>
                <br />
                <li>Partnerships</li>
                <br />
                <li>Terms of Services</li>
                <br />
                <li>Mobile Site & Apps</li>
                <br />
                <li>Petfinder Foundation</li>
                <br />
                <li>Put Petfinder on your Site</li>
                <br />
                <li>Free Widgets & Graphics</li>
                <br />
                <li>Press</li>
                <br />
                <li>For Developers</li>
                <br />
                <li>Contact Us</li>
                <br />
                <li>Don't Sell my Personal</li>
                <br />
                <li>Information</li>
                <br />
              </ul>
            </div>
            <div class="col-lg-2">
              <p class="text-white fw-bold font-regular mt-3">PET ADOPTION</p>
              <br />
              <ul class="list-unstyled text-white font-regular font-size-13">
                <li>Dog Adoption</li>
                <br />
                <li>Cat Adoption</li>
                <br />
                <li>Other Pet Adoption</li>
                <br />
                <li>Search Adoption Organizations</li>
                <br />
                <li>Happy Tails Pet Adoption</li>
                <br />
                <li>Stories</li>
                <br />
                <li>Local Adoption Events</li>
                <br />
                <li>Shelters & Rescues</li>
                <br />
                <li>Dog Quiz</li>
                <br />
              </ul>
            </div>
            <div class="col-lg-2">
              <p class="text-white fw-bold font-regular mt-3">
                PET CARE TOPICS
              </p>
              <br />
              <ul class="list-unstyled text-white font-regular font-size-13">
                <li>Dog Care</li>
                <br />
                <li>Dog Breeds</li>
                <br />
                <li>Cat Care</li>
                <br />
                <li>Cat Breeds</li>
                <br />
                <li>All Pet Care</li>
                <br />
                <li>Pet Care Videos</li>
                <br />
                <li>Helping Pets</li>
                <br />
              </ul>
            </div>
            <div class="col-lg-2">
              <p class="text-white fw-bold font-regular mt-3">SITEMAP</p>
              <br />
              <p class="text-white fw-bold font-regular">
                PRIVACY POLICY (UPDATED)
              </p>
              <br />
              <p class="text-white fw-bold font-regular">ABOUT OUR ADS</p>
              <br />
              <p class="text-white fw-bold font-regular">
                SHELTER & RESCUE LOGIN
              </p>
              <br />
              <p class="text-white fw-bold font-regular">
                SHELTER & RESCUE REGISTRATION
              </p>
            </div>
            <div class="col-lg-4 mt-3">
              <p class="text-white font-regular">
                To get the latest on pet adoption and pet care, sign up to hear
                from us.
              </p>
              <button class="footer-button text-white font-regular fw-bold mt-5">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
        <div class="footer-icons d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-10">
                <p class="font-regular font-size-13">
                  ©2021 Petfinder.com All trademarks are owned by Société des
                  Produits Nestlé S.A., or used with permission.
                </p>
              </div>
              <div class="col-lg-2">
                <div class="social-media-icons">
                  <ul class="list-unstyled d-flex font-size-20">
                    <li class="margin-right-25">
                      <a
                        class="a-unstyled"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <span
                          aria-hidden="true"
                          data-icon="&#xea90;"
                          class="down-arrow"
                        ></span>
                      </a>
                    </li>
                    <li class="margin-right-25">
                      <a
                        class="a-unstyled"
                        href="https://twitter.com/?lang=tr"
                        target="_blank"
                      >
                        <span
                          aria-hidden="true"
                          data-icon="&#xea96;"
                          class="down-arrow"
                        ></span>
                      </a>
                    </li>
                    <li class="margin-right-25">
                      <a
                        class="a-unstyled"
                        href="https://www.instagram.com/?hl=tr"
                        target="_blank"
                      >
                        <span
                          aria-hidden="true"
                          data-icon="&#xea92;"
                          class="down-arrow"
                        ></span>
                      </a>
                    </li>
                    <li class="margin-right-25">
                      <a
                        class="a-unstyled"
                        href="https://www.youtube.com/"
                        target="_blank"
                      >
                        <span
                          aria-hidden="true"
                          data-icon="&#xea9d;"
                          class="down-arrow"
                        ></span>
                      </a>
                    </li>
                    <li class="margin-right-25">
                      <a
                        class="a-unstyled"
                        href="https://tr.pinterest.com/"
                        target="_blank"
                      >
                        <span
                          aria-hidden="true"
                          data-icon="&#xe901;"
                          class="down-arrow"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-2 mt-3">
        <div class="container">
          <div class="footer-logo d-flex justify-content-center">
            <img class="mt-4" src={logo} alt="" />
          </div>
          <p class="text-white font-regular text-center mt-4">
            To get the latest on pet adoption and pet care, sign up to hear from
            us.
          </p>
          <div class="d-flex justify-content-center">
            <button
              class="
              footer-button
              text-white
              font-regular
              fw-bold
              mt-3
              mb-4
              text-center
            "
            >
              SIGN UP
            </button>
          </div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  About Petfinder
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <a href="#">About Petfinder </a>
                  <hr />
                  <a href="#">FAQs</a>
                  <hr />
                  <a href="#"> Partnerships </a>
                  <hr />
                  <a href="#">Terms of Service</a>
                  <hr />
                  <a href="#"> Mobile Site & App</a>
                  <hr />
                  <a href="#"> Petfinder Foundation </a>
                  <hr />
                  <a href="#"> Put Petfinder On Your Site </a>
                  <hr />
                  <a href="#"> Free Widgets & Graphics </a>
                  <hr />
                  <a href="#"> Press </a>
                  <hr />
                  <a href="#"> For Developers </a>
                  <hr />
                  <a href="#"> Contact Us </a>
                  <hr />
                  <a href="#"> Do Not Sell My Personal Information</a>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Pet Adoption
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <a href="#">Dog Adoption </a>
                  <hr />
                  <a href="#"> Cat Adoption </a>
                  <hr />
                  <a href="#">Other Pet Adoption</a>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Pet care topics
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <a href="#">Dog Care</a>
                  <hr />
                  <a href="#">Dog Breeds</a>
                  <hr />
                  <a href="#">Cat Care</a>
                  <hr />
                  <a href="#">Cat Breeds</a>
                  <hr />
                  <a href="#">All Pet Care</a>
                  <hr />
                  <a href="#"> Pet Care Videos</a>
                  <hr />
                  <a href="#">Helping Pets</a>
                </div>
              </div>
            </div>
          </div>

          <hr />
        </div>
        <div class="footer-icons d-flex">
          <div class="container">
            <p class="font-regular font-size-13 text-center mt-3">
              ©2021 Petfinder.com <br />
              <br />
              All trademarks are owned by Société des Produits Nestlé S.A., or
              used with permission.
            </p>
            <div class="social-media-icons">
              <ul
                class="
                list-unstyled
                d-flex
                justify-content-center
                font-size-20
                mt-3
              "
              >
                <li class="margin-right-25">
                  <a
                    class="a-unstyled"
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      data-icon="&#xea90;"
                      class="down-arrow"
                    ></span>
                  </a>
                </li>
                <li class="margin-right-25">
                  <a
                    class="a-unstyled"
                    href="https://twitter.com/?lang=tr"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      data-icon="&#xea96;"
                      class="down-arrow"
                    ></span>
                  </a>
                </li>
                <li class="margin-right-25">
                  <a
                    class="a-unstyled"
                    href="https://www.instagram.com/?hl=tr"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      data-icon="&#xea92;"
                      class="down-arrow"
                    ></span>
                  </a>
                </li>
                <li class="margin-right-25">
                  <a
                    class="a-unstyled"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      data-icon="&#xea9d;"
                      class="down-arrow"
                    ></span>
                  </a>
                </li>
                <li class="margin-right-25">
                  <a
                    class="a-unstyled"
                    href="https://tr.pinterest.com/"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      data-icon="&#xe901;"
                      class="down-arrow"
                    ></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-3 p-3 mt-3">
        <div class="container">
          <div class="footer-logo">
            <img class="mt-4" src={logo} alt="" />
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      About Petfinder
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <a href="#">About Petfinder </a>
                      <hr />
                      <a href="#">FAQs</a>
                      <hr />
                      <a href="#"> Partnerships </a>
                      <hr />
                      <a href="#">Terms of Service</a>
                      <hr />
                      <a href="#"> Mobile Site & App</a>
                      <hr />
                      <a href="#"> Petfinder Foundation </a>
                      <hr />
                      <a href="#"> Put Petfinder On Your Site </a>
                      <hr />
                      <a href="#"> Free Widgets & Graphics </a>
                      <hr />
                      <a href="#"> Press </a>
                      <hr />
                      <a href="#"> For Developers </a>
                      <hr />
                      <a href="#"> Contact Us </a>
                      <hr />
                      <a href="#"> Do Not Sell My Personal Information</a>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Pet Adoption
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <a href="#">Dog Adoption </a>
                      <hr />
                      <a href="#"> Cat Adoption </a>
                      <hr />
                      <a href="#">Other Pet Adoption</a>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Pet care topics
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <a href="#">Dog Care</a>
                      <hr />
                      <a href="#">Dog Breeds</a>
                      <hr />
                      <a href="#">Cat Care</a>
                      <hr />
                      <a href="#">Cat Breeds</a>
                      <hr />
                      <a href="#">All Pet Care</a>
                      <hr />
                      <a href="#"> Pet Care Videos</a>
                      <hr />
                      <a href="#">Helping Pets</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <p class="text-white font-regular">
                To get the latest on pet adoption and pet care, sign up to hear
                from us. <br />
                <button class="footer-button text-white font-regular fw-bold mt-3 mb-4">
                  SIGN UP
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
