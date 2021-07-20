import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/antd/dist/antd.css";
import PaginationFooter from "./Pagination";

import { Input } from "antd";
import { useLocation } from "react-router-dom";

const Country = () => {
  const [data1, setData] = useState();
  const [search, setSearch] = useState("");
  const [showPerPage, setShowPerPage] = useState(7);
  const [page, setpage] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPageChange = (startpage, endpage) => {
    setpage({ start: startpage, end: endpage });
  };
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((abc) => setData(abc));
  }, []);
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="wrapper">
      <ul>
        <>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-3">
              <Input
                type="text"
                placeholder="Search Countries ..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-md-6" style={{ textAlign: "center" }}>
              <h3>
                <i>Country Data</i>
              </h3>
            </div>
          </div>

          <div style={{ padding: "10px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Country Name</th>
                  <th>Country Code</th>
                  <th>Date</th>

                  <th>NewDeaths</th>
                  <th>NewRecovered</th>
                </tr>
              </thead>
              {data1?.Countries.slice(page.start, page.end)
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val?.Country.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => (
                  <tbody>
                    <tr>
                      <td>{item.Country}</td>
                      <td>{item.CountryCode}</td>
                      <td>{item.Date}</td>
                      <td>{item.NewDeaths}</td>
                      <td>{item.NewRecovered}</td>
                    </tr>
                  </tbody>
                ))}
            </table>
            <PaginationFooter
              showPerPage={showPerPage}
              onPageChange={onPageChange}
              total={data1?.Countries.length}
            />
          </div>
        </>

        {console.log(data1)}
      </ul>
    </div>
  );
};

export default Country;
