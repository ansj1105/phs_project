This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 프로젝트 실행 방법

### 1. 의존성 설치

프로젝트를 처음 실행하기 전에 필요한 패키지를 설치합니다:

```bash
npm install
```

### 2. 개발 서버 실행

개발 모드로 프로젝트를 실행합니다:

```bash
npm run dev
```

또는 다른 패키지 매니저를 사용하는 경우:

```bash
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

### 3. 브라우저에서 확인

개발 서버가 시작되면 다음 주소에서 프로젝트를 확인할 수 있습니다:

- **한국어**: [http://localhost:3000/ko](http://localhost:3000/ko)
- **English**: [http://localhost:3000/en](http://localhost:3000/en)

기본 경로(`http://localhost:3000`)로 접속하면 기본 로케일로 리다이렉트됩니다.

### 4. 프로덕션 빌드 (선택사항)

프로덕션 환경에서 실행하려면:

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 주요 기능

- **다국어 지원**: 한국어(ko)와 영어(en) 지원
- **관리자 대시보드**: 콘텐츠, 갤러리, 슬라이더 등을 관리할 수 있는 관리자 페이지
- **파일 기반 데이터베이스**: `data/db.json` 파일을 사용하여 데이터 저장 (자동 생성됨)

## 프로젝트 구조

- `app/[locale]/` - 다국어 페이지 라우트
- `components/` - 재사용 가능한 컴포넌트
- `lib/db.ts` - 데이터베이스 관련 유틸리티
- `data/db.json` - 데이터 저장 파일 (자동 생성)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
