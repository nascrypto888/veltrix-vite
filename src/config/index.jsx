import { bscTestnet, bsc } from "@reown/appkit/networks";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";

export const PROJECT_ID = "8c94d17316262d50ee73c5f57cc68f0a";

if (!PROJECT_ID) {
  throw new Error("PROJECT_ID is not set");
}

export const metadata = {
  name: "MatrixApp",
  description: "MatrixApp",
  url: "https://reown.com",
  icons: ["https://matrixapp.com/icon.png"],
};

export const networks = [bscTestnet, bsc];

export const ethersAdapter = new EthersAdapter();
