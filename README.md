# Wonderlust

Wonderlust is a room renting and listing platform that connects users looking for shared accommodations. Users can explore various types of rooms and listings, rate them, and get in touch with the owners to find the perfect place to stay.

Whether you're looking for a cozy cabin or a luxurious beachfront property, Wonderlust makes it easy to find the right fit for your next stay.

## Features

- **User Authentication**: Secure login and registration with Passport.js and sessions.
- **Room Listings**: Users can browse different categories of rooms and view detailed listings.
- **Room Reviews**: Users can leave reviews for rooms they've stayed in, rating them on a scale from 1-5.
- **Responsive Design**: The website is fully responsive and works well on both desktop and mobile devices.
- **Admin Control**: Admin users can manage listings and reviews, ensuring the platform remains up to date.
- **Cloud Image Storage**: Uses Cloudinary to store and manage room images for faster load times and better management.

## Tech Stack

### Frontend:
- HTML
- CSS (with Bootstrap for responsive design)
- EJS (Embedded JavaScript templates)

### Backend:
- Node.js with Express.js
- MongoDB (for data storage)
- Passport.js (for user authentication)
- Cloudinary (for image storage)

### Libraries & Tools:
- Mongoose (for MongoDB interaction)
- Method Override (for handling HTTP methods like PUT and DELETE)
- Connect-Flash (for flash messages)
- Ejs-Mate (for EJS templating engine)
- Joi (for data validation)

## Setup & Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/wonderlust.git
```

### 2. Navigate into the project directory
```bash
cd wonderlust
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the Server
```bash
npm start
```
Navigate to `http://localhost:3000` in your browser to access the application.

## Usage

### Browse Listings:
- You can browse rooms by category, price, and location.
- Each listing has a detailed page with room information and user reviews.

### User Authentication:
- Users can sign up, log in, and log out to manage their profiles and listings.
- Secure login is handled using Passport.js with local strategy.

### Add Reviews:
- Users can rate rooms (1 to 5 stars) and leave comments on the listings.

### Add a Listing:
- Admin users can add new room listings through the admin panel (secured login required).

### Responsive Design:
- The website is designed to be fully responsive, adjusting to different screen sizes (mobile, tablet, desktop).

## Routes
- `/` : Home page with a list of available rooms.
- `/listings` : Displays all the room listings.
- `/listings/:id` : Detailed page for each room listing.
- `/listings/:id/reviews` : Add a review for a specific listing.
- `/login` : User login page.
- `/register` : User registration page.

## Models

### Listing Model (Room Listing)
- `title`: Name of the room listing.
- `description`: Detailed description of the room.
- `image`: URL and filename of the room's image.
- `price`: Price of the room.
- `location`: Location of the room.
- `city, state, country`: Geographical information for the room.
- `category`: Type of room (e.g., "farms", "icons", "beachfront", etc.).
- `reviews`: Array of reviews linked to the room listing.

### Review Model (User Review)
- `comment`: Review text.
- `rating`: Rating from 1 to 5.
- `date`: Date of the review submission.
- `author`: The user who wrote the review.

### User Model (User Authentication)
- `email`: User's email.
- User is authenticated using Passport's local strategy, which stores login credentials securely.

## Admin Controls
- **Add/Edit/Delete Listings**: Admins can manage the room listings by adding new ones, editing existing ones, or deleting them.
- **Moderate Reviews**: Admins can remove inappropriate or spammy reviews.

## Error Handling
- **404 Not Found**: Any invalid URL will trigger a "Page Not Found" error page.
- **500 Internal Server Error**: If there's an issue with the server, users will see an error message.

## Contributing
If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
4. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
5. Push to your branch:
   ```bash
   git push origin feature-name
   ```
6. Open a pull request to merge your changes into the main branch.
