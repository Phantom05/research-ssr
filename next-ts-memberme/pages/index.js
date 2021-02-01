// import styles from "../styles/Home.module.css";
// // import Test from "~/components/Test";

// export default function Home() {
//   return (
//     <div>
//       {/* <Test /> */}
//       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//     </div>
//   );
// }

import { PlainTemplate } from "~/components/base/template";
import { MainHeader } from "~/components/common/header";
import { HomeContainer } from "~/containers/home";
const Home = () => {
  return (
    <>
      <PlainTemplate header={<MainHeader />}>
        <HomeContainer />
      </PlainTemplate>
    </>
  );
};

export default Home;
