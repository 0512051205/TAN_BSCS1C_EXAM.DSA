let stack = [];

function peek() {
    if (stack.length === 0) {
        console.log("Stack is empty.");
        return null;
    }
    return stack[stack.length - 1];
}

function push(item) {
    stack.push(item);
    console.log("Pushed:", item);
    console.log("Top item (peek):", peek());
    console.log("Current Stack:", stack);
}

function pop() {
    let removed = stack.pop();
    console.log("Popped:", removed);
    console.log("Top item (peek):", peek());
    console.log("Current Stack:", stack);
}

// Collect 5 grocery items
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    push(item);
}

