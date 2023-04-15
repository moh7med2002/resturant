import React from 'react'
import Layout from '../../components/client/Layout'
import Slider from '../../components/client/Slider'
import TopRatedMarekts from '../../components/client/TopRatedMarekts'

export default function Home() {
    return (
        <Layout>
            <Slider/>
            <TopRatedMarekts/>
        </Layout>
    )
}
