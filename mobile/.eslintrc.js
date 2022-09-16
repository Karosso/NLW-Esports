module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['warn'],
        'react-hooks/exhaustive-deps': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },
  ],
};
