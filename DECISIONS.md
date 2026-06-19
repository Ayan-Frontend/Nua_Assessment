# Architectural Decisions

One architectural decision I considered was whether to use Context API with useReducer or introduce Redux Toolkit for state management.

Redux Toolkit provides excellent tooling and scalability, especially for larger applications with complex state requirements. However, this assignment primarily focuses on cart management and UI state persistence. Introducing Redux would have added additional boilerplate and complexity without providing significant benefits for the current scope.

For this reason, I chose Context API combined with useReducer. This approach keeps the implementation lightweight while still providing predictable state updates and centralized cart management. It also keeps the project easier to understand for future contributors.

Another design decision involved product variants. The Fake Store API does not provide information about colors, sizes, or inventory levels. Since the assignment required variant selection and stock states, I created a local variant configuration layer. This allowed me to implement available, low stock, and sold-out states while maintaining a clean separation between API data and UI-specific product configuration.

If I had more time, I would improve several areas. First, I would create a more realistic product data layer with separate product and variant entities. Second, I would add unit tests for the variant selection logic and cart reducer. Third, I would implement a mock asynchronous Add to Cart flow with loading and failure states to better simulate production behavior.

I would also spend additional time improving accessibility by adding keyboard navigation support, ARIA attributes, and more comprehensive focus management throughout the application.

Overall, my focus for this submission was correctness, maintainability, clear component separation, and fulfilling the functional requirements outlined in the assignment.
