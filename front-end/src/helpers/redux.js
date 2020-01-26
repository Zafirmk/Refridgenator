import { combineReducers } from "redux";
import { Container } from "typedi";

// import AuthRedux from '../auth/auth.redux';

export default class Redux {
  get rootReducer() {
    // const authRedux = Container.get(AuthRedux);
    return combineReducers({
      // SEARCH //
      //   searchError: searchRedux.searchErrorReducer,
      //   searchLoading: searchRedux.searchLoadingReducer,
      //   search: searchRedux.searchSuccessReducer,
    });
  }
}
