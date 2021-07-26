import React, { Component } from "react"

interface Props {
    loaders: Array<any>;
}

export const Loader1 = (): JSX.Element => {
    return (
        <div className="loader1">
            <div className="loader">
                <div className="loading">

                </div>
            </div>

            <div className="loader">
                <div className="loading">

                </div>
            </div>
            <div className="loader">
                <div className="loading">

                </div>
            </div>
            <div className="loader">
                <div className="loading">

                </div>
            </div>
            <div className="loader">
                <div className="loading">

                </div>
            </div>
            <div className="loader">
                <div className="loading">

                </div>
            </div>
            <div className="loader">
                <div className="loading">

                </div>
            </div>
            <div className="loader">
                <div className="loading">

                </div>
            </div>
        </div>
    );
}

export const Loader2 = (): JSX.Element => {
    return (<div className="loader2">
        <div className="loader">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    </div>);
}

export const Loader3 = (): JSX.Element => {
    return (
        <div className="loader3">
            <div className="inner-circle">
                ☆
            </div>
        </div>
    );
}

export const Loader4 = (): JSX.Element => {
    return (<div className="loader4">
        <div className="wrapper">
            <div className="smallpin">
            </div>
            <div className="point">
            </div>
            <div className="bigpin">
            </div>
        </div>
    </div>);
}

export const Loader5 = (): JSX.Element => {
    return (
        <div className="loader5">
            <div className="wrapper">
                <div className="loader">

                </div>
            </div>
        </div>
    );
}

export const Loader6 = (): JSX.Element => {
    return (
        <div className="loader6">
            <div className="wrapper">
                <div className="circle1">

                </div>
                <div className="circle2">

                </div>
            </div>

        </div>);
}

export default class Loader extends Component<Props, any> {

    callComponent = (index: number) => {
        switch (index) {
            case 1:
                return <Loader1 />
            case 2:
                return <Loader2 />
            case 3:
                return <Loader3 />
            case 4:
                return <Loader4 />
            case 5:
                return <Loader5 />
            case 6:
                return <Loader6 />
            default:
                return <Loader1 />
        }
    }
    render() {
        return (
            this.props.loaders.map((loader: any) => {
                return this.callComponent(loader.id)
            })
        );
    }
}
