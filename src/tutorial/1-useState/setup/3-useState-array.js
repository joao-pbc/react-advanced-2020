import React, { useState } from 'react';
import { data } from '../../../data';



const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      {people.map((people) => {
        const {id, name} = people;
          return <h2 key = {id} >{ name }</h2>
        }
      )
      }
    </>
  )
};

export default UseStateArray;
