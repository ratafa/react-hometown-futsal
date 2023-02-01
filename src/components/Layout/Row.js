import React from "react";
import styled, {css} from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: ${({wrap}) => wrap};
  flex-direction: ${({reverse}) => (reverse ? 'row-reverse' : 'row')};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
  gap: ${({gap}) => gap}px;
  padding: ${({padding}) => padding}px;

  ${({fill}) =>
          fill &&
          css`
            flex: 1;
          `}
`;

const Row = ({children, ...props}) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}
Row.defaultProps = {
    gap: 0,
    reverse: false,
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'flex-start',
    padding: 0,
    fill: false,
}

export default Row;
