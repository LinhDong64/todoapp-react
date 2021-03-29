import { Component } from 'react';
import Item from './Item';

class ListTask extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }

    render() {
        const items=this.props.items;
        const eleItem=items.map((item, index)=>{
            return <Item onClickEdit={this.props.onClickEdit} onClickDelete={this.props.onClickDelete} key={index} item={item} index={index}></Item>
        })

        return (
            <table className="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">#</th>
                        <th scope="col">Task</th>
                        <th scope="col" className="text-center">Level</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {eleItem}
                </tbody>
            </table>
        )
    }
}

export default ListTask;