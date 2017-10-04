// application
import { cutwords } from './cutwords';
import { striptags } from './striptags';
import { trimstring } from './trimstring';

export const shorten = (input, length = 100) =>
  cutwords(striptags(trimstring(input)), length);

export default shorten;
