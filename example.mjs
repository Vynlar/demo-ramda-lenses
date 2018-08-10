import R from 'ramda';
const {
  lensPath,
  set,
  view,
  over,
  assocPath,
  lensProp,
  compose
} = R;

const David = {
  name: 'David',
  height: 6,
  mapping: 17, // public
  martialArts: {
    taikwondo: 3, // public
    karate: 17, // public
    haskell: {
      lenses: 4,
      recursion: "really good",
    },
  },
}

// another module with David
const pathToHaskellMapping = ['martialArts', 'haskell', 'mapping']

const newDavid = assocPath(pathToHaskellMapping, 9999,           David);

//console.log(David);
//console.log(newDavid);

//const mappingLens = lensPath(['martialArts', 'haskell', 'mapping']);
//const karateLens = lensPath(['martialArts', 'karate']);

const martialArtsLens = lensProp('martialArts');
const haskellLens = compose(martialArtsLens, lensProp('taikwondo'));

// public

export const karateLens = compose(martialArtsLens, lensProp('karate'));
export const taikwondo = compose(martialArtsLens, lensProp('taikwondo'));
export const haskellMappingLens = lensProp('mapping');

console.log(view(martialArtsLens, David));
