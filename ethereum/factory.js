import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0xbB5FFe8391aB0D1E6EbBcEfF67C4e28C0AfA6555"
);

export default instance;
