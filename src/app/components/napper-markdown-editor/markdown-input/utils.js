import { mirrorKeys } from '@iziges/napper-core/lib/objects';
import { ucfirst } from '@iziges/napper-core/lib/strings';
import { EditorState } from 'draft-js';
import { stateToMarkdown } from 'draft-js-export-markdown';
import { stateFromMarkdown } from 'draft-js-import-markdown';

export const MARKDOWN_DEBOUNCE_MS = 500;
export const MARKDOWN_VIEWS = ['markdown', 'raw'];
export const MARKDOWN_EDITOR_VIEWS = mirrorKeys(MARKDOWN_VIEWS, [ucfirst]);

export const MARKDOWN_EDITOR_TOOLBAR = {
  blockType: {
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
  },
  inline: {
    options: ['bold', 'italic', 'underline', 'strikethrough'],
  },
  options: ['inline', 'blockType'],
};

export const parseMarkdown = rawContent => {
  const markdownContent = stateFromMarkdown(rawContent);
  const editorState = EditorState.createWithContent(markdownContent);
  return editorState;
};

export const stringifyMarkdown = editorState => {
  const markdownContent = editorState.getCurrentContent();
  const rawContent = stateToMarkdown(markdownContent);
  return rawContent;
};
