module.exports = {
  plugins: ['tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'prettier/prettier': 'warn'
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx'],
      config: 'tailwind.config.js',
      removeDuplicates: true
    }
  }
}
