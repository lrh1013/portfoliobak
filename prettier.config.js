// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "all", // 가능하면 후행 쉼표 사용
  tabWidth: 2, // 들여쓰기 공백 수
  semi: false, // 모든 구문 끝 세미콜론 출력
  singleQuote: true, // 쌍따옴표 대신 홑따옴표 사용
  bracketSpacing: true, // 객체 괄호에 공백 삽입
  printWidth: 80, // 줄 바꿈할 길이
  arrowParens: "always", // 항상 화살표 함수의 매개 변수를 괄호로 감쌈
  endOfLine: "auto", // OS에 따른 코드라인 끝 처리 방식 사용
  useTabs: false, // 탭 대신 공백
};

export default config;
