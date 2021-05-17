import { opine } from "https://x.nest.land/opine@1.3.4/mod.ts";
import { answer } from "./types.ts";
const app = opine();

app.get("/", function (req, res) {
  const answers = createResponse();
  res.send(answers);
});

app.listen(3000, () => console.log("server has started"));

function getAnswer(param: number): answer {
  const anAnswer: answer = {
    hello: "hello",
    world: "world",
    id: param,
  };
  return anAnswer;
}

function createResponse(): answer[] {
  const answers: answer[] = [];
  answers.push(getAnswer(1));
  answers.push(getAnswer(2));
  answers.push({ lorem: "ipsum2" });
  return answers;
}
