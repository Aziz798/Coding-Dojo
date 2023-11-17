from pet import Pet


class Dog(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, "dog", tricks)

Dog1=Dog("Loo",["swim","sleep"])

Dog1.noise()