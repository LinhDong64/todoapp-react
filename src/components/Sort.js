import { Component } from 'react';

class Sort extends Component {

    constructor(props) {
        super(props);

        this.state = {
            indexSortedItem: -1,
        }

        this.handleSelectedItemClick = this.handleSelectedItemClick.bind(this);
    }

    handleSelectedItemClick(item, index) {
        this.setState({
            indexSortedItem: index,
        })

        let itemName = item.toLocaleLowerCase().split(' ');
        console.log(itemName);
        this.props.onClickSort(itemName[0], itemName[1]);
    }

    handleSortedName(name) {
        return name.split(' ').join(" - ");
    }

    render() {
        const sortedItems = ["Name ASC", "Name DESC", "Level ASC", "Level DESC"];

        const eleSortedItems = sortedItems.map((item, index) => {
            return <li onClick={() => this.handleSelectedItemClick(item, index)}
             key={index} className="dropdown-item">{item}</li>
        })

        let eleSortedItem = null;
        if (this.state.indexSortedItem === -1) {
            eleSortedItem = <div className="type-sort">{this.handleSortedName(sortedItems[0])}</div>
        } else {
            eleSortedItem = <div className="type-sort">{this.handleSortedName(sortedItems[this.state.indexSortedItem])}</div>
        }

        return (
            <div className="col col-sm-3">
                <div className="row">
                    <div className="dropdown">
                        <button className="btn border dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select by
                        </button>
                        <div >
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {eleSortedItems}
                            </ul>
                        </div>

                    </div>
                    {eleSortedItem}
                </div>
                <div></div>
            </div>
        )
    }
}

export default Sort;