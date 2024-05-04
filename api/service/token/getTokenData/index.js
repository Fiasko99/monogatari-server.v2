const jwt = require("jsonwebtoken");
const ApiError = require("@exception");

module.exports = (token, typeToken, withErrors) => {
  if (!token) {
    if (withErrors) {
      throw ApiError.UnauthorizedError();
    }
    return null;
  }
  const accessToken = token.split(" ")[1];
  if (!accessToken) {
    if (withErrors) {
      throw ApiError.EmptyToken();
    }
    return null;
  }

  const typesToken = {
    access: "JWT_ACCESS_SECRET",
    refresh: "JWT_REFRESH_SECRET",
  };
  const userData = jwt.verify(
    accessToken,
    process.env[typesToken[typeToken]],
    (err, res) => {
      if (err && withErrors) {
        throw ApiError.WrongToken();
      }
      return res;
    }
  );

  return userData;
};
