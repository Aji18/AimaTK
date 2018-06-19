import React from 'react';
import { Link } from 'react-router-dom';
import AppView from "./view/App";

export default class App extends React.Component {
    render() {
        return (
            <AppView>
                <Link to='/'> Home </Link>
                <Link to='/profile'> Profil </Link>
                <Link to='/sop'> SOP </Link>
                <Link to='/quality'> Deteksi Mutu </Link>
                <Link to='/aimatk'> AimaTK </Link>
                { this.props.children }
            </AppView>
        )
    }
}