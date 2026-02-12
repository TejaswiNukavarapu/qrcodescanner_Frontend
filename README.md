# Expo React Native Template

A modern React Native template built with Expo, featuring navigation, reusable components, and a clean architecture.

## Features

- ⚡ **Expo SDK 50** - Latest Expo features and optimizations
- 🧭 **React Navigation** - Stack and Tab navigation setup
- 🎨 **Reusable Components** - Button, Card components ready to use
- 📱 **Multiple Screens** - Home, Profile, and Settings screens
- 🎯 **Clean Architecture** - Organized folder structure
- 📦 **Modern Dependencies** - Up-to-date packages and best practices

## Project Structure

```
expo-template/
├── components/          # Reusable UI components
│   ├── Button.js
│   └── Card.js
├── navigation/          # Navigation configuration
│   └── AppNavigator.js
├── screens/            # App screens
│   ├── HomeScreen.js
│   ├── ProfileScreen.js
│   └── SettingsScreen.js
├── App.js              # Main app entry point
├── app.json            # Expo configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo Go app (for mobile testing)

### Installation

1. Clone or download this template
2. Navigate to the project directory:
   ```bash
   cd expo-template
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Choose one of the following options:

#### Web Browser
```bash
npm run web
```

#### Mobile Device (Expo Go)
```bash
npm start
```
Then scan the QR code with the Expo Go app on your iOS or Android device.

#### iOS Simulator (macOS only)
```bash
npm run ios
```

#### Android Emulator
```bash
npm run android
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator (macOS only)
- `npm run web` - Run in web browser

## Customization

### Adding New Screens

1. Create a new screen file in the `screens/` directory
2. Import and add the screen to `navigation/AppNavigator.js`
3. Update the Tab or Stack navigator as needed

### Creating Components

Add new reusable components to the `components/` directory and import them where needed.

### Styling

The template uses React Native's StyleSheet API. You can customize colors, fonts, and layouts in the respective screen or component files.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Documentation](https://reactnavigation.org/)

## Support

If you have any questions or need help, feel free to open an issue or reach out to the community.

---

Happy coding! 🚀
