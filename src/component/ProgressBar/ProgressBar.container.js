/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */
import PropTypes from "prop-types";

import { PureComponent } from "react";

import ProgressBar from "./ProgressBar.component";

/** @namespace Component/ProgressBar/Container */
export class ProgressBarContainer extends PureComponent {
  static propTypes = {
    list: PropTypes.array,
    index: PropTypes.number,
  };

  static defaultProps = {
    list: [],
    index: 0,
  };

  containerProps() {
    const { list, index } = this.props;

    return {
      list,
      index,
    };
  }

  render() {
    return <ProgressBar {...this.containerProps()} />;
  }
}

export default ProgressBarContainer;
