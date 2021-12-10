import { AssertionError } from "assert";
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

export function checkWalletConnection() {
  try {
    assert(window !== undefined, "window key is no available");
    assert(window.ethereum !== undefined, "ethereum key is not available");
    console.log("We have the ethereum object", window.ethereum);
    return true;
  } catch (error) {
    console.error("Error while checking wallet connection", error);
    return false;
  }
}

export async function requestWalletAccess() {
  try {
    if (!checkWalletConnection()) return;
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
    assert(checkWalletConnection(), "No wallet connect");
    assert(await requestWalletAccess(), "No wallet available");
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
