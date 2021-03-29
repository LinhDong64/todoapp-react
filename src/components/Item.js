import { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    showElementLevel(level) {
        let eleLevel = <span className="label-level level-default">Small</span>;
        if (level === 1) {
            eleLevel = <span className="label-level level-info">Medium</span>
        } else if (level === 2) {
            eleLevel = <span className="label-level level-danger">High</span>
        }
        return eleLevel;
    }

    handleDelete(id) {
        this.props.onClickDelete(id);
    }

    handleEdit(item) {
        this.props.onClickEdit(item);
    }

    render() {
        const { item } = this.props;
        const index = this.props.index;

        return (
            <tr>
                <th scope="row" className="text-center">{index + 1}</th>
                <td>{item.name}</td>
                <td className="text-center ">
                    {this.showElementLevel(item.level)}
                </td>
                <td>
                    <button onClick={() => this.handleEdit(this.props.item)} type="button" className="btn btn-warning">Edit</button>
                    <button onClick={() => this.handleDelete(this.props.item.id)} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;