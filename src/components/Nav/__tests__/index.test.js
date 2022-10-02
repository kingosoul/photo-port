import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav Component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);
        // render Nav
        expect(asFragment()).toMatchSnapshot();
    });

});

describe('emoji visible', () => {
    it('inserts emoji into h2', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment('camera')).toHaveTextContent('📸'); // camera wont compare as emoji
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});