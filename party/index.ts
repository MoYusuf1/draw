// file: party/index.ts
import { onConnect } from "y-partykit";
import type { PartyKitServer } from "partykit/server";

export default {
  onConnect,
} satisfies PartyKitServer;