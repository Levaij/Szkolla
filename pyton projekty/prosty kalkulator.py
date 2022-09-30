import random 

print("Podaj Liczbe X")

x = float(input())

print("Podaj liczbe Y")

y = float(input())

print("Twoje liczby to" + "\n" , x , "oraz" , y)

a = float((x + y))

b = float((x - y))

c = float((x * y))

d = float((x / y))

print("wybież działanie" + "\n" + "1 = dodawanie" + "\n" + "2 = odejmowanie" + "\n" + "3 = mnożenie" + "\n" + "4 = dzielenie")



zapytanie = float(input())



if zapytanie == 1:
    print("wynik dodawania", x , "oraz", y , "wynosi" , a, "!")

elif zapytanie == 2:
    print("wynik odejmowania", x , "oraz", y , "wynosi" , b, "!")

elif zapytanie == 3:
    print("wynik mnożenia", x , "oraz", y , "wynosi" , c, "!")

elif zapytanie == 4:
    print("wynik dzielania", x , "oraz", y , "wynosi" , d, "!")

else:
    print("nie znane dzialanie")



    


    


