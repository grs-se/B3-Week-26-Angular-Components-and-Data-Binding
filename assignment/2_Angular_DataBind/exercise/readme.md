
# Angular Binding and Forms Challenge

## Challenge

In this exercise, you will:

1. Explore **property binding** to dynamically control element attributes such as image sources and button states.
2. Use **event binding** to react to user inputs, clicks, keyboard events, and mouse interactions.
3. Implement **two-way binding** using `ngModel` to bind form inputs to component properties in real-time.
4. Compare and apply both **event-driven** and **template-driven** form handling techniques.

You will build a small profile form component that:
- Shows a profile image dynamically.
- Has an input form to capture user data.
- Displays entered values in real-time.
- Reacts to keyboard and mouse events.
- Submits data using both manual and template-driven approaches.

By the end, you should be able to:

- Bind component properties to the DOM.
- Handle user interactions via events.
- Use `ngModel` for real-time data updates.
- Understand when to use event-driven vs. template-driven forms.

## Key Learnings

- Dynamic HTML rendering with **property binding**.
- Handling click, input, mouse, and keyboard events with **event binding**.
- Synchronizing data with the UI using **two-way binding**.
- Leveraging Angular’s forms module for efficient input capture.

## User Story

As a developer, I want to create an interactive profile form in Angular that reacts to user inputs, binds dynamic data to HTML, and demonstrates both manual and automatic form submission techniques.

## Acceptance Criteria

- A component is created with the following:
  - An image tag that binds `[src]` and `[alt]` from component properties.
  - A form with `[(ngModel)]` to bind email or username.
  - A disabled button bound to a component property.
  - Event handlers for:
    - `(click)` to show a message.
    - `(input)` to log changes.
    - `(keyup.enter)` to handle Enter key.
    - `(mouseover)` to apply a hover effect.
- Two form submission methods:
  - A **manual** method using `(click)`.
  - A **template-driven** method using `ngForm` and `(ngSubmit)`.
- Real-time display of user input using interpolation.
- Console logs or alerts to verify each event and submission.

## Useful Resources

- [Angular Property Binding](https://angular.io/guide/property-binding)
- [Angular Event Binding](https://angular.io/guide/event-binding)
- [Angular Two-Way Binding](https://angular.io/guide/forms-overview)
- [Template-driven Forms](https://angular.io/guide/forms)
