const mediums = [
  'poem',
  'soliloquy',
  'short story',
  'meditation',
  'speech',
  'essay',
  'journal entry',
  'reflection',
  'ode',
  'song',
  'fable',
  'fairy tale',
  'yarn',
  'tall tale',
  'parable',
  'comedy',
  'tragedy',
];

const prepositions = [
  'about',
  'on',
  'concerning',
  'considering',
  'regarding',
  'for',
];

const subjects = [
  'absurdism',
  'existentialism',
  'the nature of existence',
  'idealism',
  'cynicism',
  'realism',
  'pragmatism',
  'politics',
  'economics',
  'love',
  'a dream',
  'the sun',
  'the moon',
  'the stars',
  'the universe',
  'science',
  'faith',
  'truth',
  'uncertainty',
  'mortality',
  'transcendence',
  'enlightenment',
  'humanity',
  'art',
  'food',
  'revolution',
  'justice',
  'ethics',
  'ambiguity',
  'joy',
  'adventure',
  'tragedy',
  'action',
  'comedy',
  'youth',
  'old age',
  'middle age',
  'depression',
  'inspiration',
  'a subject of your choosing',
];

const relations = [
  'in the style of',
  'based on the works of',
  'written by',
  'in the voice of',
];

const authors = [
  'Albert Camus',
  'Franz Kafka',
  'Samuel Beckett',
  'Edward Albee',
  'Jean-Paul Sartre',
  'Saul Bellow',
  'Donald Barthelme',
  'Cormac McCarthy',
  'Alexander Vvedensky',
  'Daniil Kharms',
  'Nikolai Zabolotsky',
];

const oneOf = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];

export const makeCommitMsg = (msg: string) => msg.charAt(0).toUpperCase() + msg.slice(1);

export const randomPrompt = (): string[] => {
  const medium = oneOf(mediums);
  const prep = oneOf(prepositions);
  const subject = oneOf(subjects);
  const relation = oneOf(relations);
  const author = oneOf(authors);
  const message = `${medium} ${prep} ${subject} ${relation} ${author}`;

  const prompt = `Please write an original ${message}.`;
  const commitMsg = makeCommitMsg(message);
  return [prompt, commitMsg];
};
