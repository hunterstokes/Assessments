# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method in ruby is always within a class and allows it to be called in other areas of the code later on. Functions, in JS must adhere to scope and cannot be called anywhere outside of their scope in the code. However, they both are used to take in an object and do something to that object.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.

A class can take in another broader class that gives the smaller class the same attributes of the larger class. This is also done when making more and more specific objects. For example cars, a Ford could inherit the characteristics of a car but a car is not necessarily a Ford.


[Googled Answer] "Inheritance is a relation between two classes. We know that all cats are mammals, and all mammals are animals. The benefit of inheritance is that classes lower down the hierarchy get the features of those higher up, but can also add specific features of their own. If all mammals breathe, then all cats breathe. In Ruby, a class can only inherit from a single other class. Some other languages support multiple inheritance, a feature that allows classes to inherit features from multiple classes, but Ruby doesn't support this."


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer: rspec is a resource programmers working in Ruby have to test their code to make sure it passes all tests they've written. Typically a programmer would write the RSpec test before they write their code to insure they can write code that will be the best and pass the requirements of the test.  

//Googled Answer: "RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code. It is a behavior-driven development (BDD) framework which is extensively used in the production applications."


#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?
it is string interpolation it allows us to pass a value set to our variable to be inside the string.

```ruby
x = 1022
puts "I am printing a random number #{x}"
```

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer: I think testing is good for strong reusable code, however I also find it tedious. Implementing it into my code may make me take longer to write my whole program, however the overall code of the app will be much stronger.

//Googled Answer: "BDD keeps the focus on the end user and their needs. BDD makes you take a step back and look at the app from the user's perspective... BDD has documentation built in.... there are often data needs that cant be solved with simple fixtures and factories."


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable

//"An instance variable has a name beginning with @ , and its scope is confined to whatever object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables."

#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)

Choose one of these resources and go through the material (not for hours, only looking for around 10-20min of your time) then come back here and list a few new things you learned about Ruby.
