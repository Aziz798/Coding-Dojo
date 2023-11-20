class Pet:
    def __init__(self,name,pet_type,tricks):
        self.name= name
        self.pet_type = pet_type
        self.tricks = tricks
        self.health= 100
        self.energy=100


    def sleep(self):
        self.energy+=25

    def eat(self):
        self.energy+=25
        self.health+=10

    def play(self):
        self.health+= 5

    def run(self):
        self.energy-=5    

    def noise(self):
        if(self.pet_type=='Dog') :
            print("habhab")
        elif(self.pet_type == "cat"):
            print("miaw")
        else:
            print("moooooooooooooo") 


pet = Pet("rex","dog",["bite","lick"])
pet.eat()
pet.sleep()
pet.play()
pet.run()
pet.noise()
