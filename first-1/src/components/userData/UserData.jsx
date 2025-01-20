import axios from "axios";

function UserData(){
     
        var promiseObj = axios.get("https://randomuser.me/api/?results=54")
          return promiseObj;
}

export default UserData;