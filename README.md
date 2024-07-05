# SheetFlow - A Google Sheets Clone
A basic SPA for qualifying the hiring round of a company on college campus.


# SheetFlow Design App

The SheetFlow App is a mobile application built using React Native that allows you to create and edit a simple spreadsheet-like interface. You can change cell values and download the spreadsheet in XLSX format.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Screenshots](#screenshots)
5. [Dependencies](#dependencies)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

To get started with the Google Sheets Design App, follow these steps:

1. Clone the repository:

   ```bash
      git clone https://github.com/Saarim-Salim/SheetFlow.git
      cd SheetFlow
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

The Google Sheets Design App provides a simple interface for creating and editing a spreadsheet.

- **Editing Cells:** Tap on a cell to edit its contents.
- **Saving Data:** The app automatically saves your changes to local storage using `AsyncStorage`.
- **Downloading Spreadsheet:** You can download the spreadsheet as an XLSX file by tapping the "cloud-download" icon in the header. The download feature uses the `react-native-fs` library.

## Features

- Spreadsheet-like interface.
- Cell editing with data persistence.
- Download the spreadsheet in XLSX format.

## Screenshots

Include screenshots of your app to showcase its functionality. You can add images here.

<img width="326" alt="image" src="https://github.com/Saarim-Salim/competishunSubmission/assets/20147775/5a09844c-c2eb-4e29-935a-bc1439a3ca50">
<img width="1440" alt="Screenshot 2023-10-28 at 12 48 06 PM" src="https://github.com/Saarim-Salim/competishunSubmission/assets/20147775/30ca3234-ad41-4f48-b280-eaffcf67f962">
<img width="399" alt="image" src="https://github.com/Saarim-Salim/competishunSubmission/assets/20147775/38d50827-86c3-4ef5-b741-22bcc4781b98">


## Dependencies

The Google Sheets Design App relies on the following technologies and libraries:

- [React Native](https://reactnative.dev/): A framework for building mobile applications.
- [React Navigation](https://reactnavigation.org/): Used for app navigation.
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/): For storing and retrieving data locally.
- [react-native-fs](https://github.com/itinance/react-native-fs): Used for file system operations like downloading files.

## Contributing

We welcome contributions from the community to make the Google Sheets Design App even better. If you'd like to contribute, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push the changes to your fork on GitHub.
6. Create a pull request to the original repository.
