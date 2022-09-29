import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import ServiceList from './serviceList';
import {filterService} from '../store/actions/creators';


export default function ServiceFilter() {
    const [nameFilter, setNameFilter] = useState('');

    const items = useSelector(state => state.serviceList);
    let dispatch = useDispatch();

    
    const handleNameFilterChange = (e) => {
        setNameFilter(e.target.value);
    };

    const handleFilterRecords = () => {
        dispatch(filterService(nameFilter));
    };


    return (
        <>
            <input name='nameFilter' onChange={handleNameFilterChange} value={nameFilter} />
            <button onClick={handleFilterRecords}>Filter</button>
            <br/>
            <ServiceList items={items} />
        </>
    )
}
    