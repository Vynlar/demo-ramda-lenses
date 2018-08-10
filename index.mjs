import R from 'ramda';
import {
  examplePerson,
  nameLens,
  socialMediaLens,
  usernameLens
} from './Person';

const fred = examplePerson();

const freds = [
  examplePerson(),
  examplePerson(),
  examplePerson(),
];

console.log(
  R.view(
    R.compose(socialMediaLens('twitter'), usernameLens),
    fred
  )
);
