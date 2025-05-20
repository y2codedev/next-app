module.exports = {
  extends: ['next', 'next/core-web-vitals'], // Make sure to extend Next.js ESLint config
  rules: {
    '@typescript-eslint/ban-ts-comment': ['off'], // Disable the ban-ts-comment rule
  },
};
