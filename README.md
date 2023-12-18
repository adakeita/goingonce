# Going Twice

Going Twice is an online auction platform where users can register, log in, view listings, create new listings, update their profiles, and bid on items. The platform provides a user-friendly interface for a seamless auction experience.

## Features

- **User Authentication**: Users can register and log in to the platform.
- **Profile Management**: Users can view and update their profiles, including changing their avatars.
- **Listing Browsing**: Users can browse through various listings with details such as title, description, bids, and images.
- **Listing Creation**: Registered users can create new listings with details like title, description, tags, and images.
- **Listing Management**: Users can edit and delete their listings.
- **Bidding**: Users can place bids on items they are interested in.
- **Search by Tag**: Users can search for listings by tags to find items of interest.

## Tech Stack

- **Client**: React, TailwindCSS, CSS
- **Backend**: Noroff API (out of scope)

**State Management**: React Hooks and Context API
**Routing**: Tanstack Router
**Styling**: CSS, TailwindCSS
**Version Control**: Git

## Installation and Setup

**Clone the Repository:**
git clone [projecturl]
cd [goingtwice]
**Install Dependencies**
  -npm install

## Usage

- **Register/Log In**: Access the application by signing up or logging in using credentials.
- **Browse Listings**: Explore available listings on the platform.
- **Create Listings**: Use the "Create Listing" button to add new items.
- **Edit/Delete Listings**: Manage listings through edit and delete.
- **Profile Management**: Update profile, including avatar and credits.
- **Bid on Items**: Place bids on items you are interested in.
- **Search by Tag**: Find listings with specific tags in the search bar.


# Testing Implementation

## Overview
This repository includes a comprehensive suite of end-to-end (E2E) tests for our web application, focusing on critical user journeys and interactions. These tests ensure the application functions reliably and as expected from a user's perspective.

## Tools Used
- **Cypress**: The primary tool for end-to-end testing, offering an intuitive framework for simulating real user interactions within a browser environment.

## Key Test Features

### End-to-End Testing with Cypress
Cypress tests cover several aspects of the application:

- **User Login Journey**: This test simulates a user's login process, validating the functionality from entering credentials to successful navigation upon login.
- **Non-Registered User Browsing**: Ensures that users who are not logged in can browse listings without encountering any restrictions or errors.
- **Search Functionality on Listings Page**: Confirms that the search feature on the listings page works as expected, allowing users to search for listings based on specific tags.

### Running the Tests
To run the end-to-end tests, use the following command in your terminal:

```bash
# For end-to-end tests with Cypress
npx cypress open

## Contributing

Contributions to this project are welcome. To contribute:

- **Fork the Repository**: Create your own fork of the project.
- **Create a Branch**: Make your changes in a new branch.
- **Make Changes and Commit**: Add your enhancements or fixes and commit them.
- **Submit a Pull Request**: Open a pull request for review and potential merge into the main branch.

## Support

For support, email hello@adakeita.dev
