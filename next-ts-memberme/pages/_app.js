// import type { AppProps /*, AppContext */ } from "next/app";
import App, { Container } from "next/app";
import SEO from "~/components/base/seo";
import Router from "next/router";
import rootSaga from "~/store/sagas/root";
import rootReducer from "~/store/reducers";
import withReduxSaga from "next-redux-saga";
import createSagaMiddleware, { END } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { initGA, logPageView } from "~/components/base/analytics";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, compose, applyMiddleware } from "redux";
// import "@/styles/globals.scss";

const configureSotre = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureSotre, {
  debug: process.env.NODE_ENV === "development",
});

class RootApp extends App {
  static async getInitialProps(context) {
    const { Component, ctx } = context;
    const { store, isServer } = ctx; // next의 context에서 store를 받을 수 있게된다.

    const pageProps = (await Component.getInitialProps?.(ctx)) || {};

    if (isServer) {
      // getInitialProps를 호출하는 환경이 서버일 경우에는는 모든 sagaTask가 완료된 상태의 스토어를 주입시켜줘야 한다.
      store.dispatch(END); // redux-saga의 END 액션 이용하여 saga task가 종료되도록 한다.
      await store.sagaTask.toPromise(); // saga task가 모두 종료되면 resolve 된다.
    }

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, ...other } = this.props;
    return (
      <Container>
        <SEO />
        <Component {...other} />
      </Container>
    );
  }
}

export default wrapper.withRedux(withReduxSaga(RootApp));
