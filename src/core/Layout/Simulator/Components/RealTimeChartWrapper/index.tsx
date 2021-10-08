import React, { memo, FC } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

type AdvancedRealTimeChartProps = {
    theme: any;
};

const RealTimeChartWrapper:FC <AdvancedRealTimeChartProps> = ({theme}) => {
    return (
        <AdvancedRealTimeChart interval={'1'} range={'1D'} theme={theme} style={'3'} width={'auto'} height={350}/>
    )
}

export default memo(RealTimeChartWrapper)
