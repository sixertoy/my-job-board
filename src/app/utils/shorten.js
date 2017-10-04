// application
import { cutwords } from './cutwords';
import { striptags } from './striptags';
import { trimstring } from './trimstring';

export const shorten = input =>
  cutwords(striptags(trimstring(input)));

export default shorten;
