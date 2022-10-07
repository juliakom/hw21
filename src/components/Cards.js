import React, {useState} from 'react';

export const style = {
  block: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '50px',
    border: '2px solid white',
  },
  element: {
    paddingBottom: '20px',
  }
}

const cardsInfo = [
  {
    name: 'Jon',
    phone: '+380123456789'
  },
  {
    name: 'Alice',
    phone: '+380123123123'
  },
  {
    name: 'Bob',
    phone: '+380123213543'
  }
]

export function Card() {
  const [value, setValue] = useState('Select contact');
  const click = (name, phone) => {
    setValue(`Selected: ${name} ${phone}`)
  };
  const contact = cardsInfo;
  return (
    <React.Fragment>
      <p> {value} </p>
      {contact.map((card, index) => (
        <div 
        key={`card-${index}`} 
        style={style.block} 
        onClick={() => click(card.name, card.phone)}>
          <h1>{card.name}</h1>
          <p>{card.phone}</p>
        </div>
      ))
      }
    </React.Fragment>
  )
}