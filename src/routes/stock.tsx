import { createFileRoute } from "@tanstack/react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products } from "@/dataset/products";
import { Badge } from "@/components/ui/badge";
import type { Status } from "@/interfaces/product";
import { PencilLine, Star, Trash2 } from "lucide-react";
import Button from "@mui/material/Button";

export const Route = createFileRoute("/stock")({
  component: Stock,
});

function getVariantColor(status: Status) {
  if (status === "Available") return "default";
  if (status === "Unavailable") return "destructive";
  return "outline";
}

export function Stock() {
  return (
    <div className="flex w-full mx-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead className="text-right pr-12.5">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const formatedCost = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.cost);
            return (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.product}</TableCell>
                <TableCell>
                  <Badge variant={getVariantColor(product.status)}>
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>{formatedCost}</TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    {product.rating.toFixed(1)}
                    <Star size={20} fill="yellow" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end">
                    <Button>
                      <PencilLine />
                    </Button>
                    <Button>
                      <Trash2 color="red" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
