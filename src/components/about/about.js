import React, { useEffect, useState } from "react";
import axios from "axios";
import "./about.css";
const About = () => {
  const [users, setUsers] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log("fetching data");
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((result) => {
        console.log(result.data.data);
        setUsers(result.data.data);
        setFilteredArr(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []); //workslike componenetdidmount
  const remove = (index) => {
    let arr = [...users];
    arr.splice(index, 1);
    setUsers(arr);
  };
  useEffect(() => {
    let arr = users.filter((el) => el.first_name.includes(search));
    setFilteredArr(arr);
  }, [search, users]);
  return (
    <div>
      <h3>this is About page</h3>
      <input
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      ></input>
      <table>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>email</th>
          <th>remove</th>
        </tr>
        {filteredArr.map((el, i) => {
          return (
            <tr>
              <td>{el.first_name}</td>
              <td>{el.last_name}</td>
              <td>{el.email}</td>
              <td>
                <button onClick={() => remove(i)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default About;
