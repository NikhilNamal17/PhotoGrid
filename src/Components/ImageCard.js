import wall_paper from "../scripts/wallpaerLoad";
import "./ImageList.css";
import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
        this.state = {
            spans: 0,
            height: 0
        };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 12);

        this.setState({ spans: spans });
    };

    render() {
        const { urls, alt_description, user } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                {/* <img
                    className="image"
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={alt_description}
                    onClick={wall_paper.setAsBackground}
                /> */}
                {/* <div>
                    <h3>
                        Photo By: {user.first_name + user.last_name} on{" "}
                        <a href={user.links.html}>Unsplash</a>{" "}
                    </h3>
                </div> */}

                <div className="ui card image-nik">
                    <div className="image">
                        <img
                            // className="image-nik"
                            ref={this.imageRef}
                            src={urls.regular}
                            alt={alt_description}
                            onClick={wall_paper.setAsBackground}
                        />
                    </div>
                    <div className="content">
                        <a className="header">
                            Photo By: {user.first_name + user.last_name} on
                            <a href={user.links.html}> Unsplash</a>
                        </a>

                        <div class="description">{alt_description}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageCard;
