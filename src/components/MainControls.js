import { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class MainControls extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.onClickAdd()
    }

    render() {
        //let {orderBy, orderDir} = this.props;

        let eleButton = <button onClick={this.handleAdd} type="button" name="" id="" className="btn btn-primary w-100">Add Task</button>;
        if (this.props.isShowForm) {
            eleButton = <button onClick={this.handleAdd} type="button" name="" id="" className="btn btn-success w-100">Close Form</button>;
        }

        return (
            <div className="container p-0">
                <div className="row">
                    <Search onClickGo={this.props.onClickSearchGo}></Search>
                    <Sort onClickSort={this.props.onClickSort}></Sort>
                    <div className="col p-0">
                        {eleButton}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainControls;