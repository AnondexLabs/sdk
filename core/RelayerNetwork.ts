export class RelayerNetwork {
  relay(payload: any) {
    console.log("[RelayerNetwork] Relaying via anonymous relayer");
    return {
      relayerId: `rel_${Math.random().toString(36).slice(2, 8)}`,
      payload
    };
  }
}
