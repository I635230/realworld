"use server";

import { cookies } from "next/headers";

export async function authenticate(state, formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await fetch(`http://api:3000/api/users/login`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    });
    const data = await response.json();
    const token = data.user.token;
    cookies().set("session", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // One week
      path: "/",
    });
    return data;
  } catch (error) {
    console.log(error);
    console.log("ログインエラー");
  }
}

export async function authenticated() {
  try {
    return cookies().get("session").value;
  } catch (error) {
    return false;
  }
}

export async function unauthenticate() {
  try {
    cookies().delete("session");
  } catch (error) {
    console.log("ログアウトエラー");
  }
}
