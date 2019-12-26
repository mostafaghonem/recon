export default function buildMakeComment({ x }) {
  return function makeComment({ author } = {}) {
    return Object.freeze({
      getAuthor: () => author
    });
  };
}
