import React, {Component} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import PhotoAlbum from 'react-photo-album'

import Layout from '../components/layout'
import styles from '../styles/index.module.scss'
//import headShot from '../public/images/headshot.jpg'

const photos = [
    {
        src: "/images/LugoEngagement-21.jpg",
        width: 1929,
        height: 1286
    }
];

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoCols:  1
        }
        this.updateCols = this.updateCols.bind(this);
    }
    updateCols() {
        if (window.matchMedia("(min-width: 481px)").matches) {
            if (window.matchMedia("(min-width: 769px)").matches) {
                this.setState(() => ({
                    photoCols: 3
                }))
            } else {
                this.setState(()=> ({
                    photoCols: 2
                }))
            }
        } else {
            this.setState({photoCols: 1});
        }

    }

    componentDidMount() {
        this.updateCols();
        window.matchMedia("(min-width: 769px), (max-width: 481px)").addEventListener("change", this.updateCols);
    }

    componentWillUnmount() {
        window.matchMedia("(min-width: 769px), (max-width: 481px)").removeEventListener("change", this.updateCols);
    
    }

    render() {
        return (
        <>
            <Head>
                <title>Natasha Photography</title>
            </Head>
            
            <section className={styles.gallery}>
                <PhotoAlbum layout="masonry" photos={photos} columns={this.state.photoCols} />
            </section>

            <section className={styles.about}>
                <h1>About Me</h1>
                <p>This is an example bio! Hi, I'm Natasha Navarrete, and I'm a family and event photographer based in Chicago, IL. Write some other stuff about being awesome and having a dog because people like dog owners. Please click "Contact" in the menu above to get in touch with me!</p>
                <div id={styles.placeholder}>head shot goes in this rectangle!</div>
                {/* <Image src={headShot} alt="A picture of the photographer Natasha Navarrete"/>  */}
            </section>
        </>
        )
    }
}

export default Index;