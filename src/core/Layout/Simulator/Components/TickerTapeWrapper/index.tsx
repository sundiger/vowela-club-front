import React, { memo, FC } from "react";
import {TickerTape} from "react-ts-tradingview-widgets/dist";
import SettingsStore from "../../../../../shared/stores/settingsStore";

type TickerTapeWrapperProps = {
    theme: any;
};

const TickerTapeWrapper:FC <TickerTapeWrapperProps> = ({theme}) => {
    return (
        <TickerTape colorTheme={theme} />
    )
}

export default memo(TickerTapeWrapper)
