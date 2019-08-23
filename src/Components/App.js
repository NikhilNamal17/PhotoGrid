import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {
        images: [],
        defaultImages: []
    };

    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onDefault = this.onDefault.bind(this);
    }

    async onSearchSubmit(term) {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: term,
                per_page: 500
                // orientation: "landscape"
            }
        });
        this.setState({ images: response.data.results });
        console.log(response.data.results);
    }

    async onDefault() {
        const defaultResponse = await unsplash.get("/photos/random", {
            params: {
                count: 30
                // orientation: "landscape"
            }
        });

        this.setState({ defaultImages: defaultResponse.data });
    }

    componentDidMount() {
        this.onDefault();
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <Searchbar onSubmit={this.onSearchSubmit} />

                <ImageList images={this.state.images} />
                <ImageList images={this.state.defaultImages} />
            </div>
        );
    }
}

export default App;
