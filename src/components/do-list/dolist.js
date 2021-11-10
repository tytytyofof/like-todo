import './dolist.css'
import DoListItem from "../do-list-item/do-list-item";

function Dolist({data}) {
    const elem = data.map(item => {
            const {name, id} = item
            return ( <DoListItem name={name} key={id}/> )
    }
)

    return (
        <ul className="list">
            {elem}
        </ul>
    )

}

export default Dolist;