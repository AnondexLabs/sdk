import { SwapRequest } from "../types";
import { hashPayload } from "../utils/crypto";

export class PrivacyLayer {
  constructor(private level: "low" | "medium" | "max") {}

  obfuscate(req: SwapRequest): SwapRequest {
    const salt = Date.now().toString();
    const fingerprint = hashPayload({ ...req, salt });

    return {
      ...req,
      metadata: {
        ...req.metadata,
        fingerprint,
        privacyLevel: this.level
      }
    };
  }
}
