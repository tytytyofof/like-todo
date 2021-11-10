
import './do-list-item.css'

function DoListItem(props) {
    return(
        <li className="do-list-item">
            <span>{props.name}</span>
            <div className="some-btn">
                <button className="angle-up">
                    <i className="fas fa-angle-up"> </i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"> </i>
                </button>
                <i className="fas fa-star"> </i>
            </div>
        </li>
    )

}

export default DoListItem;