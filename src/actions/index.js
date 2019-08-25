// // import jsonPlaceholder from "../apis/jsonPlaceholder"
// import decode from "jwt-decode";
// import { FETCH_POSTS, SIGN_IN, PROFILES, INDIVIDUAL_SIGN_UP } from "./types";

// import tigrowApi from "../apis/tigrowApi";

// // export const fetchPosts = () => async dispatch => {
// //   const response = await jsonPlaceholder.get("/posts");
// //   dispatch({ type: FETCH_POSTS, payload: response.data });
// // };

// export const signInAction = (email, password, history) => async dispatch => {
//   const body = {
//     email: email,
//     password: password
//   };
//   try {
//     let headers = {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     };
//     const response = await tigrowApi.post(
//       "api/v1/account/login",
//       body,
//       headers
//     );
//     const token = response.data.token;
//     localStorage.setItem("id_token", token);
//     console.log(history);
//     history.replace("/users");
//     //   try {
//     //     let headers = {
//     //       Accept: "application/json",
//     //       "Content-Type": "application/json",

//     //       "x-api-key": token
//     //       // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ydmlkYXMxMTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJPcnZpQDEyMzQ1NiIsImlhdCI6MTU2NTE3MTM3OSwiZXhwIjoxNTczODExMzc5fQ.VL3VJK_zBMus4a5_fJEvhFHXWLm6qxdfNGmRm7H3i1U"
//     //     };
//     //     console.log(headers);
//     //     const response = await tigrowApi.get(
//     //       "api/v1/account/5d4284acfabad6171ac6e152",
//     //       headers
//     //     );
//     //     console.log("after token", response);
//     //     dispatch({ type: SIGN_IN, payload: response.data });
//     //   } catch (error) {
//     //     console.log(error);
//     //   }
//   } catch (error) {
//     console.log(error);
//   }
// };
// const getToken = () => {
//   // Retrieves the user token from localStorage
//   return localStorage.getItem("token");
// };

// export const individualSignUpAction = (
//   email,
//   password,
//   firstName,
//   lastName,
//   contactNumber,
//   history
// ) => async dispatch => {
//   const body = {
//     email,
//     password,
//     firstName,
//     lastName,
//     contactNumber
//   };
//   console.log("mithhu", body);
//   try {
//     let headers = {
//       "Content-Type": "application/json"
//     };
//     // console.log(headers);
//     const response = await tigrowApi.post(
//       "api/v1/account/signup",
//       body,
//       headers
//     );
//     // const response = response.data;
//     console.log("after token", response);
//     dispatch({ type: INDIVIDUAL_SIGN_UP, payload: response.data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const profileAction = () => async dispatch => {
//   try {
//     let headers = {
//       "Content-Type": "application/json",
//       Authorization:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ydmlkYXMxMTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJPcnZpQDEyMzQ1NiIsImlhdCI6MTU2NTE3MTk4MywiZXhwIjoxNTczODExOTgzfQ.2FF64rbfVhXZgr5q2gCwzVeSaHU67YFKyFu8Ejmw8Ao"
//     };
//     // console.log(headers);
//     const response = await tigrowApi.get(
//       "api/v1/account/5d4284acfabad6171ac6e152",
//       {
//         Authorization:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ydmlkYXMxMTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJPcnZpQDEyMzQ1NiIsImlhdCI6MTU2NTE3MTk4MywiZXhwIjoxNTczODExOTgzfQ.2FF64rbfVhXZgr5q2gCwzVeSaHU67YFKyFu8Ejmw8Ao"
//       }
//     );
//     // console.log("after token", response);
//     dispatch({ type: PROFILES, payload: response.data });
//   } catch (error) {
//     console.log(error);
//   }
// };
