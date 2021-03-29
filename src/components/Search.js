import { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            strSearch: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleSearch() {
        this.props.onClickGo(this.state.strSearch);
    }

    handleChange(event) {
        this.setState({
            strSearch: event.target.value
        })
    }

    handleClear() {
        this.setState({
            strSearch: '',
        });
        console.log("handleClear: ", this.state.strSearch);
        this.props.onClickGo('');
    }

    render() {
        return (
            <div className="col p-0">
                <form className="form-inline">
                    <div className="input-group" style={{ width: 90 + '%' }}>
                        <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for ..." />
                        <input onClick={this.handleSearch} type="button" value="Go!" className="bg-info border text-white rounded" />
                        <input onClick={this.handleClear} type="button" value="Clear" className="btn btn-warning border text-white rounded" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;