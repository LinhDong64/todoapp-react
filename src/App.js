import './App.css';
import Title from './components/Title';
import MainControls from './components/MainControls';
import FormAddTask from './components/FormAddTask';
import ListTask from './components/ListTask';
import { Component } from 'react';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';

// import tasks from './mocks/task';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      itemSelected: null,
      isShowForm: false,
      strSearch: '',
      orderBy: 'name',
      orderDir: 'asc'
    }

    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount(){
    let items = JSON.parse(localStorage.getItem('task'))||[];
    this.setState({
      items: items
    })
  }

  handleToogleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    })
  }

  closeForm() {
    this.setState({
      isShowForm: false,
    })
  }

  handleSearch(value) {
    this.setState({
      strSearch: value
    })
  }

  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    })
  }

  handleDelete(id) {
    let {items} = this.state;
    items = items.filter((item) => item.id !== id);
    this.setState({
      items: items
    });

    localStorage.setItem('task', JSON.stringify(items));
  }

  handleSubmit(item) {
    let {items} = this.state;

    if (item.id !== '') {// Edit task
      items.forEach(elm=>{
        console.log("edit");
        if(elm.id === item.id){
          elm.name = item.name;
          elm.level = item.level;
        }
      })
    } else {// Add task
      console.log("add");
      this.state.items.push({
        id: uuidv4(),
        name: item.name,
        level: item.level
      });
    }

    this.setState({
      items: items,
      isShowForm: false
    });

    localStorage.setItem('task', JSON.stringify(items));
  }

  handleEdit(item) {
    this.setState({
      itemSelected: item,
      isShowForm: true,
    });
  }

  render() {
    //let itemsOrigin = this.state.items;
    let itemsOrigin = [...this.state.items];
    let items = [];
    let { isShowForm, strSearch, orderBy, orderDir, itemSelected } = this.state;
    let eleForm = null;

    console.log(this.state.itemSelected);
    //SEARCH
    // if (search.length > 0) {
    //   itemsOrigin.forEach((item) => {
    //     if (item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1) {
    //       items.push(item);
    //     }
    //   })
    // }else{
    //   items = itemsOrigin;
    // }

    items = filter(itemsOrigin, (item) => {
      return includes(item.name.toLocaleLowerCase(), strSearch);
    });


    //SORT
    items = funcOrderBy(items, [orderBy], [orderDir])

    if (isShowForm) {
      eleForm = <FormAddTask itemSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm}></FormAddTask>
    }

    return (
      <div className="App">
        <Title></Title>
        <MainControls onClickAdd={this.handleToogleForm}
          isShowForm={isShowForm} onClickSearchGo={this.handleSearch}
          onClickSort={this.handleSort} ></MainControls>
        {eleForm}
        <ListTask onClickEdit={this.handleEdit} onClickDelete={this.handleDelete} items={items}></ListTask>
      </div>
    );
  }

}

export default App;
