interface Profile {
  name: string;
  age: number;
  bio: string;
}

export const rateProfile = (
  profile: Profile,
  swipeLeft: () => void,
  swipeRight: () => void
): void => {
  if (profile.bio.includes('TypeScript')) {
    swipeRight();
    return;
  }
  swipeLeft();
};
const profile: Profile = {
  name: 'Peter Parker',
  age: 31,
  bio: 'Huge soccer fan ⚽️ Living in Dallas. Python = ❤️'
};

const profile2: Profile = {
  name: 'Julia Green',
  age: 24,
  bio: 'From Chile. Sushi lover 🍣 Learning TypeScript on codewars.com. Always be yourself. Unless you can be a unicorn, then always be a unicorn 🦄'
};

const swipeRight = () => {
  console.log('Executing Swipe Right. You Matched!');
};
const swipeLeft = () => {
  console.log('Executing Swipe Left. Keep searching...');
};
rateProfile(profile, swipeLeft, swipeRight);
rateProfile(profile2, swipeLeft, swipeRight);
