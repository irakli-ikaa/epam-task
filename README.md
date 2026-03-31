### Sorting Validation Logic

The validation follows these steps:

**1. Select the sorting option** - 
Select "Price (low to high)" from the sort dropdown on the inventory page. This triggers the page to re-order the displayed items in ascending order.

**2. Scrape the price elements** - 
Collect all price elements from the inventory list as a WebDriverIO ElementArray.

**3. Parse the prices** - 
Map over the price elements, extracting the text from each one and removing the `$` sign and converting to the float format.

```javascript
parseFloat(text.replace("$", ""));
// "$9.99" → 9.99
```

**4. Create a sorted copy** - 
Copy the parsed prices array using the spread operator and sort it numerically in ascending order:

```javascript
const sortedPricesArr = [...pricesArr].sort((a, b) => a - b);
```

The original array is not mutated — the spread operator creates a new array for comparison.

**5. Compare the arrays** - 
Assert that the scraped prices array equals the sorted copy:

```javascript
expect(pricesArr).toEqual(sortedPricesArr);
```

If the page sorted correctly, both arrays will be identical. If any price is out of order, the test will fail.
