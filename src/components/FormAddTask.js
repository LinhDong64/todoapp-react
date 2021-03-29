import { Component } from 'react';

class FormAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskId: '',
            taskName: '',
            level: 1
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(this.props.itemSelected);
    }

    handleCancel() {
        this.props.onClickCancel();
    }

    handleInputChange(event) {
        console.log("handleInputChange");
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit(event) {
        let item = {
            id: this.state.taskId,
            name: this.state.taskName,
            level: +this.state.level
        }
        this.props.onClickSubmit(item);
        event.preventDefault();
    }

    componentDidMount(){
        console.log("componentDidMount");
        let itemSelected = this.props.itemSelected;
        if(itemSelected !== null){
            this.setState({
                taskId: itemSelected.id,
                taskName: itemSelected.name,
                level: itemSelected.level
            })
        }
    }

    componentWillReceiveProps(nextProps){
        let item = nextProps.itemSelected;
        if(nextProps !== null){
            this.setState({
                taskId: item.id,
                taskName: item.name,
                level: item.level
            })
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("componentWillReceiveProps", props);
    //     console.log("componentWillReceiveProps", state);
    //     if(props.itemSelected.id !== state.id){
    //         console.log("modified state");
    //         return {
    //             taskId: props.itemSelected.id,
    //             taskName: props.itemSelected.name,
    //             level: props.itemSelected.level
    //         }
    //     }
    //     return null;
    // }

    render() {
        return (
            <div className="container p-0">
                <div className="row">
                    <div className="col p-0"></div>
                    <div className="col col-sm-3"></div>
                    <div className="add-task-form">
                        <form onSubmit={this.handleSubmit} className="form-inline">
                            <div className="form-group">
                                <label htmlFor=""></label>
                                <input value={this.state.taskName} type="text" name="taskName" onChange={this.handleInputChange} id="" className="form-control" placeholder="Task Name"></input>
                                <div className="dropdown" style={{ marginLeft: 2 + 'px', marginRight: 2 + 'px' }}>
                                    <div >
                                        <select name="level" value={this.state.level} onChange={this.handleInputChange} className="btn border dropdown-toggle">
                                            <option value={0}>Small</option>
                                            <option value={1}>Medium</option>
                                            <option value={2}>High</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <input name="btnSaveTask" id="btnSaveTask" className="btn btn-primary" type="submit" value="Save"></input>
                                    <input onClick={this.handleCancel} name="btnCancelTask" id="btnCancelTask" className="btn btn-light" type="button" value="Cancel"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default FormAddTask;