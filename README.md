![Multi Device Website Mockup](https://www.dropbox.com/s/x8u15yvm8b4ni0l/MS1_Fitz%20Website_Multi%20Device%20Mockup%20Generator.png?raw=1)

# Introduction

This is my First Milestone Project - User Centric Frontend Development - for the Code Institute. 

I have created a portfolio website for a film composer / record producer under the alias 'F!tz'.

The idea is to create a one-page scrolling site which quickly and effectively showcases the owner's work and skill set with a simple and easy to use navigation.

You can view the live site [here](https://mikeavgeros.github.io/fitz-composer/)

# Table of Contents:
-   [User Experience](#user-experience)

-   [Features](#features)

-   [Technologies Used](#technologies-used)

-   [Testing](#testing)

-   [Deployment](#deployment)

-   [Credits](#credits)

-   [Acknowledgements](#acknowledgements)

# User Experience

## Strategy Plane

-   ### Target Audience

    -   Music Artists

    -   Music Producers

    -   Film Directors

    -   Media Companies

-   ### User's Objectives & Goals

    -   #### First Time User's Goals

        -   As a First Time User, I want to identify if the site's owner will be suitable for my project.

        -   As a First Time User, I want to be able to quickly and easily navigate the site to find suitable content.

        -   As a First User, I want to be able to quickly and easily contact the site's Owner for a project.

    -   #### Returning User's Goals

        -   As a Returning User, I want to find more information about the different services offered.

        -   As a Returning User, I want to find out about more information about the site Owner's skills and experience.

        -   As a Returning User, I want to find out what previous clients and co-workers think of the site's Owner.

    -   #### Frequent User's Goals

        -   As a Frequent User, I want to be able to keep up to date with the Owner's news and find out if he offers any special deals.

        -   As a Frequent User, I want to check to see up to date photos of the Owner working on projects.

        -   As a Frequent User, I want to have a section where I can follow the Owner's social media and other relevant websites.

-   ### Owner's Objectives & Goals

    The owner of this website is a freelance music composer / record producer who wants to attract clients and work on interesting projects.

    -   #### Owner's Goals

        -   As the Owner, I want Users to contact me for a project using the contact form.

        -   As the Owner, I want to present my services and skills in the best of light.

        -   As the Owner, I want to work on a variety of interesting projects.

        -   As the Owner, I want Users to connect with me on social media and subscribe to my mailing list.

## Scope Plane

-   ### Home Page

    -   Users can see a full screen image of a musician playing the guitar which is the Owner's instrument of choice. They can also view some favourite quotes from the Owner to get a better sense of his personality and ethos.

    -   Users can use the navbar to easily and quickly scroll through the site.

-   ### About Page

    -   Users can see a brief summary of Owner's biography, experience and skill set. 

    -   Users can see a photo of the Owner working in the studio.

-   ### Work Page

    -   Users can view a selection of the Owner's best work in both film composition and record production. 

    -   Users can see list of big companies that the Owner has worked with.

    -   Users can see a selection of reviews from the Owner's clients and colleagues.

-   ### Services Page

    -   Users can view a list of services provided by the Owner.

    -   Users can find a short description of what's included in each service as well as the Owner's experience and skill set.

-   ### Gallery Page

    -   Users can view a selection of photos of the Owner in the studio working including some well-known clients.

-   ### Contact Page

    -   Users can contact the Owner using the site's contact form.

    -   Users can opt in to be added to a mailing list to receive offers and news about the Owner and his services.

-   ### Footer

    -   Users can access the Owner's social media pages as well as his direct email and phone number if they prefer to not use the contact form.
        
## Skeleton Plane

-   ### Wireframes

    -   I have designed the layout of the website based on a grid system using Adobe XD. I have created low fidelity wireframes for a variety of device sizes to showcase my layout.
        -   Wireframe for Desktop - [View](https://www.dropbox.com/s/y8ng46qqz3mv6fl/MS1_Wireframe%20-%20Desktop.pdf?raw=1)

        -   Wireframe for Laptop - [View](https://www.dropbox.com/s/xc8nmqrn9o70c3h/MS1_Wireframe%20-%20Laptop.pdf?raw=1)

        -   Wireframe for Tablet - [View](https://www.dropbox.com/s/e38tp54njyoz0rv/MS1_Wireframe%20-%20Tablet.pdf?raw=1)
        
        -   Wireframe for Mobile - [View](https://www.dropbox.com/s/84xm213iui0xn00/MS1_Wireframe%20-%20Mobile.pdf?raw=1)


## Surface Plane

-   ### Colour Scheme

    -   The main colours used are charcoal, yellow, off-white and gray.

    -   Charcoal is used for the background as it was requested by the site Owner. 

    -   Gray is used on foreground elements as it creates a nice contrast with charcoal. 

    -   Yellow is used for all of the titles and headings as it adds emphasis in contrast witht the charcoal.

    -   Off-white is used for main text and subtitles as it makes it easily readable.

-   ### Typography

    -   I have used [Google Fonts](https://fonts.google.com/) to import the fonts for the website.

    -   The fonts that I imported are Raleway and Lato and the weight is 400 (Regular).

    -   The Raleway font is used for the headings of each page/section.

    -   The Lato font is used for paragraphs and descriptions.

    -   Sans Serif is used as the fallback font in case Raleway or Lato aren't being imported into the site correctly.

    -   I am using fluid font sizes that grow together with the viewport width. This is achieved by using the clamp attribute and setting a fixed min and max size and a fluid desired size with the help of the viewport width unit (vw).

    -   I have created 5 font sizes from XL to XS that are being shared by all the text elements in the site depending on their importance.

-   ### Images

    -   Most of the images were provided by the site's Owner.

    -   I have used [Unsplash](https://unsplash.com/) to source some additional images for the landing page and services section. You can find more information on the Credit section.
    
-   ### Icons

    -   I have used [fontawesome](https://fontawesome.com/) to source all the icons used thoughout the website.

-   ### Structure & Layout

    -   Due to the simplicity and nature of the project, I decided to create a single-page scrolling website as it created a smoother user-experience with an easier and more effective navigation.

    -   CSS grid was used to structure the website as it allowed me to easily place all the elements in the page and make them fully responsive without the use of bootstrap.

    -   I originally created a 16-column grid, which works similar to Bootstrap but since the project is simple without too many elements, I decided to use the grid-template-areas attribute which is based on my wireframes' layout. 

    -   The Work and Services pages fully take advantage of the grid's autofit functionality as the containers are being added into the same row depending on the available size of the viewport width.

# Features

## Existing features

-   Responsive on all device sizes using media queries

-   Interactive and clickable elements on all pages

-   Alt Attributes and Aria-labels in order to improve accessibility

-   HTML Metadata in order to improve SEO

-   Brand Logo and Navigation Bar

-   Embedded audio and video for quick access to portfolio

-   Testimonials section

-   Animated Image Slider

-   Direct emails from contact form using EmailJS

-   Footer with useful links

## Future Features

-   Animated Popup on form submission

-   Improved interactivity / animations on all clickable elements

# Technologies Used

## Languages

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Libraries, Tools & Resources

1. [VS Code](https://code.visualstudio.com/)
    -   VS Code was my IDE of choice for writing the HTML, CSS and JavaScript code.

2. [Google Fonts](https://fonts.google.com/)
    -   Google Fonts was used to import my fonts of choice into CSS for use throughout the website.

3. [Font Awesome](https://fontawesome.com/)
    -   Font Awesome was used to add icons to the website for aesthetic and UX purposes.

4. [Image Kit](https://imagekit.io/)
    -   Image Kit was used to store, optimize and serve all the site's images using CDN.
    
5. [Git](https://git-scm.com/)
    -   Git was used to help me manage and keep track of my source code history.

6. [Sourcetree](https://www.sourcetreeapp.com/)
    -   Sourcetree simplified and visualized my interaction with the Git repository.

7. [GitHub](https://github.com/)
    -   GitHub was used to store and manage the Git repository.

8. [Adobe XD](https://www.adobe.com/uk/products/xd.html)
    -   Adobe XD was used to create the [wireframes](https://www.dropbox.com/sh/47nl19x70nqnbqe/AACs9wpsU86-84pEg55kyMyJa?dl=0) during the design and prototyping process.

9. [CDNJS](https://cdnjs.com/)
    -   CDNJS was used to quickly import library files in my HTML document.

10. [Squoosh](https://squoosh.app/)
    -   Squoosh was used to convert, compress and resize my images.

11. [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
    -   Chrome DevTools helped me debug issues that I've had during development. In addition, by using the inspection mode I could see how responsive my site was.

12. [W3C Validation Services](https://validator.w3.org/)
    -   W3C Validation Services were used to help me check if my HTML and CSS adheres to the standards. More details in the Testing section.

13. [Am I Responsive](http://ami.responsivedesign.is/)
    -   Am I Responsive was used during my testing phase to check the responsiveness of my site.

14. [Techsini Multi Device Mockup Generator](https://techsini.com/multi-mockup/index.php)
    -   Techsini Multi Device Mockup Generator was used during my testing phase to check the responsiveness of my site.

# Testing

## User Stories

-   ### First Time User's Goals

    -   As a First Time User, I want to identify if the site's Owner will be suitable for my project.
        -   This has been achieved by showing a selection of the owners best work in a variety of projects as well as a list of companies the owner has worked with.

    -   As a First Time User, I want to be able to quickly and easily navigate the site to find suitable content.
        -   This has been achieved by creating a navigation menu to quickly take you to all the sections of the site as well as a 'hot' button in the landing page to immediately take to both the portfolio of the owner.
        
    -   As a First User, I want to be able to quickly and easily contact the site's Owner for a project.
        -   This has been achieved by adding a contact me page and a section in the navigation menu as well as a 'hot' button in the landing page to quickly take you there.

-   ### Returning User's Goals

    -   As a Returning User, I want to find more information about the different services offered.
        -   This has been achieved by adding a services page with detailed descriptions and images of each service provided by the owner.

    -   As a Returning User, I want to find out about more information about the site Owner's skills and experience.
        -   This has been achieved by adding a bio page with a lot of information on the owner's skills and experience. Users can also visit the work section to hear a selection of his best work.

    -   As a Returning User, I want to find out what previous clients and co-workers think of the site's Owner.
        -   This has been achieved by adding a reviews section with testimonials from happy clients and colleagues.

-   ### Frequent User's Goals

    -   As a Frequent User, I want to be able to keep up to date with the Owner's news and find out if he offers any special deals.
        -   This has been achieved by adding a subscribe to mailing list checkbox when contacting the owner.

    -   As a Frequent User, I want to check to see up to date photos of the Owner working on projects.
        -   This has been achieved by adding a gallery page with a carouself showing up to date photos of the owner working in the studio.

    -   As a Frequent User, I want to have a section where I can follow the Owner's social media and other relevant websites.
        -   This has been achieved by adding a useful links section with the owner's social media and soundbetter profile in the footer of the page.

## Browser Compatibility

-   The website is compatible with most modern web browsers. For the best viewing experience, I recommend using Chrome, Firefox, Edge or Safari. 

-   The worst viewing experience is on Internet Explorer. I decided to not include any vendor prefixes for IE because as I am using grid on all the sections, it made a significant increase to my CSS size and I did not want to compromise on the loading speed and performance. I also researched online and found out that most people, especially the target audience of this site do not use IE. 

## Responsiveness

Since I haven't used Bootstrap, I have been constantly testing how responsive my website is by using [Google Development Tools](https://developers.google.com/web/tools), [Am I Responsive](http://ami.responsivedesign.is/) and [Techsini Multi Device Mockup Generator](https://techsini.com/multi-mockup/index.php)

-   ### Google Development Tools

    Throughout the development process, I have been consistently testing that all my pages work well on different screen sizes and devices. 

    -   This has helped me adjust the values on my font size variables so that my fonts are responsive and work well with all screen sizes.

    -   This has helped me adjust the grid column parameters in my work, reviews and services sections so that all the nested elements respond and adapt to the screen size of the viewport.

    -   This has helped me adjust the width and height of all my images.

    -   This has helped me adjust the width and height of my buttons as their size is responsive depending on the screen width.

    -   Overall, most of the elements on the website are responsive based on the screen size so being able to view how the site adapts depending on the screen has helped me make suitable decisions, which have improved the UX of the site.

    -   During the testing phase, I have used Lighthouse to generate reports for both Desktop and Mobile. The reports showed better practices and syntantical fixes on my HTML and CSS, which in turn helped boost the performance, accessibility and UX of the site.

-   ### Am I Responsive?

    -   During the testing phase, I ran further tests on my site's responsiveness using the Am I Responsive website. This has helped me identify some size-related inconsistencies that were not so visible with the Google Development Tools.

-   ### Techsini Multi Device Mockup Generator

    -   During my testing phase, I also ran further tests on my site's responsiveness using the Multi Device Website Mockup Generator on Techsini. I then compared my findings with the mockups from Am I Responsive. 
    
    -   I have also used their screenshot functionality to import a mockup of my site onto this README.

## Form Validation

-   I made sure to validate my forms and ran suitable tests using different input scenarios. I can confirm that all of them behaved as expected. 

-   I have tested that my required input attributes behaved as expected and warned users to fill the required fields.

-   I have tested that the submitted form is being sent to my email address containing all the information added by the user.

## HTML Validation

The [W3C Markup Validator](https://validator.w3.org/#validate_by_upload) was used to validate every page of the website to ensure there were no syntax errors in my HTML. Although it returned no errors, it displayed a few warnings - 'Section lacks heading', however, the mentioned sections had suitable headings within child divs.

## CSS Validation

The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_upload) was used to validate every page of the website to ensure there were no syntax errors in my CSS. It displayed a few warnings in regards to my root variables being an unknown vendor extension as well as some of the vendor prefixes, however this was not a cause for concern.

## Further Testing

-   The website was viewed and tested on a variety of devices such as Desktop, Laptop, iPad, and a variety of Android and iOs mobile phones.

-   A large amount of testing was done to ensure that all pages were linking correctly including the site's navigation menu.

-   Friends, family members and other Code Institute students were asked to review the site and documentation to point out any bugs, typos and/or user experience issues.

# Deployment

## Github Repository

The project was stored on Github using the following steps.

1.  I created an account on GitHub - [My account](https://github.com/MikeAvgeros)

2.  I used the suggested Code Institute Template - [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template)

3.  I created a public repository for my 1st Milestone project - [Fitz Composer](https://github.com/MikeAvgeros/fitz-composer)

## Github Pages

The project was deployed to GitHub Pages using the following steps.

1.  I logged in to Github and located the [Github Repository](https://github.com/MikeAvgeros/fitz-composer)

2.  At the top of the Repository (not top of page), I clicked the "Settings" Button on the menu.

3.  I Scrolled down the Settings page until you locate the "GitHub Pages" Section.

4.  Under "Source", I clicked the dropdown called "None" and select "Master Branch".

5.  I scrolled back down through the page to locate the now published [site link](https://mikeavgeros.github.io/fitz-composer/) in the "GitHub Pages" section.

## Cloning the Github Repository

The Github repository was cloned and stored locally on my machine using the following steps. 

1.  I cloned my [Github Repository](https://github.com/MikeAvgeros/fitz-composer) using HTTPS, under "Clone with HTTPS", and copied the link.

2.  I opened [SourceTree](https://www.sourcetreeapp.com/), opened a new tab and clicked on the Clone icon. I pasted the HTTPS link and added a local directory in my machine.

3.  I opened [VS Code](https://code.visualstudio.com/), clicked on File/Open File and navigated to the local directory I had cloned my Github repository.

# Credits

## Images

I have used the following images from [Unsplash](https://unsplash.com/)

-   [Jefferson Santos](https://unsplash.com/photos/fCEJGBzAkrU)

-   [Augusto Oazi](https://unsplash.com/photos/KWOcA8_Vu10)

-   [Samuel Sianipar](https://unsplash.com/photos/4TNd3hsW3PM)

-   [Steve Harvey](https://unsplash.com/photos/l0V2dqXW_mI)

-   [Lorenzo Spoleti](https://unsplash.com/photos/MlhJNEUQpBs)

-   [Caught In Joy](https://unsplash.com/photos/ptVBlniJi50)

-   [Jacek Dylag](https://unsplash.com/photos/xPugU5J5ePc)

## Code

-   ### Hamburger Menu

    -   I borrowed some code for my Hamburger Menu after watching this [YouTube video](https://www.youtube.com/watch?v=sjrp1FEHnyA) by [FollowAndrew](https://www.youtube.com/channel/UCETveVX7TPauIupxYz6sFtA)

    -   I then customized the code and adapted it to my needs.

-   ### Landing Page Overlay

    -   I borrowed some code for making an overlay over my hero banner after watching this [YouTube video](https://youtu.be/DZg6UfS5zYg) by [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

    -   I then customized the code and adapted it to my needs.

-   ### Animated Image Slider

    -   I borrowed some code for the image slider on my Gallery and Company Credits sections after watching this [YouTube video](https://www.youtube.com/watch?v=pGHOaY4dhAA) by [w3newbie](https://www.youtube.com/channel/UCT5mYUgfTseT1axSXiA-ODQ)

    -   I then customized the code and adapted it to my needs.

# Acknowledgements

-   I would like to thank [Stuart Crang](https://www.linkedin.com/in/stuart-crang-50401897/) for helping me enrol on this course and guiding me on my first couple of weeks.

-   I would like to thank my mentor, [Narender Singh](https://linkedin.com/in/nar3nd3r) for his support, guidance and design ideas.

-   I would like to thank the [Code Institute](https://codeinstitute.net/) for the well-thought-out curriculum and their amazing and super informative and helpful Slack community!

-   I would like to thank everyone at the Full Stack Developers WhatsApp group for their helpful input during my testing phase.

