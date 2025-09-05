# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aahwahan Foundation is a React-based web application for an NGO focused on community development, education, healthcare, and environmental initiatives. The application is built using Create React App and follows a component-based architecture.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests (using Jest and React Testing Library)
npm test

# Run a single test file
npm test -- src/components/home/HeroSection.test.js
```

## Architecture Overview

### Technology Stack
- **Frontend Framework**: React 18.2 with functional components and hooks
- **Routing**: React Router v6
- **HTTP Client**: Axios for API calls
- **Styling**: CSS modules organized by component
- **Build Tool**: Create React App (react-scripts 5.0.1)

### Project Structure

```
src/
├── api/              # API service layer
│   └── homeApi.js    # Centralized API calls with mock data fallback
├── components/       # Reusable components
│   ├── common/       # Shared components (Header, Footer)
│   └── home/         # Home page section components
├── pages/            # Page components
│   └── HomePage.jsx  # Main landing page orchestrating all sections
├── styles/           # CSS files
│   ├── components/   # Component-specific styles
│   └── global.css    # Global styles
└── utils/            # Utility functions and constants
```

### Key Architectural Patterns

1. **Component Organization**: Each major section of the home page is a separate component in `src/components/home/`, receiving data through props from `HomePage.jsx`.

2. **Data Flow**: 
   - HomePage fetches all data via `homeApi.getHomeData()`
   - Data is passed down to child components as props
   - Loading and error states are handled at the page level

3. **API Layer**: 
   - `homeApi.js` provides a centralized interface for all API calls
   - Currently uses mock data with setTimeout to simulate API calls
   - Production API endpoint configured via `REACT_APP_API_BASE_URL` environment variable

4. **Styling Convention**: 
   - Component-specific CSS files in `src/styles/components/`
   - CSS class names follow BEM-like naming conventions
   - Global styles defined in `src/styles/global.css`

### Important Implementation Details

1. **Mock Data**: The application currently operates with extensive mock data defined in `homeApi.js`. When transitioning to a real backend:
   - Uncomment the axios calls in each API method
   - Remove the mock data implementation
   - Ensure the backend API matches the expected data structure

2. **Image Assets**: All images are stored in `public/images/` and referenced with absolute paths starting with `/images/`

3. **Environment Configuration**: Use `.env` file to set:
   ```
   REACT_APP_API_BASE_URL=http://your-api-endpoint/api
   ```

4. **Component Data Dependencies**: Each home section component expects specific data structure as props. Refer to the mock data in `homeApi.js` for the expected format.

### Development Workflow

1. When adding new sections to the homepage:
   - Create component in `src/components/home/`
   - Add corresponding CSS in `src/styles/components/`
   - Import and use in `HomePage.jsx`
   - Update mock data in `homeApi.js`

2. When creating new pages:
   - Add page component in `src/pages/`
   - Add route in `App.js`
   - Create necessary API methods in `src/api/`

3. For production deployment:
   - Run `npm run build` to create optimized production build
   - Deploy contents of `build/` directory
   - Configure environment variables on hosting platform