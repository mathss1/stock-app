export const dataset = [
  {
    vodka: 59,
    whisky: 57,
    beer: 86,
    wine: 21,
    month: "Monday",
  },
  {
    vodka: 59,
    whisky: 33,
    beer: 86,
    wine: 21,
    month: "Tuesday",
  },
  {
    vodka: 50,
    whisky: 36,
    beer: 78,
    wine: 21,
    month: "Thursday",
  },
  {
    vodka: 47,
    whisky: 29,
    beer: 106,
    wine: 17,
    month: "Wednesday",
  },
  {
    vodka: 127,
    whisky: 56,
    beer: 198,
    wine: 34,
    month: "Friday",
  },
  {
    vodka: 143,
    whisky: 100,
    beer: 188,
    wine: 87,
    month: "Saturday",
  },
  {
    vodka: 134,
    whisky: 89,
    beer: 176,
    wine: 74,
    month: "Sunday",
  },
];

export function valueFormatter(value: number | null) {
  return `${value}`;
}
