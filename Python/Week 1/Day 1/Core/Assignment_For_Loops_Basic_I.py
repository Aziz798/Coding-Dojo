# Basic - Print all integers from 0 to 150.
for i in range(151):
    print(i)
# Multiples of Five - Print all the multiples of 5 from 5 to 1,000
for j in range(5,1001,+5):
    print(j)
# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
for f in range(1,101):
    if f%10==0:
        print("Coding Dojo")
    elif f%5==0:
        print("Coding")
    else:
        print(f)
# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
a=0
for r in range(500001):
    a+=r
print(a)
# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for t in range(2018,0,-4):
    print(t)
# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)
def flexible_counter(lowNum, highNum, mult):
    for num in range(lowNum, highNum + 1):
        if num % mult == 0:
            print(num)
lowNum = 2
highNum = 9
mult = 3

flexible_counter(lowNum, highNum, mult)
