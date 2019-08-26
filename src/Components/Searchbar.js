import React from "react";

class Searchbar extends React.Component {
    state = {
        term: ""
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field category search">
                        <label>Search Images</label>
                        <div className="ui icon input">
                            <input
                                type="text"
                                placeholder="Search"
                                value={this.state.term}
                                onChange={e =>
                                    this.setState({ term: e.target.value })
                                }
                            />
                            <i className="search icon" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;
