import wall_paper from "../scripts/wallpaerLoad";
import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = {
            spans: 0
        };
    }
    // state = {
    //     convertToBase64: wall_paper.methods.convertToBase64,
    //     setAsBackground: wall_paper.methods.setAsBackground
    // };
    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);

        this.setState({ spans: spans });
    };

    render() {
        const { urls, alt_description } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={alt_description}
                    onClick={wall_paper.setAsBackground}
                />
            </div>
        );
    }
}

export default ImageCard;
