import DelimitedTextFormatter from './delimited_text_formatter';

/**
 * @const
 * @private
 */
var DIGITS_PATTERN = /^\d*$/;

/**
 * @extends DelimitedTextFormatter
 */
class SocialSecurityNumberFormatter extends DelimitedTextFormatter {
  constructor() {
    super('-');
    this.maximumLength = 9 + 2;
  }

  /**
   * @param {number} index
   * @returns {boolean}
   */
  hasDelimiterAtIndex(index) {
    return index === 3 || index === 6;
  }

  /**
   * Determines whether the given change should be allowed and, if so, whether
   * it should be altered.
   *
   * @param {TextFieldStateChange} change
   * @param {function(string)} error
   * @returns {boolean}
   */
  isChangeValid(change, error) {
    if (DIGITS_PATTERN.test(change.inserted.text)) {
      return super.isChangeValid(change, error);
    } else {
      return false;
    }
  }
}

export default SocialSecurityNumberFormatter;
