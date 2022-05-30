import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

const CampaignNew = () => {
	const [minimumContribution, setMiniContribution] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log(minimumContribution);
	}, [minimumContribution]);

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setErrorMessage("");
		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods
				.createCampaign(minimumContribution)
				.send({ from: accounts[0] });
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setLoading(false);
			Router.pushRoute("/");
		}
	};

	return (
		<Layout>
			<h3>Create a Campaign</h3>
			<Form onSubmit={onSubmit}>
				<Form.Field>
					<label>Minimum Contribution</label>
					<Input
						label="wei"
						labelPosition="right"
						value={minimumContribution}
						onChange={(event) => setMiniContribution(event.target.value)}
					/>
				</Form.Field>

				<Button loading={loading} primary>
					Create
				</Button>
			</Form>
			{errorMessage && <Message error header="Oops!" content={errorMessage} />}
		</Layout>
	);
};

export default CampaignNew;
