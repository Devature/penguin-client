import { useState } from "react";
import { penguinApi } from "./util/axios";

export default function ApiTest() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function testApi() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await penguinApi.get("/");
      setMsg(res.data.message);
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong fetching from the API");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={testApi}
          style={{ marginRight: "1rem" }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Test API"}
        </button>
        <button onClick={() => setMsg("")}>Clear test message</button>
      </div>
      <div
        style={{
          backgroundColor: "blue",
          border: "1px solid red",
          padding: "5px",
        }}
      >
        API test message:
        <br />
        &nbsp;{msg}
      </div>
    </div>
  );
}
