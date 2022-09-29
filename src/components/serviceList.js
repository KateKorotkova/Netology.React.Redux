import {useSelector, useDispatch} from 'react-redux';
import {removeService, changeServiceField} from '../store/actions/creators';


export default function ServiceList({items}) {
    //const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    
    
    const handleRemove = id => { dispatch(removeService(id)) };
    

    const handleEdit = id => {
        let item = items.find(x => x.id == id);
        dispatch(changeServiceField("name", item.name));
        dispatch(changeServiceField("price", item.price));
        dispatch(changeServiceField("id", item.id));
    }
    

    return (
     <ul>
        {items.map(o => (
            <li key={o.id}>
                {o.name} {o.price}
                <button onClick={() => handleRemove(o.id)}>✕</button>
                <button onClick={() => handleEdit(o.id)}>!</button>
            </li>
        ))}
     </ul>
    )
}
    