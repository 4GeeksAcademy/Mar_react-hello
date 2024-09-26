import React from "react";

export const Jumbotrom = () => {
  return (
    <div className="container my-5">
      <div className="p-5 bg-light rounded-3">
        <h1 className="text-body-emphasis">Jumbotron with icon</h1>
        <p className="col-lg-8 fs-5 text-muted">
          This is a custom jumbotron featuring an SVG image at the top, some
          longer text that wraps early thanks to a responsive{" "}
          <code>.col-*</code> className, and a customized call to action.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button"
          >
            Call to action
          </button>
          <button
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
            type="button"
          >
            Secondary link
          </button>
        </div>
      </div>
    </div>
  );
};
