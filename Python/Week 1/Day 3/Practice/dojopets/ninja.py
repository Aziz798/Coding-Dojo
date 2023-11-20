
from pet import Pet 

class Ninja:
    # constructor
    def __init__(self, first_name, last_name,treats,pet_foods ,pet ):
        self.first_name = first_name
        self.last_name= last_name
        self.treats= treats
        self.pet_foods= pet_foods
        self.pet= pet
        
    def walk(self):
        self.pet.play()
    def feed(self):
        self.pet.eat()
    def bathe(self):
        self.pet.noise()
            
            
ninja_zed = Ninja("John", "Doe" , 10 , 5 , Pet("Fluffy", "Dog", ["sit", "Roll over"]))
ninja_zed.walk()
ninja_zed.bathe()
ninja_zed.feed()


