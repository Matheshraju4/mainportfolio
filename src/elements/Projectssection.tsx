import { Card } from "./Card";
import iworkforyou from "../images/Iworkforyoumain.avif";
import todo from "../images/2344032daee640a8846990fb18569b64.jpeg";

import consistenttrade from "../images/1699240346690.jpg";

export function Projectssection() {
  let contenttodisplayed = [
    {
      image: consistenttrade,
      Heading: "ConsistentTrade",
      Description: "A website to set FinancialTarget and hels to acheive it ",
    },
    {
      image: iworkforyou,
      Heading: "I WorkforYou",
      Description: "A application which Buy and sell Automatically for you ",
    },
    {
      image: todo,
      Heading: "TaskMate",
      Description:
        "Simplify task management, enhance productivity with intuitive Todo application",
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
