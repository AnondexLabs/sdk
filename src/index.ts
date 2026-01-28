import { AnonDex } from "./core/AnonDex";

async function main() {
  const anondex = new AnonDex({
    privacyLevel: "max",
    mevProtection: true,
    executorAnonymity: true
  });

  await anondex.swap({
    from: "ETH",
    to: "USDC",
    amount: 10,
    route: "private"
  });
}

main().catch(console.error);
