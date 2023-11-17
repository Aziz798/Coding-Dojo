class Player:
    def __init__(self, player_info):
        self.name = player_info["name"]
        self.age = player_info["age"]
        self.position = player_info["position"]
        self.team = player_info["team"]

# Instances creation
kevin_info = {
    "name": "Kevin Durant",
    "age": 34,
    "position": "small forward",
    "team": "Brooklyn Nets"
}

jason_info = {
    "name": "Jason Tatum",
    "age": 24,
    "position": "small forward",
    "team": "Boston Celtics"
}

kyrie_info = {
    "name": "Kyrie Irving",
    "age": 32,
    "position": "Point Guard",
    "team": "Brooklyn Nets"
}

# Creating Player instances
kevin = Player(kevin_info)
jason = Player(jason_info)
kyrie = Player(kyrie_info)

# List of players
players = [
    {
        "name": "Kevin Durant",
        "age": 34,
        "position": "small forward",
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum",
        "age": 24,
        "position": "small forward",
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving",
        "age": 32,
        "position": "Point Guard",
        "team": "Brooklyn Nets"
    },
    # ... (other player dictionaries)
]

# Populating new_team with Player objects using a for loop
new_team = [Player(player_info) for player_info in players]

# Ninja Bonus: Add an @class method called get_team(cls, team_list)
class Player:
    def __init__(self, player_info):
        self.name = player_info["name"]
        self.age = player_info["age"]
        self.position = player_info["position"]
        self.team = player_info["team"]

    @classmethod
    def get_team(cls, team_list):
        return [cls(player_info) for player_info in team_list]

# Example usage of the get_team class method
team_from_list = Player.get_team(players)
print(team_from_list)
