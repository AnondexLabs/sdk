import { PrivacyLayer } from "./PrivacyLayer";
import { ExecutorPool } from "./ExecutorPool";
import { MEVRouter } from "./MEVRouter";
import { SwapRequest } from "../types";

export class AnonDex {
  private privacyLayer: PrivacyLayer;
  private executorPool: ExecutorPool;
  private mevRouter: MEVRouter;

  constructor(config: {
    privacyLevel: "low" | "medium" | "max";
    mevProtection: boolean;
    executorAnonymity: boolean;
  }) {
    this.privacyLayer = new PrivacyLayer(config.privacyLevel);
    this.executorPool = new ExecutorPool();
    this.mevRouter = new MEVRouter(config.mevProtection);
  }

  async swap(req: SwapRequest) {
    const obfuscated = this.privacyLayer.obfuscate(req);
    const route = this.mevRouter.route(obfuscated);
    const executor = this.executorPool.assignExecutor();

    console.log("[AnonDex] Executor assigned:", executor.id);

    return executor.execute(route);
  }
}
