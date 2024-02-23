import { Person } from './classes/person-class'

const person = new Person('Eduard', 33)

person.setNome('Eduard Montesquieu')
person.setAge(34)

console.log(person.introduceYourself())