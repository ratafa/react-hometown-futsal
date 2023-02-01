    import React from "react";
    import styled, {css} from "styled-components";

    const Container = styled.div`
    display: flex;
    flex-direction: ${({reverse}) => (reverse ? 'column-reverse' : 'column')};
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

    const Col = ({children, ...props}) => {
        return (
            <Container {...props}>
                {children}
            </Container>
        )
    }
    Col.defaultProps = {
        gap: 0,
        reverse: false,
        justify: 'flex-start',
        align: 'flex-start',
        padding: 0,
        fill: false,
    }

    export default Col;
