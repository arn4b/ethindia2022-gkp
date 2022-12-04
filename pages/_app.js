import "../styles/globals.css";
import { Provider } from "react-redux";
import "@rainbow-me/rainbowkit/styles.css";
import store from "../redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
	[chain.polygonMumbai],
	[publicProvider()],
	[publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: "My RainbowKit App",
	chains,
});

const client = createClient({
	autoConnect: true,
	connectors,
	provider,
});

function MyApp({ Component, pageProps }) {
	return (
		<WagmiConfig client={client}>
			<RainbowKitProvider chains={chains}>
				<Provider store={store}>
					{/* <ChakraProvider> */}
					<Component {...pageProps} />
					{/* </ChakraProvider> */}
				</Provider>
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
