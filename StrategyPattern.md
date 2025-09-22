Strategy Design Pattern
📌 Intent

The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one in a separate class, and make them interchangeable at runtime.

🚧 Problem

Imagine building a navigation app:

The first version supported car routes only.

Later updates added walking, public transport, cycling, and tourist routes.

Each new routing algorithm bloated the main navigator class.

Changes or bug fixes risked breaking existing functionality.

Teamwork became inefficient due to frequent merge conflicts.

💡 Solution

The Strategy pattern solves this by:

Extracting each algorithm into its own class called a Strategy.

Keeping a Context class that holds a reference to one strategy.

Letting the client decide which strategy to use at runtime.

Allowing new algorithms to be added without modifying existing code.

🌍 Real-World Analogy

Getting to the airport:

You can take a bus, call a cab, or ride a bike.

These are your strategies, and you can choose based on budget, time, or convenience.

🏗 Structure

Context: Maintains a reference to a strategy and delegates execution.

Strategy Interface: Declares a common method for all algorithms.

Concrete Strategies: Implement different versions of the algorithm.

Client: Selects and provides a strategy to the context.

// Strategy interface
interface Strategy {
  execute(a: number, b: number): number;
}

// Concrete strategies
class Add implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class Subtract implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class Multiply implements Strategy {
  execute(a: number, b: number): number {
    return a * b;
  }
}

// Context
class Context {
  private strategy!: Strategy;

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(a: number, b: number): number {
    if (!this.strategy) {
      throw new Error("Strategy not set!");
    }
    return this.strategy.execute(a, b);
  }
}

// Client
function main() {
  const context = new Context();

  context.setStrategy(new Add());
  console.log("Add:", context.executeStrategy(5, 3)); // Output: 8

  context.setStrategy(new Subtract());
  console.log("Subtract:", context.executeStrategy(5, 3)); // Output: 2

  context.setStrategy(new Multiply());
  console.log("Multiply:", context.executeStrategy(5, 3)); // Output: 15
}

main();


✅ Applicability

Use the Strategy pattern when:

You need to switch between multiple algorithms at runtime.

You have many similar classes that differ only in algorithm behavior.

You want to reduce conditional statements in your code.

You want to isolate business logic from algorithm details.

⚖ Pros and Cons
Pros

Swap algorithms at runtime.

Encapsulate algorithm details separately.

Encourages composition over inheritance.

Open/Closed Principle → add new strategies without changing existing code.

Cons

Adds extra classes and complexity.

Clients must understand the differences between strategies.

🔗 Relations to Other Patterns

Command: Parameterizes objects with actions but focuses on execution history and scheduling.

Decorator: Changes the skin of an object; Strategy changes the guts.

Template Method: Uses inheritance to alter behavior; Strategy uses composition.

State: Similar to Strategy, but states are aware of each other and can modify the context directly.

📚 Summary

The Strategy Design Pattern provides flexibility by defining a family of interchangeable algorithms. It helps keep code clean, maintainable, and extensible, making it a go-to choice when working with dynamic algorithm selection.