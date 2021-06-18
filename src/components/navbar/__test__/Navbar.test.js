import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../Navbar.component'

import {render , fireEvent} from '@testing-library/react'

it("renders without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<NavBar/>,div)
})

it("renders navbar correctly",()=>{
    const {queryByTestId,getByTestId} = render(<NavBar/>)
    expect(queryByTestId('navBar')).toBeTruthy()
    expect(getByTestId('navBar')).toHaveTextContent('My Blogs')
})

