import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import HomeV8 from "./components/home-v8";
import About from "./components/about";
import ServiceDetails from "./components/service-details";
import Portfolio from "./components/portfolio";
import PortfolioV2 from "./components/portfolio-v2";
import PortfolioDetails from "./components/portfolio-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";
import Faq from "./components/faq";
import ComingSoon from "./components/coming-soon";
import Error from "./components/404";
import Location from "./components/location";
import ProdductDetails from "./components/product-details";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import BlogGrid from "./components/blog-grid";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";
import Blog from "./components/blog";
import BlogDetails from "./components/blog-details";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import MyAccount from "./components/my-account";
import Login from "./components/login";
import Register from "./components/register";
import AddListing from "./components/add-listing";
import Wishlist from "./components/wishlist";
import OrderTracking from "./components/order-tracking";
import History from "./components/history";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";

require("@solana/wallet-adapter-react-ui/styles.css");

const Root = () => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // You can provide a custom RPC endpoint here
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new BackpackWalletAdapter(),
    ],
    [network]
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <HashRouter basename="/">
            <div>
              <Switch>
                <Route exact path="/" component={HomeV8} />
                <Route path="/about" component={About} />
                <Route path="/service-details" component={ServiceDetails} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/portfolio-v2" component={PortfolioV2} />
                <Route path="/portfolio-details" component={PortfolioDetails} />
                <Route path="/team" component={Team} />
                <Route path="/team-details" component={TeamDetails} />
                <Route path="/faq" component={Faq} />
                <Route path="/coming-soon" component={ComingSoon} />
                <Route path="/404" component={Error} />
                <Route path="/location" component={Location} />
                <Route path="/shop" component={ShopLeftSidebar} />
                <Route path="/product-details" component={ProdductDetails} />
                {/* blog */}
                <Route path="/blog-grid" component={BlogGrid} />
                <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
                <Route
                  path="/blog-right-sidebar"
                  component={BlogRightSidebar}
                />
                <Route path="/blog" component={Blog} />
                <Route path="/blog-details" component={BlogDetails} />
                <Route path="/contact" component={Contact} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/my-account" component={MyAccount} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/add-listing" component={AddListing} />
                <Route path="/wishlist" component={Wishlist} />
                <Route path="/order-tracking" component={OrderTracking} />
                <Route path="/history" component={History} />
              </Switch>
            </div>
          </HashRouter>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("quarter"));

export default Root;
