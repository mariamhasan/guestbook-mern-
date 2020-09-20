import axios from "axios";

export const register = newUser => {
  return axios
    .post("users/register", {
      userName: newUser.userName,
      email: newUser.email,
      password: newUser.password,
      passwordCheck: newUser.passwordCheck
    })
    .then(response => {
      console.log("Registered");
    });
};

export const login = user => {
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem("usertoken", response.data.token);
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const profile = user => {
  return axios.get("users/profile");
};
