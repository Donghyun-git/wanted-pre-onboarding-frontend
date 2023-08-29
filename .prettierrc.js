module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,
  bracketSpacing: true,
};

// lint, prettier 자동화
//1. nodemodules 접근
//2. 터미널 cli 입력

// npx prettier --wrtie -cache .
// 처음 포맷팅 할 때 캐싱해서 다음 포맷팅할 때 변경된 사항이 없으면 캐싱된 포맷팅 사항 적용
