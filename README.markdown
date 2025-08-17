# Number Comparison Quiz

This is a simple web application built with HTML, CSS, and JavaScript, allowing users to practice comparing different types of numbers (integers, decimals, fractions) through a dark-themed interface. Users select one of three buttons (>, =, <) to compare two displayed numbers. The application tracks the number of correct answers, total questions, accuracy percentage, and average response time per question.

## Features
- **Number Type Selection**: Users can choose one or more number types (integers, decimals, fractions) to compare.
- **Intuitive Interface**:
  - First number on the left, second number on the right, with three comparison buttons (>, =, <) in the center.
  - Statistics (correct answers, total questions, accuracy, average time) displayed in a box at the top-right corner.
  - Dark-themed interface with clear buttons and checkboxes.
- **Immediate Feedback**: Displays "Correct" or "Wrong" after each answer, showing the correct answer if wrong.
- **Statistics**: Tracks correct answers, total questions, accuracy (%), and average time per question (seconds).

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   ```
2. **Open the Project**:
   - Navigate to the project folder:
     ```bash
     cd <your-repo-name>
     ```
   - Open `index.html` in a web browser (no server required as this is a static application).
   - Alternatively, use a static server like Live Server in Visual Studio Code for preview.

## File Structure
- `index.html`: Main HTML file containing the application's interface structure.
- `styles.css`: CSS file for styling the dark theme, layout, and design.
- `script.js`: JavaScript file handling logic for generating questions, checking answers, and updating statistics.
- `README.md`: This file, describing the project and usage instructions.

## Usage
1. Open `index.html` in a web browser.
2. In the settings section (top-left corner):
   - Select at least one number type (integers, decimals, fractions) by checking the respective checkboxes.
   - Click the "Start" button to generate the first question.
3. Compare the two displayed numbers by clicking one of the three buttons (>, =, <).
4. Receive immediate feedback and monitor statistics in the top-right corner.
5. A new question will automatically appear after 1 second.

## Technologies Used
- **HTML5**: Interface structure.
- **CSS3**: Dark theme styling, flexbox layout, and absolute positioning.
- **JavaScript**: Logic for generating random numbers, comparing answers, and updating statistics.

## Requirements
- Modern web browser (Chrome, Firefox, Edge, etc.).
- No additional software or external libraries required.

## Author
- Created by [Your Name or Alias] with assistance from Grok (xAI).

## License
This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details (if included).