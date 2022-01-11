Exercises on node.js Day 8

## 01 - Countries

À l'aide de l'url suivante : "[https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)" :

- Créez un array vide `countriesNames`
- Créez une fonction `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
- Afficher les noms des pays récupérés dans la console, séparés par un tiret

## 02 - Chuck Norris

À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

- Créez une fonction `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console

## 03 - Pokemon

À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :

- Créez une fonction `catchPokemon` qui recevra un nombre en paramètre (il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet id. Elle affichera ensuite dans la console :

    id: xxx // remplacer xxx par l'id du pokemon
    name: "xxx" // remplacer xxx par le nom du pokémon

## Bonus - Black Jack

Vous connaissez le Black Jack ? Aujourd'hui, on va le coder ! Petit rappel des règles :

- Le joueur démarre avec un score de 0
- La banque démarre avec un score aléatoire entre 16 et 21, qui restera caché jusqu'à la fin de la partie
- À chaque tour, on propose au joueur de tirer une carte et il peut :
    - Tirer une carte de valeur aléatoire entre 1 et 10 : cette valeur est ajoutée à son score. Si son score est supérieur à 21, la partie se termine automatiquement, sinon on passe au tour suivant (option "draw")
    - Passer son tour uniquement si son score est supérieur à 16 ce qui met fin à la partie (option "pass")
- À la fin de la partie, on annonce le score du joueur et de la banque ainsi que le résultat :
    - Le score du joueur est supérieur à 21 ⇒ il perd
    - Le score du joueur est 21 ⇒ il fait un "Black Jack" et gagne
    - Le score du joueur est supérieur au score de la banque ⇒ il gagne
    - Le score est inférieur ou égal au score de la banque ⇒ il perd