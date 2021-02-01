import { PlainTemplate } from "~/components/base/template";
import { MainHeader } from "~/components/common/header";

const about = () => {
  // NOTE: test z
  return (
    <>
      <PlainTemplate header={<MainHeader />}>About Page</PlainTemplate>
    </>
  );
};

export default about;
