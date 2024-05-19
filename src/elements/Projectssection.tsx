import { Card } from "./Card";
import landscape from "/landscape.jpg";
import blog from "/blog.jpg";

import consistenttrade from "/consistenttrade.jpg";

export function Projectssection() {
  let contenttodisplayed = [
    {
      image: consistenttrade,
      Heading: "ConsistentTrade",
      Description: "A website to set FinancialTarget and hels to acheive it ",
      url: "https://consistenttrade.2apps.online/",
    },
    {
      image: landscape,
      Heading: "Cr LandScape",
      Description: "A website for Landscape business",
      url: "https://landscape.2apps.online/",
    },
    {
      image: blog,
      Heading: "Learn Law",
      Description:
        "A  Blog website to help people to learn law and make a good decision",
      url: "https://learnlaw.2apps.online/",
    },
  ];

  return (
    <>
      <div className="flex justify-between flex-wrap ...">
        {contenttodisplayed.map((content) => (
          <Card {...content}></Card>
        ))}
      </div>
    </>
  );
}
