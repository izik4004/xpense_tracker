import React from 'react';
import {pricing} from "../data"
import {HiCheck, HiOutlineArrowNarrowRight} from "react-icons/hi"

const Pricing = () => {
  const [index, setIndex] = useState(1);
  const {title, cards} = pricing
  return (
    <section className="section">
        <div className='container mx-auto'>
            <h2>{title}</h2>
        </div>
    </section>
  )
};

export default Pricing;
