var wms_layers = [];

var format_Ocean_Indonesia_0 = new ol.format.GeoJSON();
var features_Ocean_Indonesia_0 = format_Ocean_Indonesia_0.readFeatures(json_Ocean_Indonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocean_Indonesia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocean_Indonesia_0.addFeatures(features_Ocean_Indonesia_0);
var lyr_Ocean_Indonesia_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocean_Indonesia_0, 
                style: style_Ocean_Indonesia_0,
                popuplayertitle: 'Ocean_Indonesia',
                interactive: false,
                title: '<img src="styles/legend/Ocean_Indonesia_0.png" /> Ocean_Indonesia'
            });
var format_Jabalnusra_1 = new ol.format.GeoJSON();
var features_Jabalnusra_1 = format_Jabalnusra_1.readFeatures(json_Jabalnusra_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jabalnusra_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jabalnusra_1.addFeatures(features_Jabalnusra_1);
var lyr_Jabalnusra_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jabalnusra_1, 
                style: style_Jabalnusra_1,
                popuplayertitle: 'Jabalnusra',
                interactive: false,
                title: '<img src="styles/legend/Jabalnusra_1.png" /> Jabalnusra'
            });
var format_Batas_DAS_Jabalnusra_2 = new ol.format.GeoJSON();
var features_Batas_DAS_Jabalnusra_2 = format_Batas_DAS_Jabalnusra_2.readFeatures(json_Batas_DAS_Jabalnusra_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_DAS_Jabalnusra_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_DAS_Jabalnusra_2.addFeatures(features_Batas_DAS_Jabalnusra_2);
var lyr_Batas_DAS_Jabalnusra_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_DAS_Jabalnusra_2, 
                style: style_Batas_DAS_Jabalnusra_2,
                popuplayertitle: 'Batas_DAS_Jabalnusra',
                interactive: true,
                title: '<img src="styles/legend/Batas_DAS_Jabalnusra_2.png" /> Batas_DAS_Jabalnusra'
            });
var format_Other_Countries_3 = new ol.format.GeoJSON();
var features_Other_Countries_3 = format_Other_Countries_3.readFeatures(json_Other_Countries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_Countries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_Countries_3.addFeatures(features_Other_Countries_3);
var lyr_Other_Countries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Other_Countries_3, 
                style: style_Other_Countries_3,
                popuplayertitle: 'Other_Countries',
                interactive: false,
                title: '<img src="styles/legend/Other_Countries_3.png" /> Other_Countries'
            });

lyr_Ocean_Indonesia_0.setVisible(true);lyr_Jabalnusra_1.setVisible(true);lyr_Batas_DAS_Jabalnusra_2.setVisible(true);lyr_Other_Countries_3.setVisible(true);
var layersList = [lyr_Ocean_Indonesia_0,lyr_Jabalnusra_1,lyr_Batas_DAS_Jabalnusra_2,lyr_Other_Countries_3];
lyr_Ocean_Indonesia_0.set('fieldAliases', {'FID_Admin0': 'FID_Admin0', 'Raster': 'Raster', 'FID_Ocean': 'FID_Ocean', 'Id': 'Id', });
lyr_Jabalnusra_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Batas_DAS_Jabalnusra_2.set('fieldAliases', {'nama_das': 'nama_das', 'kd_das': 'kd_das', 'wil_kerja': 'wil_kerja', });
lyr_Other_Countries_3.set('fieldAliases', {'FID_Admin0': 'FID_Admin0', 'Raster': 'Raster', 'FID_all_to': 'FID_all_to', 'Dissolv': 'Dissolv', });
lyr_Ocean_Indonesia_0.set('fieldImages', {'FID_Admin0': 'Range', 'Raster': 'Range', 'FID_Ocean': 'Range', 'Id': 'Range', });
lyr_Jabalnusra_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROV': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Batas_DAS_Jabalnusra_2.set('fieldImages', {'nama_das': 'TextEdit', 'kd_das': 'Hidden', 'wil_kerja': 'TextEdit', });
lyr_Other_Countries_3.set('fieldImages', {'FID_Admin0': 'Range', 'Raster': 'Range', 'FID_all_to': 'Range', 'Dissolv': 'Range', });
lyr_Ocean_Indonesia_0.set('fieldLabels', {'FID_Admin0': 'no label', 'Raster': 'no label', 'FID_Ocean': 'no label', 'Id': 'no label', });
lyr_Jabalnusra_1.set('fieldLabels', {'OBJECTID': 'no label', 'PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Batas_DAS_Jabalnusra_2.set('fieldLabels', {'nama_das': 'inline label - always visible', 'wil_kerja': 'inline label - always visible', });
lyr_Other_Countries_3.set('fieldLabels', {'FID_Admin0': 'no label', 'Raster': 'no label', 'FID_all_to': 'no label', 'Dissolv': 'no label', });
lyr_Other_Countries_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});