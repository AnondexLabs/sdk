export interface SwapRequest {
  from: string;
  to: string;
  amount: number;
  route: "public" | "private";
  metadata?: Record<string, any>;
}
