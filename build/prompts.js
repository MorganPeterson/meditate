"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPrompt = void 0;
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
const oneOf = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomPrompt = () => {
    const medium = oneOf(mediums);
    const prep = oneOf(prepositions);
    const subject = oneOf(subjects);
    const relation = oneOf(relations);
    const author = oneOf(authors);
    const message = `${medium} ${prep} ${subject} ${relation} ${author}`;
    const prompt = `Please write an original ${message}.`;
    const commitMsg = message.charAt(0).toUpperCase() + message.slice(1);
    return [prompt, commitMsg];
};
exports.randomPrompt = randomPrompt;
