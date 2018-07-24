### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)

- React is a modern, efficient answer to complex UI applications
    false
- React is a full stack framework for modern web applications
    false
- React is a flexible library that plays the role of V in an MVC framework
    true


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 // smart components manage state, this is where all the thinking happens
    dumb ones just manage the view, only concerned with how they look, typically rendered by a smart component


 // "Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on."
 // "Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works."


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 // yarn add adds a package, the package.json and node.modules (yarn.lock as well) will automatically be updated after we do this.


 // "yarn add package-name installs the package from the npm registry unless you have specified another one in your package.json."


#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import { Component } from 'react';

class Recipes extends Component{
    constructor(props){
        super(props)
        this.state = {
            recipes: [
                {name: 'Meatballs'},
                {name: 'Mac & Cheese'}
            ]
        }
    }

    render() {

        return (

            let recipes = this.state.recipes.map(function(recipe){
                return(
                    <ul>
                        <li key={recipe.name}>{this.state.recipe.name}</li>
                    </ul>
                )       
            })
        );
    }
}

export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)

 // radio, submit, date


 // color, date, datetime-local, email, month, number, range, search, tel, time, url, week, text, submit, checkbox


 #### 6. What happens when we call setState()?

 // It passes an object that will eventually be put into the Components current state


 // "this.setState function, which will accept an Object that will be eventually merged into Components current state. While it is technically possible to alter state by writing to this.state directly, it will not lead to the Component re-rendering with new data, and generally lead to state inconsistency.""


 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer


 //Googled Answer


#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

    My experience with tic-tac-toe was that it was very hard to get each individual box in the flex-box to have individual values instead of all changing together. Pair programming really helped with this project because it allowed me to both drive and navigate We were able to find a more efficient way to write our code by sharing ideas. It was great to work from scratch, it made me more confident in my ability to write code and create projects on my own.

#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.

    

#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
