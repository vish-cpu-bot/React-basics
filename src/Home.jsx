import React, { useState } from "react";

export const Home = () => {
  const [modal, setModal] = useState({
    fname: "",
    password: "",
    email: "",
  });

  const items = JSON.parse(localStorage.getItem("popup"));
  const onModalSubmit = () => {
    if (items) {
      items.push(modal);
      localStorage.setItem("popup", JSON.stringify(items));
    } else {
      localStorage.setItem("popup", JSON.stringify([modal]));
    }

    setModal({
      fname: "",
      password: "",
      email: "",
    });
  };

  return (
    <>
      <div className="container">
        <nav class="navbar navbar-dark bg-dark justify-content-between">
          <a class="navbar-brand">Navbar</a>
          <form class="form-inline">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
            >
              Add
            </button>
          </form>
        </nav>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  New message
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={modal.fname}
                      name="fname"
                      onChange={(e) =>
                        setModal({ ...modal, fname: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={modal.email}
                      name="email"
                      onChange={(e) =>
                        setModal({ ...modal, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={modal.password}
                      name="password"
                      onChange={(e) =>
                        setModal({ ...modal, password: e.target.value })
                      }
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onModalSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card value */}

        <div className="container" style={{ marginTop: "2%" }}>
          <div className="row">
            {items
              ? items.map((item) => {
                  return (
                    <div className="col-md-4">
                      {" "}
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-header">List</div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">{item.fname}</li>
                          <li className="list-group-item">{item.email}</li>
                          <li className="list-group-item">{item.password}</li>
                        </ul>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};
