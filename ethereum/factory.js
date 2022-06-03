import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe4d2c2052697D8DB5090284EbBa11aBe7d226099"
);

export default instance;
