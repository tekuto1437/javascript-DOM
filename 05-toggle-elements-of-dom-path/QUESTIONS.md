# DOM Atomic 05: Toggle Elements of DOM Path

## Questions

---

> Describe the contract you used for finding the movies to toggle in the DOM. How is this function different from other functions that find elements in the DOM?

Šajā gadījumā es izmantoju .getElementsByClassName (), bet es izmantoju .querySelectorAll (). .getElementsByClassName () aizņem tikai vienu argumentu, tāpēc jūs nevarēsit pārvietoties kokā. Tomēr .querySelectorAll () ļauj iegūt precīzāku informāciju. Šajā gadījumā kā arguments, ko mēs ievietojām "ul.second_five li", tas liek datoram atrast visus tagus ar "ul" klasi, tad no šiem tagiem mēs ņemsim tikai tos, kas ir atzīmēti ar "second_five", atstarpe ir pēcnācēja simbols, kas liek tai ņemt tikai tos elementus ar pirmajiem diviem atribūtiem, kas atzīmēti kā saraksta elementi.
