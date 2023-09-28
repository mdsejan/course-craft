# Course Registration Project

## Project Features

## 1. Course Card Display and Selection

The **Course Card Display** feature allows users to view available courses with essential details such as the course title, description, price, and credit hours. The standout feature is the ability to select courses by clicking the "Select" button on each card. This feature provides a straightforward and visually appealing way for users to explore and choose their desired courses, streamlining the course selection process.

## 2. Intelligent Cart Management

The **Cart Management** feature simplifies course registration by providing a dedicated cart where users can review their selected courses. The cart dynamically updates as courses are added or removed, giving users a real-time overview of their selections. The system also enforces a credit hour limit, preventing users from exceeding a predefined threshold. If the limit is reached, a toast notification alerts the user. This feature ensures that users can efficiently manage their course selections while staying within their credit hour constraints.

## 3. User Guidance and Notifications

The **User Guidance and Notifications** feature enhances the user experience by providing helpful notifications throughout the registration process. Toast notifications offer instant feedback when significant events occur, such as reaching the credit hour limit or attempting to select a course multiple times. This user-centric approach ensures that users are well-informed and can make informed decisions while registering for courses, ultimately improving the overall user satisfaction with the platform.

# State managing in Course Registration Project

In the **Course Registration** project, managing the application's state is crucial to keep track of selected courses, calculate the total credit hours, enforce credit hour limits, and update the user interface accordingly. Here's an overview of how state management is typically implemented in such a project:

- **Component State:** Each course card and the cart itself are typically React components that can have their own local state. For example, a course card component may have a state variable to track whether it has been selected.

- **Event Handling:** When a user clicks the "Select" button on a course card, an event handler is triggered. This handler dispatches an action to update the state based on the user's interaction.
