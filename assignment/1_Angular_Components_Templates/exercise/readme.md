
# Angular Components and Debugging Challenge

## Challenge

In this exercise, you will:

1. Create a basic **Angular component** using the Angular CLI or manually.
2. Understand the **anatomy of a component** including its `.ts`, `.html`, and `.css` files.
3. Learn how to **bind data** using interpolation (`{{ }}`) inside your component template.
4. Use **debugging tools in VSCode** to step through the component’s class logic and inspect how Angular renders the template.

The provided example uses a `GreetingComponent` that shows how a message like `Hello, Apprentices!` is rendered dynamically using component data.

By the end, you should be able to:

- Create and use a simple Angular component.
- Understand how the class, template, and styles interact.
- Debug component logic using **breakpoints**, **step over**, and **step into** features in VSCode.

## Key Learnings

- Understand **what an Angular component is** and how it’s structured.
- Create a component with a class (`.ts`), template (`.html`), and style (`.css`).
- Use **interpolation** to render data from the component class into the template.
- Debug Angular components using VSCode tools, including stepping into methods and observing property values.

## User Story

As a developer, I want to create a reusable Angular component that displays dynamic data using interpolation. I want to understand the component structure and be able to debug the logic in the class.

## Acceptance Criteria

- A component (e.g., `GreetingComponent`) is successfully created and added to the app module.
- The component includes a `.ts` file with a `name` property and a corresponding `.html` file using `{{ name }}`.
- You can run the Angular app (`ng serve`) and see dynamic content rendered in the browser.
- You use the VSCode debugger or Chrome DevTools to:
  - **Step into** the class to inspect how `name` is initialized.
  - **Step over** lines of logic or methods (if added).
  - Set **breakpoints** to pause execution and inspect component behavior.
- You can explain how the `GreetingComponent` works and how data binding renders the view.

## Useful Resources

- [Angular Components Overview](https://angular.io/guide/architecture-components)
- [Angular Debugging Guide](https://angular.io/guide/debugging)
- [Interpolation in Angular](https://angular.io/guide/interpolation)