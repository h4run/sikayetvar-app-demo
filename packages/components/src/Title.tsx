import React from "react";

import Text, { Props } from "./Text";
import { colors } from "./utils";

const Title: React.SFC<Props> = props => {
  return <Text {...props} />;
};

Title.defaultProps = {
  fontWeight: 700,
  style: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.gray
  }
};

export default Title;
