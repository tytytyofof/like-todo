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
                {name: 'Ihor', id: 1},
                {name: 'Alisa', id: 1}
            ]

        }

    }


    render() {
        return (
            <div className="App">
                <HeaderList/>
                <Dolist data={this.state.data}/>
                <AddItem/>
            </div>
        );
    }


}

export default App;
