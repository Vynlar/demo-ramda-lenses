import R from 'ramda';
const {
  compose,
  curry,
  lensProp,
  lensPath,
  lensIndex,
  over,
  set,
  view
} = R;

// Person Lenses
export const nameLens = lensProp('name');
export const socialMediaLens = media => lensPath(['socialMedia', media]);

// Social Media Lenses
export const usernameLens = lensProp('username');
export const urlLens = lensProp('urlLens');

export const examplePerson = () => {
  return {
    name: 'Fred',
    socialMedia: {
      twitter: {
        username: '@fred',
        url: 'http://twitter.com/@fred',
      }
    }
  };
};
