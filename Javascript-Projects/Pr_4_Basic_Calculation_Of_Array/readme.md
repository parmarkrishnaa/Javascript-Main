# 📘 JavaScript Array Methods – Documentation

This README provides explanations and examples for various JavaScript array methods demonstrated in the following files:

- `add-remove.js`
- `employee.js`
- `prog.js`
- `search-find.js`

---

## 📂 File: `add-remove.js`

### ✅ Array Initialization
```js
let items = ["Ved", "Chitt", "Shivam", "Jarir"];
```

### ✅ `push()`
Adds an item to the **end**.
```js
items.push("Nurul");
```

### ✅ `unshift()`
Adds an item to the **beginning**.
```js
items.unshift("Pratham");
```

### ✅ `splice(start, deleteCount, item)`
Replaces elements at specific positions.
```js
items.splice(0, 3, "Krishna");  // Replaces first 3 with "Krishna"
```

### ✅ `pop()`
Removes the last item.
```js
items.pop();
```

### ✅ `shift()`
Removes the first item.
```js
items.shift();
```

---

## 📂 File: `employee.js`

### ✅ `push()` / `unshift()`
Add multiple employees at start/end.

### ✅ `pop()` / `shift()`
Remove from start or end, respectively.

### ✅ `map()`
Creates an array of specific property.
```js
let names = employee.map(emp => emp.name);
```

### ✅ `filter()`
Filters items based on a condition.
```js
employee.filter(emp => emp.role === "Full Stack Developer");
```

### ✅ `find()`
Finds the **first** match.
```js
employee.find(emp => emp.id === '004');
```

### ✅ `findIndex()`
Finds index of first match.
```js
employee.findIndex(emp => emp.name === 'Ved');
```

### ✅ `some()`
Checks if **any** item matches.
```js
employee.some(emp => emp.role.includes("Designer"));
```

### ✅ `every()`
Checks if **all** items match condition.
```js
employee.every(emp => emp.salary !== '');
```

### ✅ `reverse()`
Reverses the array.
```js
[...employee].reverse();
```

### ✅ `includes()`
Checks if a value exists.
```js
names.includes("Krishna");
```

### ✅ `slice(start, end)`
Returns shallow copy from index `start` to `end - 1`.
```js
employee.slice(0, 3);
```

### ✅ `splice(start, deleteCount, newItem)`
Removes and inserts item(s).
```js
employee.splice(2, 1, { id: '008', name: 'Dev', ... });
```

### ✅ `join(separator)`
Joins array elements into a string.
```js
names.join(', ');
```

---

## 📂 File: `prog.js`

### ✅ `toString()`
Converts array to comma-separated string.
```js
items.toString();
```

### ✅ `at(index)`
Accesses array element using positive/negative index.
```js
items.at(2);  // "cherry"
```

### ✅ `concat()`
Combines two arrays.
```js
items.concat(items1);
```

### ✅ `join()`
Joins arrays into a single string.
```js
joinArray.join(', ');
```

---

## 📂 File: `search-find.js`

### ✅ `indexOf()`
Returns **first index** of match.
```js
items.indexOf("banana");
```

### ✅ `lastIndexOf()`
Returns **last index** of match.
```js
items.lastIndexOf("banana");
```

### ✅ `includes()`
Checks if array **contains** a value.
```js
items.includes("cherry");
```

### ⚠️ `find()` / `findIndex()` usage error
These functions require a **callback**, not a string:
```js
items.find(item => item === "apple");
items.findIndex(item => item === "coconut");
```

---

## 📌 Summary of Methods

| Method           | Description                                  |
|------------------|----------------------------------------------|
| `push()`         | Add to end                                   |
| `pop()`          | Remove from end                              |
| `unshift()`      | Add to start                                 |
| `shift()`        | Remove from start                            |
| `map()`          | Transform array                              |
| `filter()`       | Filter based on condition                    |
| `find()`         | Find first matching element                  |
| `findIndex()`    | Find index of first match                    |
| `some()`         | Checks if any element matches                |
| `every()`        | Checks if all elements match                 |
| `reverse()`      | Reverses array order                         |
| `includes()`     | Checks if value exists                       |
| `slice()`        | Gets subarray (non-destructive)             |
| `splice()`       | Removes/replaces elements (destructive)      |
| `join()`         | Converts array to string                     |
| `toString()`     | Similar to join with commas                  |
| `at()`           | Access element using index (positive/negative) |
| `concat()`       | Merge arrays                                 |
| `indexOf()`      | First occurrence index                       |
| `lastIndexOf()`  | Last occurrence index                        |

---
