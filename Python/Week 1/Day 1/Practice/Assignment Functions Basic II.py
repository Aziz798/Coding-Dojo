# Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).a
a=int(input("give number: "))
for i in range(a,-1,-1):
    print(i)
# Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
def print_and_return(numbers):
    print("First value:", numbers[0])
    return numbers[1]
# First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
def first_plus_length(my_list):
    result = my_list[0] + len(my_list)
    return result
#Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
def values_greater_than_second(my_list):
    second_value = my_list[1]
    new_list = [value for value in my_list if value > second_value]
    print("Number of values greater than the second value:", len(new_list))
    return new_list
# This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
def create_list(size, value):
    new_list = [value] * size
    return new_list
