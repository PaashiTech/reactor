# The humble diaglog box tutorial

Inspired by [The humble dialog box](https://www.martinfowler.com/eaaDev/uiArchs.html).

## What you'll build

We'll build a simple login flow.

* A user can see a simple login window that asks for username and password
* Once the user enters the right credentials (admin, admin),  a success message is shown.

## Strategy

* Build a testable [walking skeleton](https://www.forbes.com/sites/forbestechcouncil/2020/01/02/using-a-walking-skeleton-to-reduce-risk-in-software-innovation/).

  * We first want to [write a simple ui](/docs/examples/humble/view.md) and test whether the it is displayed correctly. This is in line with other approaches such as [React](https://react.dev/learn/thinking-in-react).

  * Then, we want to... Refactor while keeping tests green

* Write model and hooks

* Add tooling

When developing an app, we want to structure it for [composability](/docs/why/folders.md).
