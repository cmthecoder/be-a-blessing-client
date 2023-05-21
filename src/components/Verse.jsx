import { useState, useEffect } from "react";
import axios from "axios";

const Verse = () => {
  const [dailyVerse, setDailyVerse] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    axios
      .get(
        "https://beta.ourmanna.com/api/v1/get?format=json&order=daily",
        options
      )
      .then((response) => {
        setDailyVerse(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div className=" w-screen flex justify-center md:text-lg text-xl">
      {dailyVerse ? (
        <div>
          <h2>{dailyVerse.verse.details.text}</h2>
          <p>- {dailyVerse.verse.details.reference}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Verse;
