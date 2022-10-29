import React, { Component } from "react";

export const Footer = () => (
  <div className="container-fluid bg-footer mt-5">
    <footer className="py-5 bg-footer">
      <div className="row bg-footer justify-content-center">
        <div className="col-6 col-md-2 mb-3 bg-footer">
          <h5 className="bg-footer">Información</h5>
          <ul className="nav flex-column bg-footer">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3 bg-footer">
          <h5 className="bg-footer">Section</h5>
          <ul className="nav flex-column bg-footer">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3 bg-footer">
          <h5 className="bg-footer">Section</h5>
          <ul className="nav flex-column bg-footer">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted bg-footer">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top bg-footer">
        <p className="bg-footer">
          &copy; 2022 Company, Inc. All rights reserved.
        </p>
        <ul className="list-unstyled d-flex bg-footer">
          <li className="ms-3 bg-footer">
            <a className="link-dark" href="#">
              <i className="fa-brands fa-twitter fs-4 bg-footer"></i>
            </a>
          </li>
          <li className="ms-3 bg-footer">
            <a className="link-dark" href="#">
              <i className="fa-brands fa-instagram fs-4 bg-footer"></i>
            </a>
          </li>
          <li className="ms-3 bg-footer">
            <a className="link-dark" href="#">
              <i className="fa-brands fa-facebook fs-4 bg-footer"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);
