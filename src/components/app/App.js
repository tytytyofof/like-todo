import './App.css';
import {Component} from "react";
import HeaderList from "../header/header-list";
import Dolist from "../do-list/dolist"
import AddItem from "../add-item/add-item";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Bogdan', id: 1},
                {name: 'Ihor', id: 2},
                {name: 'Alisa', id: 3}
            ]

        }
        this.maxId = 4;

    }

    AddItem = (e, name) => {
        e.preventDefault();
        const newItem = {
            name,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return{
                data: [...data, newItem]
            }
        })
    }


    render() {
        return (
            <div className="App">
                <HeaderList/>
                <Dolist data={this.state.data}/>
                <AddItem addItem={this.AddItem}/>
            </div>
        );
    }


}

export default App;
