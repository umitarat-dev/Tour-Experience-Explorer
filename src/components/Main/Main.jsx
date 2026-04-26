import './Main.scss';
import { data } from '../../helpers/data';
import Card from './Card';

const Main = () => {
    
    // console.log('Ne geliyor:', data);
    
    return (
        <div className='card-container'>
            {/* {data.map((item, index) => <Card {...item} key={index}/>)} */}
            {data.map((item) => <Card {...item} key={item.id}/>)}
        </div>
    )
}

export default Main;