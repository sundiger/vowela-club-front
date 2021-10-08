import React, { memo, FC } from "react";
import {SymbolInfo} from "react-ts-tradingview-widgets/dist";

type SymbolInfoWrapperProps = {
    theme: any;
};

const SymbolInfoWrapper :FC <SymbolInfoWrapperProps> = ({theme}) => {
    return (
        <SymbolInfo colorTheme={theme} autosize/>
    )
}

export default memo(SymbolInfoWrapper)
