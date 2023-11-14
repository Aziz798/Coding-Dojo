num1 = 42
num2 = 2.3
boolean = True
string = 'Hello World'
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
fruit = ('blueberry', 'strawberry', 'banana')
print(type(fruit))   #class 'tuple'
print(pizza_toppings[1]) #Sausage
pizza_toppings.append('Mushrooms')
print(person['name'])#Jhon
person['name'] = 'George'
person['eye_color'] = 'blue'
print(fruit[2]) #banana

if num1 > 45:
    print("It's greater")
else:
    print("It's lower") #Its lower

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!") #Just right

for x in range(5):
    print(x) #0,1,2,3,4
for x in range(2,5):
    print(x) #2,3,4
for x in range(2,10,3):
    print(x) #2,5,8
x = 0
while(x < 5):
    print(x) #0,1,2,3,4
    x += 1

pizza_toppings.pop()
pizza_toppings.pop(1)

print(person) #{'name': 'George', 'location': 'Salt Lake', 'age': 37, 'is_balding': False, 'eye_color': 'blue'}
person.pop('eye_color')
print(person) #{'name': 'George', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement') #After 1st if statement After 1st if statement After 1st if statement
    if topping == 'Olives':
        break

def print_hello_ten_times():
    for num in range(10):
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)