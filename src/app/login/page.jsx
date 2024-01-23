"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/auth";
import Link from "next/link";

export default function Page() {
  const [error, setToken] = useFormState(authenticate, "");
  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link href="/register">Need an account?</Link>
              </p>

              <ul className="error-messages"></ul>

              <form action={setToken}>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
