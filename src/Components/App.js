import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {
        images: []
    };

    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    async onSearchSubmit(term) {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: term,
                page: 30,
                per_page: 50
            }
        });
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <Searchbar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
