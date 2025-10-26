# CivicSeva - React Native App Development Guide

This guide helps AI agents understand the key patterns and workflows of this React Native mobile application.

## Project Architecture

- **Root Structure**: React Native app using the standard community CLI template
- **Screen Components**: Located in `src/screens/`, following component-based architecture
- **Navigation**: Currently basic, with screen components imported directly in `App.jsx`
- **Styling**: Uses React Native `StyleSheet` with component-scoped styles

## Development Workflow

### Setup and Installation

```bash
# Install dependencies
npm install

# For iOS, additional setup required
bundle install
bundle exec pod install
```

### Development Commands

- `npm start`: Start Metro bundler
- `npm run android`: Run on Android
- `npm run ios`: Run on iOS
- `npm run lint`: Run ESLint
- `npm test`: Run Jest tests

### Key Development Patterns

1. **Component Structure**:
   - Screen components in `src/screens/`
   - Each component has its own file with component-scoped styles
   - Example: `LoginPage.jsx` demonstrates standard component structure

2. **State Management**:
   - Currently using React's built-in `useState` hooks
   - Example in `LoginPage.jsx`: `const [email, setemail] = useState('')`

3. **Styling Conventions**:
   - Use `StyleSheet.create` at the bottom of each component file
   - Follow `camelCase` naming for style objects
   - Container components use percentage-based dimensions for responsiveness

## Important Files

- `App.jsx`: Entry point and root component
- `src/screens/*.jsx`: Screen components
- `ios/Podfile`: iOS dependencies
- `android/build.gradle`: Android build configuration

## Dependencies

- React Native 0.82.1
- React 19.1.1
- Node.js >=20 required
- Uses TypeScript configuration but currently implements JSX files

## Testing

- Jest configured for unit testing
- Test files located in `__tests__/` directory
- Example test file: `App.test.tsx`

## Common Patterns to Follow

1. Use functional components with hooks
2. Keep styles in component-scoped StyleSheet objects
3. Follow existing naming conventions:
   - Components: PascalCase
   - Files: PascalCase.jsx
   - Style objects: camelCase

## Platform-Specific Considerations

### iOS
- Always run `bundle exec pod install` after adding native dependencies
- Test on both iPhone and iPad simulators when making UI changes

### Android
- Test on multiple screen sizes using different emulator configurations
- Consider Android-specific styling when implementing new UI components