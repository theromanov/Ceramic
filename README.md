# Ceramic Soul

**Ceramic Soul** is a responsive website for a handmade ceramics brand. It showcases ceramic products, introduces the brand, presents creative workshops, and allows visitors to get in touch through interactive forms.

## Project Pages

- **Home** — introduction to the brand, featured works, contact form, and newsletter subscription.
- **Catalog** — ceramic product categories with interactive tabs.
- **Blog** — articles and updates related to ceramics and creativity.
- **About** — information about the brand and its story.

## Features

- Responsive design for different screen sizes.
- Mobile navigation menu with interactive controls.
- Interactive catalog tabs for switching between product categories.
- Image carousel with Swiper.
- Slider navigation and pagination.
- Contact form with client-side validation.
- Newsletter form with email validation.
- Form submission using the Fetch API.
- REST API integration with JSONPlaceholder.
- Asynchronous HTTP POST requests.
- JSON response handling.
- Automatic form reset after successful submission.

## Technologies

- **HTML5** — website structure and semantic markup.
- **CSS3** — styling and responsive layouts.
- **Sass (SCSS)** — modular and maintainable stylesheets.
- **JavaScript (ES6+)** — interactive functionality and DOM manipulation.
- **JavaScript ES Modules** — modular code organization.
- **Fetch API** — HTTP requests and API communication.
- **REST API** — communication with external services.
- **JSON** — response data handling.
- **Promises** — asynchronous JavaScript operations.
- **Vite** — development server and build tool.
- **Swiper** — interactive image slider.
- **JustValidate** — client-side form validation.
- **PostCSS** — CSS processing.
- **postcss-pxtorem** — pixel-to-rem conversion.

## API Integration

The contact and newsletter forms use the Fetch API to send POST requests to JSONPlaceholder:

`https://jsonplaceholder.typicode.com/posts`

The application processes the server response as JSON and resets the form after a successful response.

> JSONPlaceholder is a testing API. Form submissions are simulated and are not permanently stored as real customer messages or newsletter subscriptions.

## Form Validation

Form validation is implemented using **JustValidate**.

Validation includes:

- Required fields.
- Name length restrictions.
- Email format validation.
- Message minimum length.
- Required checkbox confirmation.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd ceramic-soul
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npx vite
   ```

5. Open the local URL provided by Vite in your browser.

## Author

**Roman Syplyvyi**
