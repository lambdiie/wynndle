import fs from "fs";

async function getApi() {
  try {
    const response = await fetch(
      "https://api.wynncraft.com/v3/item/database?fullResult",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `An error occurred with fetching the API! Status: ${response.status}`,
      );
    }

    const data = await response.json();
    const writeData = JSON.stringify(data);

    fs.writeFile("./public/dataNew.json", writeData, (err) => {
      if (err) throw err;
      console.log("Data saved!");
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getApi();
