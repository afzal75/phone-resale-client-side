import React from 'react';

const Blogs = () => {
    return (
        <div className='w-1/2 m-auto text-center'>
            <h4 className='text-2xl'>Question: What are the different ways to manage a state in a React application?</h4>
            <p>Answere: As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
            <h4 className='text-2xl'>Question: How does prototypical inheritance work?</h4>
            <p>Answere: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
            <h4 className='text-2xl'>Question: What is a unit test? Why should we write unit tests?</h4>
            <p>Answere: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            <h4 className='text-2xl'>Question: React vs. Angular vs. Vue?</h4>
            <p>Answere: Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
    );
};

export default Blogs;