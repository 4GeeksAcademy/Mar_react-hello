import React from "react";

export const Jumbotrom = () => {
  return (
    <div className="container my-5">
      <div className="p-5 bg-light rounded-3">
        <h1 className="text-body-emphasis text-secondary">Echoes of the Tide</h1>
        <p className="col-lg-8 fs-5 text-muted"> <i>
        Here lies my collection of sea-dreams and ocean-whispers, a place where the tides carry stories to those who dare to listen. It’s a sanctuary for all the words the waves have gifted me, preserved here in the endless ebb and flow of imagination, waiting for hearts to drift. </i> </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button
            className="d-inline-flex align-items-center btn btn-info text-light btn-lg px-4 rounded-pill"
            type="button"
          >
            Dive In
          </button>
          <button
            className="btn btn-outline-info opacity-50 btn-lg px-4 rounded-pill"
            type="button"
          >
            Set Sail
          </button>
        </div>
      </div>
    </div>
  );
};
