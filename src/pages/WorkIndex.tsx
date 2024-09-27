import { useEffect, useState } from "react";
import { penguinApi } from "../util/axios";
import Work from "../types/Work";
import { Typography } from "@mui/material";
import SpringDataRestResponse from "../types/SpringDataRestResponse";

export default function WorkIndex({ }) {
  const [works, setWorks] = useState<Work[]>([]);
  const [counter, setCounter] = useState(0);

  async function postWork(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const title = data.get("title") as string;
    const description = data.get("description") as string;

    const newWork : Work = {
      title: title,
      description: description
    }

    penguinApi.post("/works", newWork)
      .then(() => setCounter(counter + 1))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    penguinApi.get<SpringDataRestResponse<Work, "works">>("/works")
    .then(res => setWorks(res.data._embedded["works"]))
    .catch(err => console.log(err));
  }, [counter]);

  const workListItems = works.map(w => {
    return <li>{w.title}</li>;
  });

  return <>
    <Typography variant="h1" component="div">
      Works (POC of Spring Rest repository feature):
    </Typography>

    <p>You have added {counter} works</p>

    <ol>
      {workListItems}
    </ol>

    <div>
      <h2>Make a work:</h2>

      <form onSubmit={postWork}>
        <label htmlFor="title">Name:</label>
        <input required name="title" id="title" type="text"></input>
        <label htmlFor="description">Description:</label>
        <input required name="description" id="description" type="text"></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  </>;
}
