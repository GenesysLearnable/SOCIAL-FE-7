import { useState } from "react";
import { ethers } from 'ethers';

const MetaMask = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        accountChanged(accounts[0]);
      } else {
        setErrorMessage("Please install MetaMask.");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to MetaMask. Please try again.");
    }
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName);
  };

  const getUserBalance = async (accountAddress) => {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [String(accountAddress), "latest"]
      });
      setUserBalance(ethers.utils.formatEther(balance));
    } catch (error) {
      setErrorMessage("Failed to fetch user balance.");
    }
  };

  const sendTransaction = async (event) => {
    event.preventDefault();
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: "0x51C78a61C4CF196c7cb46CF5170728a571718099",
            to: "0x66020133CD2812B66459882E01003CfBa31189B4",
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16),
            value: Number(10000000000000000).toString(16),
          }
        ]
      });
    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div>
      <h1>MetaMask Wallet Connection</h1>

      <button onClick={connectWallet}>Connect Wallet</button>
      <h3>Address: {defaultAccount}</h3>
      <h3>Balance: {userBalance} ETH</h3>

      <form onSubmit={sendTransaction}>
        <h3>Enter Transaction Address:</h3>
        <input type="text" name="to_address" placeholder="Address:"/>
        <input type="submit" value="Send Transaction" />
      </form>

     <hr></hr>

     <form onSubmit="{productPicker}">

        <label>
            Pick your Product:
            <select>

<option value="product1">Laptop</option>
<option value="product2">Car</option>
<option value="product3">Aeroplane</option>
            </select>
        </label>
<input type="submit" value="Submit" />
     </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default MetaMask;
