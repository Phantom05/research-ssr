import React from "react";
import { useImmer } from "use-immer";
import { HomeComponent } from "~/components/common/home";
import { saga_test } from "~/store/actions";
import { useSelector, useDispatch } from "react-redux";
const intialState = {
  number: 0,
};
// NOTE: 훅스를 사가로 웹핑할까..?
// console.log(saga_test, "saga_test");
const HomeContainer = () => {
  const [values, setValues] = useImmer(intialState);
  const dispatch = useDispatch();
  const { base } = useSelector((state) => state);
  const handleClick = () => {
    dispatch(saga_test.index(`${Math.ceil(Math.random() * 20)}`));
  };

  return (
    <>
      <HomeComponent search="old" />

      <button onClick={handleClick}>Click</button>
      <div>
        {base.sagaTest.pending === true && "Loading"}
        {base.sagaTest.success === true && "Success."}
        {base.sagaTest.data && <div>{JSON.stringify(base.sagaTest.data)}</div>}
      </div>
    </>
  );
};

export default HomeContainer;
