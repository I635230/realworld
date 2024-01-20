"use client";

import { unauthenticate } from "@/app/lib/auth";

export default function Logout() {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" onClick={() => unauthenticate()}>
          Sign out
        </a>
      </li>
    </>
  );
}
