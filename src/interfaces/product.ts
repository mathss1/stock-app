export interface IProduct {
  id: number;
  product: string;
  status: Status;
  cost: number;
  rating: number;
}

export type Status = "Available" | "Unavailable" | "Coming";
