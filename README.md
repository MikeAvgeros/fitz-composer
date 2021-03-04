![Multi Device Website Mockup](https://www.dropbox.com/s/foxlncl7rsuu2o1/MS1_TechsiniMockup.png?raw=1)

# Introduction

### This is my First Milestone Project - User Centric Frontend Development - for the Code Institute. 

### I have created a portfolio website for a film composer / record producer under the alias 'F!tz'.

### The idea is to create a one-page scrolling site which quickly and effectively showcases the owner's work and skill set with a simple and easy to use navigation.

### You can view the live site [here](https://mikeavgeros.github.io/fitz-composer/)

<br>

# Table of Contents:
- [User Experience](#user-experience)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

<br>

# User Experience

## Strategy Plane

-   ### Target Audience

    - Music Artists
    - Music Producers
    - Film Directors
    - Media Companies

-   ### User's Objectives & Goals

    -   #### First Time User's Goals
        - As a First Time User, I want to quickly and easily identify if the site's owner will be suitable for my project.
        - As a First Time User, I want to be able to quickly and easily navigate the site to find suitable content that will aid my decision.
        - As a First User, I want to be able to quickly and easily contact the site's owner for a project.

    -   #### Returning User's Goals
        - As a Returning User, I want to find more information about the different services offered.
        - As a Returning User, I want to find out about more information about the site owner's skills and experience.
        - As a Returning User, I want to find out what previous clients and co-workers think of the site's owner.

    -   #### Frequent User's Goals
        - As a Frequent User, I want to be able to see if there are any newly added work examples, photos and reviews.
        - As a Frequent User, I want to check to see if the site's owner offers any new services.
        - As a Frequent User, I want to have a section where I can follow the owner's social media and other websites and keep up to date with his work.

-   ### Owner's Objectives & Goals

    #### The owner of this website is a freelance music composer / record producer who wants to attract clients and work on interesting projects.

    -   #### Owner's Goals
        - As the Owner, I want Users to contact me for a project using the contact form.
        - As the Owner, I want to present my services and skills in the best of light.
        - As the Owner, I want to work on a variety of interesting projects.
        - As the Owner, I want Users to connect with me on social media and subscribe to my mailing list.

## Scope Plane

-   ### Home Page
    - Users can see a full screen image of a musician playing the guitar which is the Owner's instrument of choice. They can also view some favourite quotes from the Owner to get a better sense of his personality and ethos.
    - Users can use the navbar to easily and quickly scroll through the site.

-   ### About Page
    - Users can see a brief summary of Owner's biography, experience and who he is. 
    - Users can see a photo of him working in the studio.

-   ### Work Page
    - Users can view a selection of the Owner's best work in both film composition and record production. 
    - Users can see list of big companies that the Owner has worked with.
    - Users can see a few 5-star reviews from his clients and colleagues.

-   ### Services Page
    - Users can view a list of services provided by the Owner.
    - Users can find a short description of what's included in each services as well as the Owner's experience and skill set.

-   ### Page Page
    - Users can view a selection of photos of the Owner in the studio working including some well-known clients.

-   ### Contact Page
    - Users can contact the Onwer using the site's form.
    - Users can opt in to be added to a mailing list to receive offers and news about the Owner.

-   ### Footer
    - Users can access the Owner's social media pages as well as his direct email and phone number if they prefer to not use the form.
        
## Skeleton Plane

-   ### Wireframes
    - I have designed the layout of the website based on a grid system using Adobe XD. I have created low fidelity wireframes to show case my layout.
        - Wireframe for Desktop - [View](https://www.dropbox.com/s/y8ng46qqz3mv6fl/MS1_Wireframe%20-%20Desktop.pdf?raw=1)
        - Wireframe for Laptop - [View](https://www.dropbox.com/s/xc8nmqrn9o70c3h/MS1_Wireframe%20-%20Laptop.pdf?raw=1)
        - Wireframe for Tablet - [View](https://www.dropbox.com/s/e38tp54njyoz0rv/MS1_Wireframe%20-%20Tablet.pdf?raw=1)
        - Wireframe for Mobile - [View](https://www.dropbox.com/s/84xm213iui0xn00/MS1_Wireframe%20-%20Mobile.pdf?raw=1)


## Surface Plane

-   ### Colour Scheme
    -   The main colours used are charcoal, yellow, off-white and gray.
    -   Charcoal is used for the background as I felt made the website look 'cooler'. 
    -   Gray is used for foreground elements as it creates an contrast with charcoal. 
    -   Yellow is used for all the titles and headings.
    -   Off-white is used for main text and subtitles.

-   ### Typography
    -   I have used google fonts to import the fonts for the website.
    -   The fonts used are Raleway and Lato and the weight is 400 (Regular).
    -   The Raleway font is used for the headings of each page/section.
    -   The Lato font is used for paragraphs and descriptions. 
    -   Sans Serif is used as the fallback font for both font options in case they aren't being imported into the site correctly.
    -   I am using fluid font sizes that grow together with the viewport width. This is achieved by using the clamp attribute and for the min and desired values, I am using a combination of rem units with the viewport width unit.
    -   I have created 5 font sizes that are being shared by all the text elements in the site depending on their importance.

-   ### Images
    -   I have used unsplash to source all the images on the website. You can find more information on the Credit section.

-   ### Icons
    -   I have used fontawesome to source all the icons used on the website.

-   ### Structure & Layout
    -   Due to the simplicity and nature of the project, I decided to create a single-page scrolling website as it created a smoother user-experience with an easier and effective navigation.
    -   CSS grid was used to structure the website as it allowed me to easily place all the elements in the page and make them fully responsive without the use of bootstrap.
    -   I originally created a 16-column grid, which works similar to bootstrap but since the project is simple without too many elements, I decided to use the grid-template-areas attribute which is based on my wireframes. 
    -   The Work and Services pages fully take advantage of grid's autofit functionality.

# Technologies Used

## Languages
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Libraries, Tools & Resources
1. [VS Code:](https://code.visualstudio.com/)
    - VS Code was my IDE of choice for writing the HTML, CSS and JavaScript code.
2. [Google Fonts:](https://fonts.google.com/)
    - Google Fonts was used to import my font of choice into CSS for use throughout the website.
3. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used to add icons to the website for aesthetic and UX purposes.
4. [Image Kit:](https://imagekit.io/)
    - Image Kit was used to store, optimize and serve all the site's images using CDN.
5. [Git:](https://git-scm.com/)
    - Git was used to help me manage and keep track of my source code history.
6. [Sourcetree:](https://www.sourcetreeapp.com/)
    - Sourcetree simplified and visualized my interaction with the Git repository.
7. [GitHub:](https://github.com/)
    - GitHub was used to store and manage the Git repository.
8. [Adobe XD:](https://www.adobe.com/uk/products/xd.html)
    - Adobe XD was used to create the [wireframes](https://www.dropbox.com/sh/47nl19x70nqnbqe/AACs9wpsU86-84pEg55kyMyJa?dl=0) during the design and prototyping process.
9. [CDNJS:](https://cdnjs.com/)
    - CDNJS was used to quickly import library files in my HTML document.
10. [Squoosh:](https://squoosh.app/)
    - Squoosh was used to convert, compress and resize my images.
11. [Chrome DevTools:](https://developers.google.com/web/tools/chrome-devtools)
    - Chrome DevTools helped me debug issues that I've had during development. In addition, by using the inspection mode I could see how responsive my site was.
12. [W3C Validator:](https://validator.w3.org/)
    - W3C Validator was used to help me check if my HTML and CSS adheres to the standards. More details in the Testing section.

# Testing

# Deployment

# Credits
