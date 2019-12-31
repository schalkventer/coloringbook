import React, { FC } from "react";
import * as types from "./types";

export const Component: FC<types.Props> = (props: types.Props) => {
	const {} = props;

	return <div>Hello World!</div>;
};

export default Component;
