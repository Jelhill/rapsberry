import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {ButtonContainer} from './Button'
import {Logo} from "../logo.svg"
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="navbar-brand"/>
                </Link>

                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        My Cart
                    </ButtonContainer>

                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;

    }
`;