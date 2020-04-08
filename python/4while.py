number = 23
running = True

# while 语句可以让你重复执行一个语句块，只要条件为真。
# 一个 while 语句就是所谓的 循环 语句的一个例子。
#  一个 while 语句可以有一个可选的 else 从句。
while running:
    guess = int(input('Enter an integer : '))

    if guess == number:
        print('Congratulations, you guessed it.')
        # 这会导致 while 循环停止
        running = False
    elif guess < number:
        print('No, it is a little higher than that.')
    else:
        print('No, it is a little lower than that.')
else:
    print('The while loop is over.')
    # 你可以在此处继续进行其它你想做的操作

print('Done')
