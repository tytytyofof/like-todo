import './add-item.css'
import {Component} from "react";

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    inputData = (e) => {
        this.setState({
            name: e.target.value
        })
    }


    render() {
        const {addItem} = this.props
        return (
            <div className="add">
                <form action="">
                    <input type="text" onChange={this.inputData}/>
                    <button type='submit' onClick={(e) => addItem(e, this.state.name)}>Добавить</button>
                </form>
            </div>
        )
    }


}

export default AddItem;