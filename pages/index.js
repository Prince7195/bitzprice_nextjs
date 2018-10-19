import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = props => (
  <Layout>
    <h1>Welcome to BitsPrices</h1>
    {props.data.time.updated}
    <p>Check Current Bitcoin Rate</p>
    <Prices bpi={props.data.bpi} />
  </Layout>
);

Index.getInitialProps = async function() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await response.json();
  return {
    data
  };
};

export default Index;
