![Limio Original Gradient](https://user-images.githubusercontent.com/11695131/215449845-28b24f48-f2d9-4bfd-8b40-08e5617336cc.png)

## Limio Code Test

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React, React Hooks with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * React Testing Library for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * Expanding our SDK to allow more flexibility for our customers
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The repository contains some simplified examples of Limio Subscription Commerce components. To run the application run:

`yarn install`
`yarn start:dev`

Some details of the implementation:

`@limio/sdk`: This is a simplified version of the Limio SDK, to find details of what functions are available and what they return please read our external documentation: https://developers.limio.com/limio-sdk/getting-started

`@limio/design-system`: This is using Reactstrap - a React implementation of Bootstrap. For all available components and how to use them please read the documentation here: https://reactstrap.github.io/?path=/story/home-installation--page

### Questions

Please answer the following questions:
    
1. The code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?

   I think this was done for three main reasons: (i) organization, (ii) accessibility, and (iii) collaboration.

Regarding organization, the code base being structured in this way means that it follows React best practices and that it helps developers navigate their way through the code upon opening the files for the first time. This means that the code is both easy to replicate and maintain for other developers who start working on the project at a later date. For example, given that you can save a button separately, it’s easy for me (and other engineers) to reuse this same button in various parts of the code without having to write the code from scratch. Additionally, because the code only contains this particular button, it’s not only easy to navigate to, but also to maintain within the code base.

Regarding accessibility, the code being written in this way means that the project is easier to scale no matter how large it is or becomes. On top of this, it facilitates finding necessary components, since the components are all named uniquely. That means that with ‘command’ + ‘p’, I can find the exact command that I’m looking for.

Finally, regarding collaboration, organizing the code this way means that two developers will not interfere with each other’s work. When working on full-stack applications, multiple developers often work simultaneously on the code independently of the each other, meaning that in this case, they no longer run the risk of accidentally overwriting a colleague’s code or changes.

The main disadvantage of this approach is that as the number of files grows, if the software engineering team doesn’t follow best practices or naming conventions, the code can easily become confusing and it can be difficult to find the exact component that you’re looking for.

2. Thinking about a production ready app, what do you think is missing from all the examples?

The code base given to me was in a mixture of TypeScript and JavaScript, but all of the files were JavaScript. In a production-ready app, the code base needs to be entirely in the same language. Personally, I selected TypeScript, because I personally find bug prevention and type management easier in TypeScript.

Additionally, in the code base given to me, all files within the various component folders are named index.js. Since this does not following naming best practices, it made navigating between the files confusing and more difficult than it would have been had naming convention best practices been followed.

Finally, the code is not connected to a server at the moment. To make the app production ready, I would integration a login page with a form of two-factor authentication, such as Google’s OAuth 2.0, to promote better user security and mitigate data privacy concerns. If I implemented an access token, I would also be able to store the user’s payment information for future purchases and send a confirmation email once a transaction was completed.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

Unfortunately, I don’t have commercial experience using Redux, because in my last role, we used GraphQL to pull data from our backend and passed data between components using React props. However, I did complete a Redux course and am therefore aware that Redux is a powerful state management tool that is both predictable and well-organized, especially for complex applications at a large scale in which multiple components need to interact.

4. Are you familiar with useEffect React Hook? When would you use it? What are some disadvantages of its overuse? 

  Yes, I’m quite familiar with the useEffect React Hook, as I used it frequently at Cimple. I found it quite useful  whenever I had to update a component’s ‘DOM’ but did not want to have to refresh the entire page. useEffect is a React hook that is used in ‘functional components’ that combine the following class components: (i) componentDidMount, (ii) componentDidUpdate, and (iii) componentWillUnmount.

One of the main advantages of using useEffect is updating the ‘DOM’ without having to refresh the entire page. For example, when we fetched data that came from external APIs or our backend to populate fields on a page, the useEffect is called and only the component that receives these new data points is refreshed, which then updates the ‘DOM’. Another example is when you have a button that totals the number of clicks in real time, I could combine this with another React hook useState to monitor this live. Each time the button is clicked, the useState variable is updated and each time the useState variable changes, this triggers the useEffect to update the ‘DOM’ with the updated number of clicks.

Still, there are a few disadvantages. They include the fact that creating a lot of dependencies on a useEffect can hurt the performance of a web page, since it’ll cause the page to re-render too many times, leaving the application slow, prone to bugs, and difficult to read.

Additionally, drawing on my experience implementing Cimple’s infrastructure, when it comes to E2E testing in Cypress, asynchronous operations inside the useEffect can cause problems if the code isn’t well-structured.

### Coding Challenges

To run the app simply, 

1. Update the page to add a subscription to a Basket:
  * Adding a subscription should also calculate the current total of the cart
  * If you are familiar with Redux, you can use that to control the state
2. Update the page so that the Basket button opens up a Basket and displays some details of the current Order:
  * Price
  * Line items with a description
  * Basket total
  * Ability to remove that item from Basket and total changing
3. If you get time, implement something that you think that the app could do and is cool and what you think makes a good checkout experience.
  * If you run out of time describe what other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





