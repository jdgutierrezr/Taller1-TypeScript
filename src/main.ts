import { dataSeries } from "./dataSeries.js";
import { Serie } from "./serie.js";

var seriesTbody: HTMLElement = document.getElementById( 'series' )!;
var seasonsAvgElement: HTMLElement = document.getElementById( 'seasons-average' )!;

renderSeriesInTable( dataSeries );

seasonsAvgElement.innerHTML = `${getSeasonsAverage(dataSeries)}`;

function renderSeriesInTable( series: Serie[] ) 
{
    console.log( 'Desplegando series' );

    series.forEach( (serie) => {
        let trElement = document.createElement( "tr" );
        trElement.innerHTML = `
            <td>${serie.position}</td>
            <td><a href="${serie.link}">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
      
        seriesTbody.appendChild( trElement );
    });
}

function getSeasonsAverage( series: Serie[] ) 
{
    var totalSeasons = 0;
    series.forEach( (serie) => totalSeasons = totalSeasons + serie.seasons );
    return totalSeasons / series.length;
}