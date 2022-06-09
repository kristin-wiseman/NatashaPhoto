import React, {Component} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import PhotoAlbum from 'react-photo-album'

import Layout from '../components/layout'
import styles from '../styles/index.module.scss'
import headShot from '../public/images/website_round1-26.jpg'

const photos = [
    {
        src: "/images/LugoEngagement-21.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-01.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-02.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-03.jpg",
        width: 1286,
        height: 1929
    },
    {
        src: "/images/website_round1-04.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-06.jpg",
        width: 1286,
        height: 1929
    },
    {
        src: "/images/website_round1-07.jpg",
        width: 1286,
        height: 1929
    },
    {
        src: "/images/website_round1-09.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-10.jpg",
        width: 1286,
        height: 1929
    },
    {
        src: "/images/website_round1-14.jpg",
        width: 1286,
        height: 1929
    },
    {
        src: "/images/website_round1-15.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-16.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-18.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-22.jpg",
        width: 1286,
        height: 1929
    },
    {
        src: "/images/website_round1-24.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-26.jpg",
        width: 1286,
        height: 1929
    },
    {
        src: "/images/website_round1-27.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-28.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-29.jpg",
        width: 1929,
        height: 1286
    },
    {
        src: "/images/website_round1-30.jpg",
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
                <div className={styles.aboutContent}>
                    <Image src={headShot} layout="responsive" alt="A picture of the photographer Natasha Navarrete"/>
                    <p>This is an example bio! Hi, I'm Natasha Navarrete, and I'm a family and event photographer based in Chicago, IL. Write some other stuff about being awesome and having a dog because people like dog owners. Please click "Contact" in the menu above to get in touch with me!</p>
                </div>
            </section>
        </>
        )
    }
}

export default Index;