import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test(" it renders without crashing", function () {
    render(<Card />);
});


test("function matches the snapshot", function () {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();

})