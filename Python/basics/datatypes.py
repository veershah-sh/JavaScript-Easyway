# int -> integer
# float -> decimal point number
# str -> string
# bool -> boolean (True, False)


age  = 18 # int
per = 66.45 # float
name = "veer"  # str
isPresent = True # bool

# marks = int("43a")
# marks = int(True)
# marks = intinput("> "))
# marks = int(marks)

# print(marks)

# =====================================================

# sequential data types

# list -> array -> mutable
# tuple -> array -> immutable
# set -> array -> un-ordered -> unique
# dictonary -> array -> key:value pair

# list -> array -> mutable 
# [] 
# multiple datatypes allowed
# values must be seperated by commas(,)

# list() constructor is also used to create a list
# shopping_list = list()

# normally list is created using [] brackets
shopping_list = ["apple", "milk", "wafer", "pillow", "pencil"]
print(shopping_list)


# tuple -> array -> immutable
# ()
# multiple datatypes allowed
# values must be seperated by commas(,)

# tuple() constructor is also used to create a tuple
# hsc_per = tuple()

# normally tuple is created using () brackets
hsc_per = (65.34, 77.98, 74.87)
print(hsc_per)

# set -> array -> un-ordered -> unique
# {}
# multiple datatypes allowed
# values must be seperated by commas(,)

# set() constructor is also used to create a set
# roll_no = set()

# normally set is created using {} brackets
roll_no = {2,3,6,8,5,4,3,1,2}
fruits = {"apple", "orange", "kiwi", "melon"}
print(roll_no)
print(fruits)



# dictonary -> array -> key:value pair
# {}
# multiple datatypes allowed
# values must be seperated by commas(,)
# each data is in key:value pair

# dict() constructor is also used to create a dictonary
# person = dict()

# normally dictonary is created using {} brackets
person = {
    "name": "abc",
    "phno": "1234567890",
    "email": "abc@google.com",
    "isRegular": True,
    "age": 25,
    "workingRatio": 4.5
}

print(person)