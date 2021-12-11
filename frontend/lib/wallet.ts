import { AssertionError } from "assert";
import { ethers } from "ethers";
import WaveContract from "./WavePortal.json";

declare global {
  interface Window {
    ethereum: any | undefined;
  }
}

function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError({ message: msg });
  }
}

function isEthereumAvailable() {
  assert(window !== undefined, "window key is no available");
  assert(window.ethereum !== undefined, "ethereum key is not available");
  return true;
}

export function checkWalletConnection() {
  try {
    assert(isEthereumAvailable());
    console.log("We have the ethereum object", window.ethereum);
    return true;
  } catch (error) {
    console.error("Error while checking wallet connection", error);
    return false;
  }
}

export async function requestWalletAccess() {
  try {
    isEthereumAvailable();
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    assert(accounts.length === 0, "No authorized account");
    const account = accounts[0];
    console.log("Found an authorized account", account);
    return true;
  } catch (error) {
    console.error("Error while requestion wallet access", error);
    return false;
  }
}

export async function connectWallet(): Promise<string | null> {
  try {
    isEthereumAvailable();
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("connected", accounts[0]);
    return accounts[0] as string;
  } catch (error) {
    console.error("Error while connecting to wallet", error);
    return null;
  }
}

export async function getWaves(): Promise<number | null> {
  try {
    isEthereumAvailable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const wavePortalContract = new ethers.Contract(
      "0x4eC213e90041Fe5d78c783924094C1f3d2D6FEb1",
      WaveContract.abi,
      signer
    );
    const count = await wavePortalContract.getTotalWaves();
    return count.toNumber();
  } catch (error) {
    console.log("Error while sending wave", error);
    return null;
  }
}
