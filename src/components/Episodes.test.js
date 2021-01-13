import React from 'react';
import { render, screen } from '@testing-library/react';

import Episodes from './Episodes';

// Episodes Component Tests
// 1. Test to see if component renders by default without errors
// 2. Check to see if component renders correctly with initial and updated props

test("Episodes component renders without error", () => {
    // initial state when App loads
    const episodes = [];
    render(<Episodes episodes={episodes} />);
});

test("Episodes renders an array of episodes when passed in as state changes from the App component", () => {
    // render app with episodes = []
    const initialEpisodeData = []
    // check to make sure no episodes are on the page
    const { rerender } = render(<Episodes episodes={initialEpisodeData}/>);

    // query h3 from DOM to make sure it does not exist when component props is []
    let h3title = screen.queryByRole('h3');

    // assert h3title to be null from query result
    expect(h3title).toBeNull();

    const updatedEpisodeData = [
        {
            id: 553946,
            season: 1,
            name: "Chapter One"
        },
        {
            id: 553947,
            season: 1,
            name: "Chapter Two"
        },
        {
            id: 553948,
            season: 1,
            name: "Chapter Three"
        }
    ]
    // rerender app with episode data 
    rerender(<Episodes episodes={updatedEpisodeData}/>);

    // check to make sure episodes are on the page, implicit assertion
    const firstH3title = screen.getByText(/chapter one/i);
    const secondH3title = screen.getByText(/chapter two/i);
    const thirdH3title = screen.getByText(/chapter three/i);
    
    // assert
    expect(firstH3title).toHaveTextContent('Chapter One');
    expect(secondH3title).toBeTruthy();
    expect(thirdH3title).not.toBeNull();
})