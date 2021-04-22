import React, { Fragment } from "react";
import ControllerCounter from "../containers/ControllerCounter";
import ShowCounter from "../containers/ShowCounter";
import styled from "styled-components";
import Page from "./page";
import Header from "../containers/Header";

const CounterStyle = styled.div`
	max-width: calc(1200px -  4vw);
	width: 76vw;
	padding: 2vh 2vw 2vh 2vw;
	height: 300px;
	background-color: rgba(100, 100, 200, 0.8);
	backdrop-filter: blur(10px);
	box-shadow: 2px 2px 10px 0px black;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
    overflow: hidden;
`;

const Counter = () => {
	return (
		<Fragment>
			<Header />
			<Page align={"center"} justify={"center"}>
				<CounterStyle>
					<ShowCounter />
					<ControllerCounter />
				</CounterStyle>
			</Page>
		</Fragment>
	);
};

export default Counter;
