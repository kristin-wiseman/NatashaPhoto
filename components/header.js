import React, {Component} from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'

function Menu(props) {
    if (props.visible) {
        return(
            <div id="menu" className="serif">
                <Link href="/"><a>Home</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false,
            menuIcon: faBars
        };
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.setState(state => ({
            menuIsOpen: !state.menuIsOpen,
            menuIcon: !state.menuIsOpen ? faXmark : faBars
        }));

    }

    render() {
        return (
            <>
            <header>
                <div id="siteTitle" className="item">
                    <div className="serif">Natasha</div>
                    <div className="script">photography</div>
                </div>
                <FontAwesomeIcon id="menuButton" icon={this.state.menuIcon} onClick={this.openMenu} className="item" />
                <Menu visible={this.state.menuIsOpen}/>
            </header>
            
            </>
        )
    }
}

export default Header