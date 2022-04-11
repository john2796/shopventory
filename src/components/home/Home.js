import React from "react";
import { useSelector } from "react-redux";
import DogLists from "../dog-lists/DogLists";

function Home() {
  const { inProgress, error, dogs } = useSelector((s) => s.dogs);

  if (inProgress) {
    return <h2>loading...</h2>;
  }

  if (error) {
    return <h2 className="error-message">{error}</h2>;
  }

  return (
    <>
      <DogLists dogs={dogs} />
    </>
  );
}

export default Home;
