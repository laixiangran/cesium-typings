/**
 * Created by laixiangran on 2017/11/17.
 * homepage：http://www.laixiangran.cn.
 */

/// <reference path="./index.d.ts" />

const view = new Cesium.Viewer('');
Cesium.BingMapsApi.defaultKey = 'AihaXS6TtE_olKOVdtkMenAMq1L5nDlnU69mRtNisz1vZavr1HhdqGRNkB2Bcqvs';
// Add Bing imagery
view.imageryLayers.addImageryProvider(new Cesium.BingMapsImageryProvider({
    url: 'https://dev.virtualearth.net',
    mapStyle: Cesium.BingMapsStyle.AERIAL
}));
