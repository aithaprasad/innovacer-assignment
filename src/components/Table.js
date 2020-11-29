//import React from "react";
import React, { useState, useEffect, useMemo } from "react";
import Search from "./Search.js";

const Table = () => {
  const [data, setData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [hasError, setErrors] = useState(false);
  const [search, setSearch] = useState("");

  async function fetchData() {
    const res = await fetch("https://api.covid19api.com/summary");
    res
      .json()
      .then((res) => setData(Array.from(res.Countries)))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = useMemo(() => {
    let filteredData = data;

    if (search) {
      console.log(search);
      filteredData = filteredData.filter((comment) =>
        comment.Country.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filteredData.slice(0, 5));
    }
    return Array.from(filteredData);
  }, [data, search]);

  return (
    <>
      <div>
        <Search
          onSearch={(value) => {
            setSearch(value);
          }}
        />
      </div>
      <table id="myTable">
        <thead>
          {filterData.length > 0 ? (
            <tr>
              <th>Name</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
          ) : (
            <tr>
              <td colSpan="5">No Matches Found...</td>
            </tr>
          )}
        </thead>
        <tbody>
          {filterData.length > 0 ? (
            filterData.map((droplet) => {
              return (
                <tr key={droplet.CountryCode}>
                  <td>{droplet.Country}</td>
                  <td>{droplet.TotalConfirmed}</td>
                  <td>{droplet.TotalRecovered}</td>
                  <td>{droplet.TotalDeaths}</td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
