export const dataset = [
  {
    aves: 59,
    linguiça: 57,
    carne: 86,
    carvão: 21,
    month: "Monday",
  },
  {
    aves: 59,
    linguiça: 33,
    carne: 86,
    carvão: 21,
    month: "Tuesday",
  },
  {
    aves: 50,
    linguiça: 36,
    carne: 78,
    carvão: 21,
    month: "Thursday",
  },
  {
    aves: 47,
    linguiça: 29,
    carne: 106,
    carvão: 17,
    month: "Wednesday",
  },
  {
    aves: 127,
    linguiça: 56,
    carne: 198,
    carvão: 34,
    month: "Friday",
  },
  {
    aves: 143,
    linguiça: 100,
    carne: 188,
    carvão: 87,
    month: "Saturday",
  },
  {
    aves: 134,
    linguiça: 89,
    carne: 176,
    carvão: 74,
    month: "Sunday",
  },
];

export function valueFormatter(value: number | null) {
  return `${value}`;
}
