import "./User.css";
import UserData from "../userData/UserData";
import Card from "../card/Card";
import { useState } from "react";

function User() {
  let [state, setState] = useState([]); // All users
  let [filteredState, setFilteredState] = useState([]); // Filtered users based on gender
  let [gender, setGender] = useState("all"); // Current gender filter

  var getUser = () => {
    var promiseObj1 = UserData();
    promiseObj1
      .then((users) => {
        console.log(users.data.results);
        setState(users.data.results);
        setFilteredState(users.data.results); // Initially display all users
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Filter for Male
  function filterGender(selectedGender) {
    setGender(selectedGender);
    if (selectedGender === "all") {
      setFilteredState(state); // Show all users
    } else {
      setFilteredState(state.filter((user) => user.gender === selectedGender)); // Filter users
    }
  }

  return (
    <div className="user">
      <h2>Dynamic User Profile Viewer with Gender-Based Filtering</h2><br />
      <h3>Discription</h3>
      <p>This project demonstrates my skills in building dynamic web applications using React.js, Axios, and API integration. I utilized the Random User API to fetch user data, showcasing my ability to work with external APIs efficiently. <br />The data is dynamically rendered into a visually appealing UI using reusable Card Components to display individual user details.

    <br /> One of the key features of this project is the gender-based filtering functionality. Users can filter the displayed profiles by selecting "Male," "Female," or "All" options through intuitive radio buttons.<br /> This functionality highlights my expertise in:</p>
   
   <ul>
    <li>State Management: Leveraging React's useState hook for seamless data handling and UI updates.</li>
    <li>Data Filtering: Applying real-time filtering techniques to dynamically modify the displayed content based on user input.</li>
    <li>Responsive Design: Ensuring the UI is accessible and visually appealing across different devices.</li> <br />

    <p>This project not only emphasizes my technical abilities but also reflects my understanding of building user-focused applications with clean, reusable, and maintainable code. It demonstrates my problem-solving approach, attention to detail, and ability to create interactive and user-friendly interfaces—key qualities recruiters look for in a software developer.</p>
   </ul>


      <button onClick={getUser}>Get Users Details</button>
      <div className="radio">
        <input
          type="radio"
          name="gender"
          value="all"
          checked={gender === "all"}
          onChange={() => filterGender("all")}
        />
        <label>All</label> <br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={() => filterGender("male")}
        />
        <label>Male</label> <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={() => filterGender("female")}
        />
        <label>Female</label>
      </div>
      <div className="cardComp">
        {filteredState.map((e) => (
          <Card key={e.login.uuid} state={e} />
        ))}
      </div>
    </div>
  );
}

export default User;
