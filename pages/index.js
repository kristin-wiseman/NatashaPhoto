import React, {Component} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import PhotoAlbum from 'react-photo-album'

import Layout from '../components/layout'
import styles from '../styles/index.module.scss'
import pic2 from '../public/images/DSC_0006.jpg'

const photos = [
    {
        src: "/images/DSC_0001.jpg",
        width: 3872,
        height: 2592
    },
    {
        src: "/images/DSC_0006.jpg",
        width: 2592,
        height: 2592
    },
    {
        src: "/images/DSC_0009.jpg",
        width: 2592,
        height: 3872
    },
    {
        src: "/images/DSC_0022.jpg",
        width: 3872,
        height: 2592
    },
    {
        src: "/images/DSC_0029.jpg",
        width: 2592,
        height: 3872
    },
    {
        src: "/images/DSC_0051.jpg",
        width: 2592,
        height: 2592
    },
    {
        src: "/images/DSC_0078.jpg",
        width: 2592,
        height: 3872
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
                <PhotoAlbum layout="masonry" photos={photos} columns={this.state.photoCols.toString()} />
            </section>

            <section className={styles.about}>
                <h1>About Me</h1>
                <p>This is an example bio! Hi, I'm Natasha Navarrete, and I'm a family and event photographer based in Chicago, IL. Write some other stuff about being awesome and having a dog because people like dog owners. Please click "Contact" in the menu above to get in touch with me!</p>
            </section>
        </>
        )
    }
}

export default Index;