// // app/document.tsx

// import { Html, Head, Main, NextScript } from "next/document";
// import { extractCritical } from "@emotion/server";
// import createCache from "@emotion/cache";
// import { CacheProvider } from "@emotion/react";
// import "antd/dist/antd.css"; // Import Ant Design styles

// const cache = createCache({ key: "css", prepend: true });
// cache.compat = true;

// export default function Document(props: any) {
//   const { html, head } = extractCritical(props.html);

//   return (
//     <Html lang="en">
//       <Head>
//         {/* Include critical CSS */}
//         <style
//           data-emotion-css={cache.key}
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//         {/* Add other head elements here */}
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
