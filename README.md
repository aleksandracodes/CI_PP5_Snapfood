# SnapFood <img src="https://ci-pp5-snapfood.herokuapp.com/static/media/SnapFood-logo.cc1cf20d.png" style="width: 90px; height:60px;">

**Developer: Aleksandra Haniok**

💻 [Visit live website](https://ci-pp5-snapfood.herokuapp.com/)

![Mockup image](docs/readme/ami-responsivedesign-snapfood.jpg)


## Table of Contents
  - [About](#about)
  - [User Stories](#user-stories)



## About

SnapFood is a platform where users can share photos of food they made, ordered or like with the rest of the community.
Everyone can like other users' pictures and share their opinion on a certain post. Users can also follow their favourite profiles and easily see updates on their activity. SnapFood is an app for all food lovers who want to get inspired or share inspirations with others.

## Project Goals

The goal for this project was to build a platform to enable users to interact with others in various ways such as commenting posts or following their profile.
The idea was to keep the portal very informal and for the entertainment purpose.

The key functionality aspects:
- simple and intuitive navigation across all pages
- user authentication
- user interaction via posts, comments, likes, followers
- user profiles with their description and images
- CRUD functionality for posts, comments, likes, followers and profile information
- posts filtering by title, author and category
- posts filtering by liked posts and followed users posts
- responsiveness to allow users use the app on various devices


## User Stories

### First sprint

#### Navigation 

- As a user, I can see the home page with explanation of the portal, so that I know what the app is about
- As a user, I can see a navbar on every page, so that I can easily return to main page, find a post and access my profile page
- As a logged-out user, I can see log in and sign up options so that I can log in or sign up
 
#### Authentication 

- As a new user, I can create a new account so that I can access the app 
- As a returning user, I can log in with my existing credentials so that I can access the app 
- As a user, I can maintain my logged-in status until I choose to log out so that my use of app is not compromised 

### Second sprint

#### Posts 

- As a user, I can create posts so that I can share my food images with the community 
- As a user, I can categories my post so that other users can find it by its tag 
- As a user, I can view other people’s posts so that I can get inspired by their images 
- As a user, I can view the details of a single post so that I can see its full description and other users’ comments 
- As user, I can like a specific post so that I can show my interest 

#### The Post Page 

- As a user, I can view the details of a single posts so that I can read other users’ comments and know what they think about it
- As a user, I can view a category for the post so that I know what cuisine the food image relates to 
- As user, I can add comments to a post so that I can share my thoughts about the post with the community 
- As a user, I can see when the comments were created so that I know how old a comment is 
- As an owner of a comment, I can edit my comment so that I can update my existing comment 
- As an owner of a comment, I can delete my comment from the post 
- As a post owner, I can edit my post title and description so that I can make corrections or update my post after it was created

### Third sprint

#### Main page 

- As a user, I can view posts ordered by most recently added so that I am up to date with the newest content 
- As a user, I can keep scrolling through the posts so that they are loaded automatically and I don't have to select the next page 
- As a user, I can see the posts I liked so that I can find the posts I enjoy the most
- As a user, I can view posts from users I followed, so I can follow their activity
- As a user, I can view posts category tags, so that I choose posts to display that I’m particularly interested in
- As a user, I can search for posts with keywords so that I can find the posts I am interested in 

#### User Profile Page 

- As a user, I can add my profile avatar so that other users can easily identify me 
- As a user, I can view user's avatars so that I can easily identify other users of the app 
- As a user, I can update the picture and description of my profile on the profile page so that other users view up to date info about me 
- As a user, I can change password to my account so that I can keep my profile secure 

### Fourth sprint

#### Other Users Profiles 

- As a user, I can view all the posts by a specific user so that I can see their latest activity 
- As a user, I can view other users’ profiles with their profile description, number of posts, followers and users followed so that I can learn more about them 
- As a user, I can follow and unfollow other users so that I can get specific users’ posts in my posts feed 
- As a user, I can see a list of the most followed profiles so that I can see which profiles are popular 

#### General

- As a site owner I want my site to be fully responsive so that users can you use it on different devices
- As a site owner, I want users to come to a 404 error page so that they don't have to user the browser back button if they enter a URL that does not exist
- As a site user, I can view feedback messages, so that I know if my comment/profile/post has been updated


##### Back to [top](#table-of-contents)


## Design

### Colours

The colour scheme for this application was inspired by the pallet found on [Pinterest](https://i.pinimg.com/originals/75/60/95/7560957eb677f91110b4677515b911db.jpg). It was the aim to keep the colours neutral and warm to create a calming feeling and gather user's focus on the photographs without distraction by other graphics on the website. App background color is light (gainsboro) grey with matching navbar and the containers with the main content are white. Action buttons, highlight of text and search bar have contrasting colour of darker schade of 'salmon'. Bootstrap 'secondary' variant was also used, eg. for the post category badges.
These colours were used throughout all the pages in such a way as to ensure adequate contrast and good user experience.

<img src="docs/readme/color-scheme-snapfood.jpg">

### Fonts

Google Fonts were implemented on the website. Inter with sans-serif as fallback was used thoughout the site to ensure high legibility of the content.
Inter features a tall x-height to aid in readability of mixed-case and lower-case text.

### Wireframes

<details><summary>Big screens - laptop & desktop</summary>
<img src="docs/wireframes/wireframes-snapfood-desktop.png">
</details>
<details><summary>Medium screens - tablet</summary>
<img src="docs/wireframes/wireframes-snapfood-tablet.png">
</details>
<details><summary>Small screens - mobile</summary>
<img src="docs/wireframes/wireframes-snapfood-mobile.png">
</details>

##### Back to [top](#table-of-contents)


## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - React (17.0.2)

### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP
- [ClassNames] - JavaScript utility for conditionally joining classNames together, used in the FeedbackMsg component
- [JWT](https://jwt.io/) - library to decode out JSON Web token. Used to prevent unauthenticated user from making extra network requests to refresh their access token. Also used to remove the timestamp from the browser when the user refreshes token expires or the user logs out.
- [Popper](https://popper.js.org/) - a 3rd party library used by React-Bootstrap. Used to make sure the dropdown menus position is fixed on all browsers.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) - Bootstrap library used for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - used to load content (posts/comments) automatically as the user scrolls towards the bottom of the page
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - used for dynamic routing (controls what the user sees depending on the URL they have accessed in the browser)

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up at the top of this README.md file
- [Balsamiq](https://balsamiq.com/) to create the projects wireframes
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) to store static files
- [Coolors](https://coolors.co/?home) was used to create the color scheme palette
- [Favicon.io](https://favicon.io) for making the site favicon
- [Fiverr](https://www.fiverr.com/logo-maker/saved-logos?tab=designs) - app logo was created using Fiverr
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - import of Inter font
- [Git](https://git-scm.com/) was used for version control within VSCode to push the code to GitHub
- [GitHub](https://github.com/) was used as a remote repository to store project code
- [Gitpod](https://gitpod.io) was used to host a virtual workspace
- [Heroku Platform](https://id.heroku.com/login) was used to deploy the project into live environment
- [Remove.bg](https://www.remove.bg/) was used to remove background on app images


##### Back to [top](#table-of-contents)


## Front-End

### React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Its primary goal is to make it easy to reason about an interface and its state at any point in time, by dividing the UI into a collection of independent and reusable components ([source](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)).


There were various components created and reused across this application.

- `<Asset />` - multipurpose reusable compontent which displays different versions of the component depending on the props we pass to it. 
  - loading spinner (from React Bootstrap) when content is being loaded
  - image with src and alt attribute
  - paragraph with a message

- `<Avatar />` - resuable component, used to render profile images in the UI. Passed props allow for setting image source and size and adjust image dimensions depending on where the component is rendered. Example of use include the `<NavaBar />` component, Post page or the Profile page. On mobile screens Avatar component within the Profile Page will be significantly bigger than on other screen sizes.

- `<DropdownMenu />` - reusable component, used to render the dropdown menu which allows user to edit or delete their own posts orcomments, and also edit their profile or change profile password.

- `<FeedbackMsg />` - component for displaying feedback messages to the user upon editing/deleting comments, deleting post, updating profile information or a password.

- `<Landing />` - specific component for displaying a landing page for new / not logged-in users, which contains links to sign up and log in, in addition to the navbar.

- `<LikeFeedAddPost />` - reusable component containing 3 icons to add a post, show liked post or show posts by profiles the users follows. Displayed on various pages of the app.

- `<NavBar />` - reusable component with the content depending on the login status of the user. For logged in user it shows icon link to the main posts page and user avatar/picture. For those who are not logged in, it displays icon links to sign up or log in instead of the avatar. The component is used on each page of the app.

- `<PageNotFound />` - specific component for displaying a 404 graphic error message with a return to menu button when user enters the url which does not exist.

- `<PasswordCriteria />` - reusable component containing password criteria which are displayed on button hoover or focus. Used on sign up page and profile password change page.

- `<PopularProfiles />` - reusable component showing first three most followed profiles in the app. The component displays user avatar, name and follow/unfollow button. These buttons are hidden on medium screen size devices. The component is used across the app together with the `<LikeFeedAddPost />` component and post categories badges on relevant pages.

## Back-End API

### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://github.com/aleksandracodes/snapfood-drf-api).


## Credits

### Images

- 404 picture tweaked using Paint taken from [here](https://www.istockphoto.com/pl/wektor/broken-danie-gm1132925979-300527202)
- No results found picture taken from [here](https://www.vecteezy.com/vector-art/7104553-search-no-result-not-found-concept-illustration-flat-design-vector-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon)
- Speech bubble image on comments page with no comments was taken from [here](https://www.freepik.com/free-vector/illustration-speech-bubble_2606145.htm#query=chat&position=17&from_view=search)
- The lading page image of hands holding smartphone and taking photo of food comes from [here](https://media.istockphoto.com/vectors/hands-holding-smartphone-and-capture-photo-of-healthy-food-in-modern-vector-id1263096919?k=20&m=1263096919&s=612x612&w=0&h=YQ70hwbYb1LcCl16TvpzVv03lIVfiQ848fLhFCvW4BY=)
- The thumb-up icon for like/unlike was taken from [here](https://image.shutterstock.com/shutterstock/photos/1391842757/display_1500/stock-vector-vector-hand-like-icon-template-good-food-logo-illustration-with-fork-sign-line-symbol-for-farmers-1391842757.jpg) and tweaked using Paint
- Site logo was created with [Fiverr Logo Maker](https://www.fiverr.com/logo-maker/brief/logo_name?brief_id=0d212c49-2416-401d-99a5-780b9b233ff7)
- Upload image icon taken from [here](https://static.thenounproject.com/png/741679-200.png) combining [this](https://cdn-icons-png.flaticon.com/512/80/80320.png) image using Paint