import React from 'react'
import Person from './Person';

const PersonList = () => {
    const people = [
        {
            img: 22,
            job: "Developer",
            name: "Arush",
            message: "Hello World"
        },
        {
            img: 20,
            job: "Footballer",
            name: "John",
            message: "Some Other Message"
        },
        {
            img: 54,
            job: "Actor",
            name: "Jacobs",
            message: "Some Other Message"
        }
    ]

    return (
        <section className='flex flex-col items-center justify-center pt-10 bg-gray-700'>
            {people.map((person) => {
                return <Person key={person.img} person={person} />
            })}
        </section>
    );
}

export default PersonList