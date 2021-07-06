import logo from "./../../../src/assets/images/logo.png";
import React, { useEffect, useState } from "react";
import SignInModal from "../elements/SignInModal";
import LoginModal from "../elements/LoginModal";

const Header = () => {
  const [openSection, showSection] = useState(false);
  const [openSection2, showSection2] = useState(false);
  const [openSearch, showSearch] = useState(false);
  const [openSignInModal, openSignIn] = useState(false);
  return (
    <header>
      {openSignInModal && <SignInModal openSignIn={!openSignInModal} />}
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="navbar-logo cursor-pointer" src={logo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="container">
                <div className="row mt-4">
                  <ul className="col-lg-7 navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="col-lg-2 nav-item font-regular nav-hover fw-bolder font-size-13">
                      <button
                        className="nav-btns btn-decoration fw-bolder"
                        id="breed-btn"
                        onClick={() => {
                          showSection(!openSection);
                          showSection2(false);
                        }}
                      >
                        BREEDS
                        <span
                          aria-hidden="true"
                          data-icon=""
                          className="down-arrow"
                        />
                      </button>
                    </li>
                    <li
                      className="
            nav-item
            margin-left-15
            font-regular
            nav-hover
            fw-bolder
            font-size-13
          "
                    >
                      <button
                        className="nav-btns btn-decoration fw-bolder"
                        id="res-btn"
                        onClick={() => {
                          showSection2(!openSection2);
                          showSection(false);
                        }}
                      >
                        RESOURCES
                        <span
                          aria-hidden="true"
                          data-icon=""
                          className="down-arrow"
                        />
                      </button>
                    </li>
                    <li>
                      {" "}
                      <input
                        className={
                          openSearch === false ? "d-none" : "nav-input"
                        }
                        type="text"
                      />
                    </li>
                  </ul>
                  <ul className="col-lg-5 list-unstyled d-flex">
                    <li>
                      <button
                        className="btn-decoration"
                        onClick={() => {
                          showSearch(!openSearch);
                        }}
                      >
                        <span
                          aria-hidden="true"
                          data-icon=""
                          className="down-arrow margin-left-2r font-size-20 font-color-gray"
                        />
                      </button>
                    </li>
                    <li>
                      <button className="btn-decoration">
                        <span
                          aria-hidden="true"
                          data-icon=""
                          className="down-arrow margin-left-2r font-size-20 font-color-gray"
                        />
                      </button>
                    </li>
                    <li
                      className="
            margin-left-15
            font-size-22 font-color-gray
            margin-left-2r
          "
                    >
                      <button
                        className="btn-decoration fw-bolder nav-hover"
                        onClick={() => {
                          openSignIn(!openSignInModal);
                        }}
                      >
                        Sign up
                      </button>
                    </li>
                    <li className="margin-left-15 font-size-22 font-color-gray">
                      <button
                        id="signup-m"
                        className="fw-bolder btn-decoration nav-hover"
                      >
                        Log in
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id="nav-breed" className={openSection === false ? "d-none" : ""}>
        <div className="breed-nav-section">
          <div className="row breed-nav">
            <div className="col-lg-3 breed-btn" />
            <div className="col-lg-3 breed-btn">
              <button className="find-a-pet-menu btn-decoration font-regular nav-svg">
                <svg id="icon-dog" viewBox="0 0 101.8 87.7">
                  <circle cx="21.8" cy="16.3" r="2.7" />
                  <path d="M100.1 27.8C81 27.8 81 44.5 81 50v26.8c0 2.9-2.3 5.2-5.2 5.2h-.6c-2.9 0-5.2-2.3-5.2-5.2v-8.5c0-2.6-1.2-5.2-3.1-6.8-1.6-1.4-3.6-2-5.7-1.7l-18.1 2.7c-5.1.9-8.2 4.1-8.2 8.5v5.9c0 2.9-2.3 5.2-5.2 5.2h-.6c-2.9 0-5.2-2.3-5.2-5.2V35.7H25c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7H14.1c-6.6 0-9.2-6.4-9.4-6.7-1.7-4.1-1.5-5.7-1.4-6.1.4-.3 2-1.2 7.1-2.2 1.7-.4 3-1.3 4-2.9 1.2-1.7 2.5-3.6 2.8-3.9C19.1 8.3 21 7.4 24.9 7c0 0 3.9-.3 7.6 0h.5l7.1-1.4c1.5-.3 1.7-.1 2.5.9l.1.2c2 2.5 5.7 8.1 6.9 13.3-.4.5-2.4 1.4-4.9 1-2.1-.3-5.8-1.6-7.1-7.1-.2-.9-1.1-1.4-2-1.2s-1.4 1.1-1.2 2c1.4 5.8 5.1 8.7 9 9.5v3.4c0 5.6 3.2 8.9 8.9 8.9h9.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7h-9.2c-3.8 0-5.5-1.7-5.5-5.5v-3.1c.6 0 1.2-.1 1.7-.2 3.2-.7 5-2.6 4.5-4.7-1.3-5.4-5-11.4-7.7-14.8l-.1-.1C44 3.2 42.8 2 39.5 2.6L32.7 4c-4-.4-7.8 0-8 0-4.8.5-7.5 1.8-9.9 4.6-.4.5-2.4 3.3-3 4.1-.6.9-1.2 1.3-2 1.5-4.9 1-7.9 2.2-8.9 3.3-.9.9-1.7 3.2.8 9.5.1.4 3.6 8.7 12.4 8.7h6.4v41.1c0 4.7 3.8 8.5 8.5 8.5h.6c4.7 0 8.5-3.8 8.5-8.5v-5.9c0-3.7 3.4-4.9 5.4-5.2l18-2.6c1.3-.2 2.4.4 3 .9 1.2 1 1.9 2.7 1.9 4.3v8.5c0 4.7 3.8 8.5 8.5 8.5h.6c4.7 0 8.5-3.8 8.5-8.5V50c0-8.8 1.8-18.9 15.8-18.9.9 0 1.7-.7 1.7-1.7s-.4-1.6-1.4-1.6z" />
                </svg>
                <span className="text-white">DOG BREEDS</span>
              </button>
            </div>
            <div className="col-lg-3 breed-btn">
              <button className="find-a-pet-menu btn-decoration font-regular nav-svg">
                <svg id="icon-cat" viewBox="0 0 101.8 87.7">
                  <path d="M34.1 31.4c-.8 0-1.4-.5-1.6-1.3-.2-.9.4-1.7 1.3-1.9l10.9-2.1c.9-.2 1.7.4 1.9 1.3s-.4 1.7-1.3 1.9l-10.9 2.1h-.3zM45 39h-.3l-10.9-2.2c-.9-.2-1.4-1-1.3-1.9.2-.9 1-1.4 1.9-1.3l10.9 2.1c.9.2 1.4 1 1.3 1.9-.2.9-.8 1.4-1.6 1.4z" />
                  <circle cx="26.6" cy="25.8" r="2.2" />
                  <path d="M87 58.2c-.8-.5-1.8-.3-2.2.5-.5.8-.3 1.8.5 2.2 3.5 2.3 5.6 6.1 5.6 10.2 0 6.7-5.5 12.2-12.2 12.2H22.9v-2.6c0-.7.6-1.3 1.3-1.3h.9c3.6-.1 4-3.2 4-4.5v-29c.6.1 1.1.1 1.6.1h.5c.9 0 1.6-.8 1.5-1.7 0-.9-.8-1.6-1.7-1.6-.4 0-9.7.3-12.8-8.2-.1-.3-.4-1.4 0-2.2.1-.3.3-.6 1.1-.9.6-.2 1.1-.9 1.1-1.5 0-.1-.1-7.7 4.8-12.3l.1-.1s2.3-2.5 6.9-4h.1s.1 0 .2-.1c0 0 .1 0 .1-.1.1 0 .1-.1.1-.1l.1-.1.1-.1.1-.1.1-.1s0-.1.1-.1c0-.1 0-.1.1-.2V11.6l-1.2-5.4c1.3.3 3 1 4.6 2.2.1.1.1.1.2.1.1.5.3.6.5.6.9.2 1.7-.3 2-1.2l.7-3c1.9 1.2 5.5 4.3 8.4 12.2v.1s.1.2.2.3l.1.1s0 .1.1.1c3.2 3.2 5 7.5 5 12 0 4.4-1.7 8.6-4.8 11.8v.1c-.4.3-.6.8-.6 1.3 0 4.9 4 8.9 8.9 8.9h.6c7.9 0 14.3 6.4 14.3 14.3v9.4c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-9.4c0-9.7-7.9-17.6-17.6-17.6h-.6c-2.9 0-5.3-2.2-5.6-5 3.5-3.7 5.5-8.6 5.5-13.8 0-5.3-2-10.2-5.7-14-4.9-13-11.9-14.5-12.2-14.6-.8-.2-1.7.4-1.9 1.2l-.6 2.6c-3.3-1.9-6.6-2-6.8-2-.5 0-1 .2-1.3.6-.3.4-.4.9-.3 1.4l1.4 6.3c-4.2 1.7-6.4 3.9-6.8 4.3-4.9 4.5-5.7 11.1-5.9 13.6-.8.5-1.5 1.2-1.9 2.1-1 2.1-.1 4.4 0 4.6 2.1 5.7 6.6 8.4 10.6 9.6V75c0 1.3-.3 1.3-.9 1.3h-.7c-2.5 0-4.5 2-4.5 4.5V85c0 .9.7 1.6 1.6 1.6h57.3c8.5 0 15.4-6.9 15.4-15.4 0-5.3-2.6-10.1-7-13z" />
                </svg>
                <span className="text-white margin-left-5">CAT BREEDS</span>
              </button>
            </div>
            <div className="col-lg-3 breed-btn" />
          </div>
        </div>
      </div>
      <div
        id="nav-resources"
        className={openSection2 === false ? "d-none" : ""}
      >
        <div className="resources-section resources row font-regular">
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <button className="text-white btn-decoration">
              ABOUT PET ADOPTION
            </button>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <button className="text-white btn-decoration">DOG CARE</button>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <button className="text-white btn-decoration">CAT CARE</button>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <button className="text-white btn-decoration">ALL PET CARE</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
