**Cricket Scoreboard Application**
=====================================================

**Project Overview:**
Create a full-stack Cricket Scoreboard application with the following features:

- Display a list of upcoming matches
- Display the scoreboard for a specific match
- Update the score in real-time
- Display a list of previous matches with their scores
- Implement user authentication and authorization

It allows users to view and manage cricket match scores, batsmen and bowlers statistics, and match status. The application should have a responsive and user-friendly interface, and provide a seamless user experience.

**Frontend Requirements:**

1. **Technology Stack:**
	* Build the frontend using React (version 17 or later) as the JavaScript library.
	* Use Redux Toolkit (version 1.6 or later) for state management.
	* Utilize React Router Dom (version 6 or later) for client-side routing.
	* Style the application using Tailwind CSS (version 2 or later).
2. **Components:**
	* **Scoreboard Component:**
		+ Display the current score, overs, and wickets for both teams.
		+ Show the current run rate and required run rate.
		+ Update the scoreboard in real-time as the match progresses.
	* **Batsmen and Bowlers Component:**
		+ Display a list of batsmen and bowlers with their respective scores and statistics.
		+ Include columns for batsmen: name, runs, balls, fours, sixes, and strike rate.
		+ Include columns for bowlers: name, overs, maidens, runs, wickets, and economy rate.
	* **Match Status Component:**
		+ Display the current match status (e.g., "Live", "Finished", etc.).
		+ Update the match status in real-time as the match progresses.
	* **Navigation Menu:**
		+ Provide a navigation menu to switch between different matches or view match history.
		+ Include links to view match details, scorecards, and statistics.
3. **State Management:**
	* Use Redux Toolkit to manage the application state.
	* Create a separate slice for each component (e.g., scoreboard, batsmen and bowlers, match status).
	* Use actions and reducers to update the state in response to user interactions and API responses.
4. **API Integration:**
	* Use the `fetch` API or a library like Axios to make requests to the backend API.
	* Handle API errors and display error messages to the user.

**Backend Requirements:**

1. **Technology Stack:**
	* Build the backend using Node.js (version 14 or later) as the runtime environment.
	* Use Express.js (version 4 or later) as the web framework.
	* Utilize Typescript (version 4 or later) as the programming language.
	* Use Mongoose (version 5 or later) to interact with a MongoDB database.
2. **API Endpoints:**
	* **GET /matches:**
		+ Retrieve a list of all matches.
		+ Return a JSON response with match details (e.g., match ID, teams, date, etc.).
	* **GET /matches/:id:**
		+ Retrieve a specific match by ID.
		+ Return a JSON response with match details (e.g., match ID, teams, date, etc.).
	* **POST /matches:**
		+ Create a new match.
		+ Return a JSON response with the created match ID.
	* **PUT /matches/:id:**
		+ Update a match.
		+ Return a JSON response with the updated match ID.
	* **DELETE /matches/:id:**
		+ Delete a match.
		+ Return a JSON response with a success message.
	* **GET /matches/:id/score:**
		+ Retrieve the current score of a match.
		+ Return a JSON response with the current score.
	* **POST /matches/:id/score:**
		+ Update the score of a match.
		+ Return a JSON response with the updated score.
3. **Database Schema:**
	* Design a MongoDB schema to store match data.
	* Include fields for match ID, teams, date, score, overs, wickets, etc.
4. **Authentication:**
	* Implement authentication using a library like Passport.js (version 0.4 or later).
	* Use JSON Web Tokens (JWT) to manage user sessions.
	* Create endpoints for user registration, login, and logout.
	* Protect routes that require authentication using middleware.

**Authentication Requirements:**

1. **User Registration:**
	* Create an endpoint to register new users.
	* Validate user input (e.g., email, password, etc.).
	* Hash and store the user password securely.
2. **User Login:**
	* Create an endpoint to login existing users.
	* Validate user input (e.g., email, password, etc.).
	* Generate a JWT token upon successful login.
3. **User Logout:**
	* Create an endpoint to logout users.
	* Invalidate the JWT token.
4. **Protected Routes:**
	* Protect routes that require authentication using middleware.
	* Verify the JWT token on each request.

**Security Requirements:**

1. **Input Validation:**
	* Validate user input on the frontend and backend.
	* Use libraries like Joi (version 17 or later) for validation.
2. **Error Handling:**
	* Handle errors on the frontend and backend.
	* Display error messages to the user.
3. **CSRF Protection:**
	* Implement CSRF protection using a library like csurf (version 1 or later).
4. **HTTPS:**
	* Use HTTPS to encrypt data in transit.

**Performance Requirements:**

1. **Optimize Database Queries:**
	* Optimize database queries for performance.
	* Use indexing and caching to improve query performance.
2. **Minimize API Requests:**
	* Minimize API requests to improve performance.
	* Use caching and batching to reduce the number of requests.
3. **Optimize Frontend Code:**
	* Optimize frontend code for performance.
	* Use code splitting, lazy loading, and memoization to improve performance.

**Code Quality Requirements:**

1. **Code Organization:**
	* Organize code into separate files and folders.
	* Use a consistent naming convention.
2. **Code Style:**
	* Use a consistent code style throughout the application.
	* Follow best practices for code formatting and indentation.
3. **Code Comments:**
	* Add comments to explain complex code logic.
	* Use JSDoc-style comments for documentation.
4. **Testing:**
	* Write unit tests and integration tests for the application.
	* Use a testing library like Jest (version 27 or later).

**Deliverables:**

1. **Frontend Code:**
	* Provide the complete frontend codebase.
	* Include all necessary dependencies and configuration files.
2. **Backend Code:**
	* Provide the complete backend codebase.
	* Include all necessary dependencies and configuration files.
3. **README File:**
	* Provide a README file with instructions on how to run the application.
	* Include information on dependencies, configuration, and troubleshooting.
4. **API Documentation:**
	* Provide API documentation for the backend API.
	* Include information on API endpoints, request and response formats, and error handling.

**Evaluation Criteria:**

1. **Code Quality:**
	* Evaluate the code quality based on organization, style, comments, and testing.
2. **Functionality:**
	* Evaluate the functionality of the application based on the requirements.
3. **Performance:**
	* Evaluate the performance of the application based on optimization, caching, and query performance.
4. **Security:**
	* Evaluate the security of the application based on input validation, error handling, CSRF protection, and HTTPS.