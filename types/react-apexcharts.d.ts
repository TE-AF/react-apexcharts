/// <reference types="react"/>

/**
 * Basic type definitions from https://apexcharts.com/docs/react-charts/#props
 */
declare module "react-apexcharts" {
    interface Props {
        type?: "line" | "area" | "bar" | "histogram" | "pie" | "donut" | "rangeBar" |
            "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "radar" | "polarArea",
        series?: Array<any>,
        width?: string | number,
        height?: string | number,
        options?: object,
        [key: string]: any,
    }

    export default class ReactApexChart extends React.Component<Props> {}
}
