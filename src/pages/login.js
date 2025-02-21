import { useState } from "react";
import { Input } from "../components/ui.js";
import { Button } from "../components/ui.js";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui.js";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Both fields are required");
      return;
    }
    console.log("User logged in: ", form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-4 shadow-lg">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <p className="text-sm text-center mt-4">
            Not registered? <Link to="/register" className="text-blue-500">Click here to register</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

