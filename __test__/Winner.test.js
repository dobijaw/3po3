import { Symbols, Statuses } from "../src/js/state";
import { Winner } from "../src/js/model/Winner";

test("should be draws", () => {
  const playerChoice = Symbols.Rock;
  const aiChoice = Symbols.Rock;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Draw);
});

test("should be draws", () => {
  const playerChoice = Symbols.Paper;
  const aiChoice = Symbols.Paper;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Draw);
});

test("should be draws", () => {
  const playerChoice = Symbols.Scissors;
  const aiChoice = Symbols.Scissors;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Draw);
});

test("should be wins", () => {
  const playerChoice = Symbols.Rock;
  const aiChoice = Symbols.Scissors;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Win);
});

test("should be wins", () => {
  const playerChoice = Symbols.Paper;
  const aiChoice = Symbols.Rock;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Win);
});

test("should be wins", () => {
  const playerChoice = Symbols.Scissors;
  const aiChoice = Symbols.Paper;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Win);
});

test("should be losses", () => {
  const playerChoice = Symbols.Paper;
  const aiChoice = Symbols.Scissors;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Loss);
});

test("should be losses", () => {
  const playerChoice = Symbols.Rock;
  const aiChoice = Symbols.Paper;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Loss);
});

test("should be losses", () => {
  const playerChoice = Symbols.Scissors;
  const aiChoice = Symbols.Rock;

  const winner = new Winner(playerChoice, aiChoice);
  const result = winner.checkGameResult();

  expect(result).toBe(Statuses.Loss);
});
