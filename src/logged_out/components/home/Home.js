import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HeadSection from './HeadSection';
import FeatureSection from './FeatureSection';
import PricingSection from './PricingSection';

class Home extends PureComponent {
  componentDidMount() {
    const { selectHome } = this.props;
    selectHome();
  }

  render() {
    const { openRegisterDialog } = this.props;
    return (
      <>
        <HeadSection openRegisterDialog={openRegisterDialog} />
        <FeatureSection />
        <PricingSection openRegisterDialog={openRegisterDialog} />
      </>
    );
  }
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
};

export default Home;
