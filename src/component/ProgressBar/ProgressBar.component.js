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

import "./ProgressBar.style";

/**
 * Button for adding product to Cart
 * @class ProgressBar
 * @namespace Component/ProgressBar/Component
 */

export class ProgressBar extends PureComponent {
  static propTypes = {
    list: PropTypes.array,
    index: PropTypes.number,
  };

  static defaultProps = {
    list: [],
    index: 0,
  };

  render() {
    const { list, index } = this.props;

    const beforeIndex = list.length <= index;

    return (
      <div className="progressBar">
        <div className="center gap">
          <div className="stick main-bg" />
          {list.map((a, b) => {
            const label = b + 1;

            const beforeIndex = label <= index;
            const current = label - 1 === index || index >= label;
            const circleIcon = beforeIndex ? <>&#x2713;</> : label;

            return (
              <>
                <div className="item center column gap" key={b}>
                  <Circle disabled={current}>{circleIcon}</Circle>
                  <div
                    className={
                      "label" + (beforeIndex || current ? "" : " color-gray")
                    }
                  >
                    {a}
                  </div>
                </div>
                {list.length !== label && (
                  <div
                    className={"stick2" + (!beforeIndex ? "" : " disabledBar")}
                  />
                )}
              </>
            );
          })}
          <div className={"stick" + (!beforeIndex ? "" : " disabledBar")} />
        </div>
      </div>
    );
  }
}

class Circle extends PureComponent {
  render() {
    const { disabled } = this.props;

    return (
      <div
        className={"circle center" + (disabled ? " main-bg" : "")}
        {...this.props}
      />
    );
  }
}

export default ProgressBar;
