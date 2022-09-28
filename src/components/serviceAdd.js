import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService} from '../actions/creators';


export default function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();
    

    const handleInputChange = evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceField(name, value));
    }


    const handleSubmit = evt => {
        evt.preventDefault();
        if (!item.id) {
            dispatch(addService(item.name, item.price));
            return;
        }
        dispatch(editService(item.id, item.name, item.price));
    }


    const handleCancel = evt => {
        evt.preventDefault();
        dispatch(changeServiceField("name", ''));
        dispatch(changeServiceField("price", ''));
        dispatch(changeServiceField("id", ''));
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleInputChange} value={item.name} />
            <input name='price' onChange={handleInputChange} value={item.price}/>
            <button type='submit'>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    );
}
   