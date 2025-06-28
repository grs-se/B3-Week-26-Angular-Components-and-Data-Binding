# Angular Components and Data Binding – Real-World Challenge

## Overview

In this exercise, you will build a **User Profile Card** component using Angular. This challenge integrates real-world scenarios involving **Component Architecture**, **Property Binding**, **Event Binding**, and **Two-Way Binding**.

By the end of this challenge, you will be able to:

- Create and structure Angular components.
- Use property and event bindings effectively.
- Implement two-way data binding for real-time input handling.
- Work with form inputs and user interactions using both event-driven and template-driven approaches.

---

## 🎯 Challenge Requirements

### Step 1: Create the UserProfileComponent

This component should represent a simple user profile card with:

- A profile picture
- User name display
- An input field to edit the name (two-way binding)
- A button to toggle the profile picture visibility
- Real-time preview of the name using interpolation

---

### Step 2: Use Property Binding

In `user-profile.component.html`, bind these attributes dynamically:

```html
<img [src]="profilePicUrl" [alt]="userName" *ngIf="showImage">
<p>Hello, {{ userName }}!</p>
<input [(ngModel)]="userName" placeholder="Edit your name">
<button (click)="toggleImage()">Toggle Image</button>
```

### Step 3: Add Logic in Component Class
In `user-profile.component.html`, implement logic like:

```ts
export class UserProfileComponent {
  userName = 'Beginner Dev';
  profilePicUrl = 'assets/default-profile.png';
  showImage = true;

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
```

### Step 4: Implement Event Binding
Add event handlers like:

```html
<input (keyup.enter)="saveName()">
<button (click)="resetName()">Reset</button>
And corresponding methods:
```

```ts
saveName() {
  alert(`Name saved: ${this.userName}`);
}

resetName() {
  this.userName = '';
}
```

### Step 5: Use Template-Driven Forms

```html
<form #profileForm="ngForm" (ngSubmit)="onSubmit(profileForm)">
  <input name="email" ngModel placeholder="Enter your email">
  <button type="submit">Submit</button>
</form>
```
```ts
onSubmit(form: NgForm) {
  console.log(form.value);
}
```

## ✅ Acceptance Criteria

- UserProfileComponent is structured correctly and reusable.

- Uses property, event, and two-way binding effectively.

- Form is functional using template-driven form techniques.

- You can toggle images and respond to user input events.

- Debug using Chrome DevTools or Angular DevTools to inspect bindings and DOM updates.

## 💡 Key Learnings

- How Angular components are structured and used.

- Real-world use of bindings and form inputs.

- Best practices in creating dynamic, interactive UI components.

##  🧰 Useful Resources

- [Angular Property Binding](https://angular.io/guide/property-binding)
- [Angular Event Binding](https://angular.io/guide/event-binding)
- [Angular Two-Way Binding](https://angular.io/guide/forms-overview#two-way-binding)
- [Angular Template-Driven Forms](https://angular.io/guide/forms)

Happy Coding!