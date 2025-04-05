import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById('series');
var seasonsAvgElement = document.getElementById('seasons-average');
renderSeriesInTable(dataSeries);
seasonsAvgElement.innerHTML = "".concat(getSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.position, "</td>\n            <td><a href=\"").concat(serie.link, "\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
