shopping_list = ["Books", "Cheese", "Wheat", "Milk", "Wafer", "Wheat"]
vegis = ["Lemon", "Tomato", "Potato"]

# printing list items
for item in shopping_list:
    print(item)

# to add an item at the end of the list
shopping_list.append("Chocolate")
# shopping_list.append(vegis)

# to add multiple items at the end of the list
shopping_list.extend(vegis)


# to get the first index of any item
print(shopping_list.index("Wheat", 3))

# insert a value on specific index
shopping_list.insert(6, "Butter")
print(shopping_list)
