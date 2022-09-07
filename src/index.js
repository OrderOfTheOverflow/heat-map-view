import Config from "./config";

const ViewNativeComponent = require("react-native/Libraries/Components/View/ViewNativeComponent");
let installed = false;

export async function initHeatMapView(config) {
  if (!installed) {
    Object.assign(Config, config)
    const HeatView = require("./heatView").default;
    ViewNativeComponent.default = HeatView;
  }
  installed = true;
}
