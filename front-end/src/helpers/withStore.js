import Container from "typedi";
import { connect } from "react-redux";

// import ProductRedux from "../home/home.redux";

const mapStateToProps = state => {
  return {
    // PRODUCTS //
    // recommendedProductsError: state.recommendedProductsError,
    // recommendedProductsLoading: state.recommendedProductsLoading,
    // recommendedProducts: state.recommendedProducts
  };
};

const mapDispatchToProps = dispatch => {
  //   const productRedux = Container.get(ProductRedux);

  return {
    // getReviews: () => dispatch(sellerReviewRedux.getReviews())
  };
};

export const withStore = () => Component => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
