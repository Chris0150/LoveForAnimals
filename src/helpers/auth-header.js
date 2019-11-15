export function authHeader() {
  let token = localStorage.getItem("jwtToken");

  if (token) {
    return {
      Authorization: "Bearer " + token
    };
  } else {
    return {};
  }
}
