import { ethers } from "ethers";
import abi from "./abi.json";
import store from "../redux/store";
import { GKP_CONTRACT_ADDRESS } from "../public/constants";

async function pushSoulBoundGate({ name, symbol, limit, price, smartAccount }) {
	let iface = new ethers.utils.Interface(abi);
	let encodedData = iface.encodeFunctionData("createSoulBoundGate", [
		limit,
		name,
		symbol,
		price,
	]);

	let txn = {
		to: GKP_CONTRACT_ADDRESS,
		data: encodedData,
	};

	let txdata;
	smartAccount.on("error", (response) => {
		console.log("error event received via emitter", response);
	});
	txdata = await smartAccount.sendGasLessTransaction({
		transaction: txn,
	});

	console.log(txdata);
	return txdata;
}

export default pushSoulBoundGate;
