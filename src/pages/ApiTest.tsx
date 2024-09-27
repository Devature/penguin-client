import { useState } from "react";
import { penguinApi } from "../util/axios";
import { Button, Stack, Typography } from "@mui/material";

export default function ApiTest() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function testApi() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await penguinApi.get("/api/test");
      setMsg(res.data.message);
    } catch (err) {
      console.error(err);
      setMsg("Something went wrong fetching from the API, see console for details");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Stack style={{ alignItems: "center" }}>
      <Stack
        spacing={2}
        direction="row"
        style={{
          marginBottom: "1rem",
        }}
      >
        <Button
          onClick={testApi}
          style={{ marginRight: "1rem" }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Test API"}
        </Button>
        <Button onClick={() => setMsg("")}>Clear test message</Button>
      </Stack>
      <Typography
        sx={{
          border: "1px solid",
          borderColor: "secondary.main",
          color: "secondary.light",
          padding: "5px",
          textAlign: "center",
          minWidth: "500px",
        }}
      >
        API test message:
        <br />
        &nbsp;{msg}
      </Typography>
    </Stack>
  );
}
