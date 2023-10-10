import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
    return (
        <section className='colors'>
            {colors.map((color, index) => (
                <SingleColor key={nanoid()} color={color} index={index} />
            ))}
        </section>
    );
};

export default ColorList;
