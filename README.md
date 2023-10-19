# Exercices sur les tableaux

## avec map(), filter(), et reduce()

### **Comment choisir entre map, filter et reduce ?**

- Mon tableau de sortie est différent mais fait la même longueur ⇒ map()
- Mon tableau de sortie est plus petit en longueur ⇒ filter()
- Mon tableau de sortie est une "valeur" ⇒ reduce()

```jsx
tableau.reduce((acc, cur) => { 
	// ...
	return acc;
}, 0); // 0 => valeur de départ de l'accumulator
```
