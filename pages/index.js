import React, { useEffect, useState } from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

const index = () => {
	const [campaignsArray, setCampaignsArray] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		setCampaignsArray(campaigns);
		console.log(campaigns);
	}

	function renderCampaigns() {
		const items = campaignsArray.map((address) => {
			return {
				header: address,
				description: <a>View Campaign</a>,
				fluid: true,
			};
		});
		return <Card.Group items={items} />;
	}
	return (
		<div>
			<h3>Open Campaigns</h3>
			<Button
				floated="right"
				content="Create Campaign"
				icon="add circle"
				primary
			/>
			{campaignsArray && renderCampaigns()}
		</div>
	);
};

export default index;
