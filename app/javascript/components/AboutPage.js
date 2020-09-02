import React from 'react'
import MainAppBar from './MainAppBar'
import "./AboutPage.css";

class AboutPage extends React.Component {
    render() {
        return (
            <>
            <MainAppBar />
            <div align="center">
              <p className="h1">Sergej Ilgevic</p>
              <p className="h1">02/09/2020</p>
              <p className="h1">CoinGate</p>
            </div>
            </>
        )
    }
}

export default AboutPage
