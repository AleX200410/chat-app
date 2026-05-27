import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export const generateToken = (userId, res) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is missing from .env");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // in ms
    httpOnly: true, 
    sameSite: "strict", 
    secure: process.env.NODE_ENV === "development" ? false : true,
  });

  return token;
};