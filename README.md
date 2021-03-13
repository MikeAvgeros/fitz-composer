![Multi Device Website Mockup](https://www.dropbox.com/s/qs3yfo9d7tkxtl7/Fitz%20Website%20-%20MS1%20-%20Multi%20Device%20Website%20Mockup.png?raw=1)

# Introduction

This is my First Milestone Project - User Centric Frontend Development - for the Code Institute. 

I have created a portfolio website for a film composer / record producer under the alias 'F!tz'.

The idea is to create a one-page scrolling site which quickly and effectively showcases the owner's work and skill set with a simple and easy to use navigation.

You can view the live site [here](https://mikeavgeros.github.io/fitz-composer/)

# Table of Contents:
- [User Experience](#user-experience)

- [Features](#features)

- [Technologies Used](#technologies-used)

- [Testing](#testing)

- [Deployment](#deployment)

- [Credits](#credits)

- [Acknowledgements](#acknowledgements)

# User Experience

## Strategy Plane

-   ### Target Audience

    - Music Artists

    - Music Producers

    - Film Directors

    - Media Companies

-   ### User's Objectives & Goals

    -   #### First Time User's Goals

        - As a First Time User, I want to identify if the site's owner will be suitable for my project.

        - As a First Time User, I want to be able to quickly and easily navigate the site to find suitable content.

        - As a First User, I want to be able to quickly and easily contact the site's owner for a project.

    -   #### Returning User's Goals

        - As a Returning User, I want to find more information about the different services offered.

        - As a Returning User, I want to find out about more information about the site owner's skills and experience.

        - As a Returning User, I want to find out what previous clients and co-workers think of the site's owner.

    -   #### Frequent User's Goals

        - As a Frequent User, I want to be able to keep up to date with the owner's news and find out if he offers any special deals.

        - As a Frequent User, I want to check to see up to date photos of the owner working on projects.

        - As a Frequent User, I want to have a section where I can follow the owner's social media and other websites.

-   ### Owner's Objectives & Goals

    The owner of this website is a freelance music composer / record producer who wants to attract clients and work on interesting projects.

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

-   ### Gallery Page

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

    -   Most of the images were provided by the site's owner.

    -   I have used unsplash to source some additional images for the website. You can find more information on the Credit section.
    
-   ### Icons

    -   I have used fontawesome to source all the icons used on the website.

-   ### Structure & Layout

    -   Due to the simplicity and nature of the project, I decided to create a single-page scrolling website as it created a smoother user-experience with an easier and effective navigation.

    -   CSS grid was used to structure the website as it allowed me to easily place all the elements in the page and make them fully responsive without the use of bootstrap.

    -   I originally created a 16-column grid, which works similar to bootstrap but since the project is simple without too many elements, I decided to use the grid-template-areas attribute which is based on my wireframes. 

    -   The Work and Services pages fully take advantage of grid's autofit functionality.

# Features

-   Responsive on all device sizes

-   Interactive elements

-   Animated image carousel

# Technologies Used

## Languages

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)

-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Libraries, Tools & Resources

1. [VS Code](https://code.visualstudio.com/)
    - VS Code was my IDE of choice for writing the HTML, CSS and JavaScript code.

2. [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import my fonts of choice into CSS for use throughout the website.

3. [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to add icons to the website for aesthetic and UX purposes.

4. [Image Kit](https://imagekit.io/)
    - Image Kit was used to store, optimize and serve all the site's images using CDN.
    
5. [Git](https://git-scm.com/)
    - Git was used to help me manage and keep track of my source code history.

6. [Sourcetree](https://www.sourcetreeapp.com/)
    - Sourcetree simplified and visualized my interaction with the Git repository.

7. [GitHub](https://github.com/)
    - GitHub was used to store and manage the Git repository.

8. [Adobe XD](https://www.adobe.com/uk/products/xd.html)
    - Adobe XD was used to create the [wireframes](https://www.dropbox.com/sh/47nl19x70nqnbqe/AACs9wpsU86-84pEg55kyMyJa?dl=0) during the design and prototyping process.

9. [CDNJS](https://cdnjs.com/)
    - CDNJS was used to quickly import library files in my HTML document.

10. [Squoosh](https://squoosh.app/)
    - Squoosh was used to convert, compress and resize my images.

11. [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
    - Chrome DevTools helped me debug issues that I've had during development. In addition, by using the inspection mode I could see how responsive my site was.

12. [W3C Validation Services](https://validator.w3.org/)
    - W3C Validation Services were used to help me check if my HTML and CSS adheres to the standards. More details in the Testing section.

# Testing

## User Stories

-   ### First Time User's Goals

    - As a First Time User, I want to identify if the site's owner will be suitable for my project.
        - This has been achieved by showing a selection of the owners best work in a variety of projects as well as a list of companies the owner has worked with.
    - As a First Time User, I want to be able to quickly and easily navigate the site to find suitable content.
        - This has been achieved by creating a navigation menu to quickly take you to all the sections of the site as well as a 'hot' button in the landing page to immediately take to both the portfolio of the owner.
    - As a First User, I want to be able to quickly and easily contact the site's owner for a project.
        - This has been achieved by adding a contact me page and a section in the navigation menu as well as a 'hot' button in the landing page to quickly take you there.

-   ### Returning User's Goals

    - As a Returning User, I want to find more information about the different services offered.
        - This has been achieved by adding a services page with detailed descriptions and images of each service provided by the owner.

    - As a Returning User, I want to find out about more information about the site owner's skills and experience.
        - This has been achieved by adding a bio page with a lot of information on the owner's skills and experience. Users can also visit the work section to hear a selection of his best work.

    - As a Returning User, I want to find out what previous clients and co-workers think of the site's owner.
        - This has been achieved by adding a reviews section with testimonials from happy clients and colleagues.

-   ### Frequent User's Goals

    - As a Frequent User, I want to be able to keep up to date with the owner's news and find out if he offers any special deals.
        - This has been achieved by adding a subscribe to mailing list checkbox when contacting the owner.

    - As a Frequent User, I want to check to see up to date photos of the owner working on projects.
        - This has been achieved by adding a gallery page with a carouself showing up to date photos of the owner working in the studio.

    - As a Frequent User, I want to have a section where I can follow the owner's social media and other websites.
        - This has been achieved by adding a useful links section with the owner's social media and soundbetter profile in the footer of the page.

## Browser Compatibility

-   The website is compatible with most modern web browsers. For the best viewing experience, I recommend using Chrome, Firefox, Edge or Safari. 

-   The worst viewing experience is on Internet Explorer. I decided to not include any vendor prefixes for IE because as I am using grid on all the sections, it made a significant increase to my CSS size and I did not want to compromise on the loading speed and performance. I also researched and found out that most people, especially the target audience of this site do not use IE. 

## Responsiveness

I have tested how responsive my website is by using Google Development Tools, Am I Responsive and Techsini? 

-   ### Google Development Tools

    - Throughout the development process, I have been consistently checking if all my pages work well in different screen sizes. 

    - This has helped me adjust the values on my font size clamp attribute so that my fonts are responsive and work well with all image screens.

    - This has helped me adjust my column minmax width of my work and services page so that all the elements respond and adapt to the screen size.

    - This has helped me adjust the width of my gallery page.

    - This has helped me adjust the width and height of my buttons as their size is responsive to the screen width.

    - Overall, most of the elements in the website are responsive based on the screen size so being able to view the site adapts has helped me make suitable decisions.

    - During the testing phase, I have used Lighthouse to generate a report for both Desktop and Mobile. Lighthouse showed me some better practices and fixes on my HTML and CSS, which in turn helped boost the performance and accessibility of the site.

-   ### Am I Responsive?

    - During my testing phase, I ran further tests on my site's responsiveness using the Am I Responsive website. This has helped me identify some font sizing problems that were not so visible with the Google Development Tools.

-   ### Techsini

    - During my testing phase, I also ran further tests on my site's responsiveness using the Multi Device Website Mockup Generator on Techsini. I then compared my findings with the mockups from Am I Responsive.

## Form Validation

-   I made sure to validate my forms and ran suitable tests. I can confirm that all of them behaved as expected. 

-   I have tested that my required input attributes behaved as expected and warned users to fill the required fields.

## HTML Validation

The [W3C Markup Validator](https://validator.w3.org/#validate_by_upload) was used to validate every page of the website to ensure there were no syntax errors in my HTML. Although it returned no errors, it displayed a few warnings - 'Section lacks heading', however, the mentioned sections had suitable headings within child divs.

## CSS Validation

The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_upload) was used to validate every page of the website to ensure there were no syntax errors in my CSS. It displayed a few warnings in regards to my root variables being an unknown vendor extension as well as some of the vendor prefixes, however this was not a cause for concern.

## Further Testing

-   The website was viewed on a variety of devices such as Desktop, Laptop, iPad, and a variety of Android and iOs mobile phones.

-   A large amount of testing was done to ensure that all pages were linking correctly including the site's navigation menu.

-   Friends, family members and other Code Institute students were asked to review the site and documentation to point out any bugs and/or user experience issues.

# Deployment

## Github Repository

The project was stored on Github using the following steps.

1.  I created an account on GitHub - [My account](https://github.com/MikeAvgeros)

2.  I used the suggested Code Institute Template - [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template)

3.  I created a public repository for my 1st Milestone project -  [Fitz Composer](https://github.com/MikeAvgeros/fitz-composer)

4.  I cloned my Github repository in [Sourcetree](https://www.sourcetreeapp.com/) using an HTTPS URL.

## Github Pages

The project was deployed to GitHub Pages using the following steps.

1.  Log in to Github and locate the [Github Repository](https://github.com/MikeAvgeros/fitz-composer)

2.  At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

3.  Scroll down the Settings page until you locate the "GitHub Pages" Section.

4.  Under "Source", click the dropdown called "None" and select "Master Branch".

5.  The page will automatically refresh.

6.  Scroll back down through the page to locate the now published [site link](https://mikeavgeros.github.io/fitz-composer/) in the "GitHub Pages" section.

# Credits

## Images

I have used the following images from [Unsplash](https://unsplash.com/)

- [Jefferson Santos](https://unsplash.com/photos/fCEJGBzAkrU)

- [Augusto Oazi](https://unsplash.com/photos/KWOcA8_Vu10)

- [Samuel Sianipar](https://unsplash.com/photos/4TNd3hsW3PM)

- [Steve Harvey](https://unsplash.com/photos/l0V2dqXW_mI)

- [Lorenzo Spoleti](https://unsplash.com/photos/MlhJNEUQpBs)

- [Caught In Joy](https://unsplash.com/photos/ptVBlniJi50)

- [Jacek Dylag](https://unsplash.com/photos/xPugU5J5ePc)

## Code

-   ### Hamburger Menu

    - I borrowed some code for my Hamburger Menu after watching this [YouTube video](https://www.youtube.com/watch?v=sjrp1FEHnyA) by [FollowAndrew](https://www.youtube.com/channel/UCETveVX7TPauIupxYz6sFtA)

    - I then customized the code and adapted it to my needs.

-   ### Carousel

    - I borrowed some code for the image carousel on my Gallery and Company Credits sections after watching this [YouTube video](https://www.youtube.com/watch?v=pGHOaY4dhAA) by [w3newbie](https://www.youtube.com/channel/UCT5mYUgfTseT1axSXiA-ODQ)

    - I then customized the code and adapted it to my needs.

# Acknowledgements

- I would like to thank [Stuart Crang](https://www.linkedin.com/in/stuart-crang-50401897/) for helping me enrol on this course and guiding me on my first couple of weeks.

- I would like to thank my mentor, [Narender Singh](https://linkedin.com/in/nar3nd3r) for his support, guidance and design ideas.

- I would like to thank the [Code Institute](https://codeinstitute.net/) for the well-thought-out curriculum and their amazing and super informative and helpful Slack community!

- I would like to thank everyone at the Full Stack Developers WhatsApp group for their helpful input during my testing phase.
