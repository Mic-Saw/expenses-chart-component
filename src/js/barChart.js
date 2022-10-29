// PLOTTING (d3.js)

const d3 = require('d3');

// importing data
import data from '../data/data.json';




export const desktopPlot = function () {

    // plot container
    const canvas = d3.select('.canvas');


    // worksheet for barchart
    const svg = canvas.append('svg');


    svg.attr('width', '65rem')
        .attr('height', '20.8rem')
        .style('position', 'relative');



    // maximum value
    const maxValue = Math.max(...data.map(d => d.amount));


    // scale 
    const scale = ((parseFloat(svg.attr('height'))) * 10 - 76) / maxValue;

    data.forEach((d, i) => {
        const group = svg.append('g');

        // VALUE
        group.append('rect')
            .attr('x', `${68 * i}`)
            .attr('y', `${parseFloat(svg.attr('height')) * 10 - d.amount * scale - 48 - 28}`)
            .attr('width', '7.5rem')
            .attr('height', '4rem')
            .attr('fill', 'hsl(25, 47%, 15%)')
            .attr('rx', 5)
            .attr('ry', 5)
            .attr('class', `amount${i}`)
            .style('position', 'absolute')
            .style('opacity', 0)


        group.append('text')
            .attr('dy', '2rem')
            .attr('x', `${12.5 + 68 * i}`)
            .attr('y', `${parseFloat(svg.attr('height')) * 10 - d.amount * scale - 48 - 22}`)
            .attr('fill', 'white')
            .attr('class', `amount${i}`)
            .style('font-size', '1.8rem')
            .style('font-weight', 700)
            .style('transform', `translateY(${parseFloat(svg.attr('height')) * 10})`)
            .text(`$${d.amount}`);



        // BARS
        group.append('rect')
            .attr('x', `${12.5 + 68 * i}`)
            .attr('y', 0)
            .attr('width', '5rem')
            .attr('height', `${d.amount * scale}`)
            .style('transform', `translateY(${parseFloat(svg.attr('height')) * 10 - d.amount * scale - 28}px)`)
            .attr('fill', '#ec755d')
            .attr('rx', 5)
            .attr('ry', 5)

            // hover effect
            .on('mouseover', function () {
                d3.select(this)
                    .attr('fill', '#b4e0e5')
                    .style('cursor', 'pointer')
                    .transition()
                    .duration('50');
                d3.select(`.amount${i}`)
                    .style('opacity', 1)
                    .transition()
                    .duration('50');
            })
            .on('mouseout', function () {
                d3.select(this)
                    .attr('fill', '#ec755d')
                    .transition()
                    .duration('50');
                d3.select(`.amount${i}`)
                    .style('opacity', 0)
                    .transition()
                    .duration('50');
            });


        group.append('text')
            .attr('dy', '2rem')
            .attr('x', `${22.5 + 68 * i}`)
            .attr('y', 180)
            .attr('fill', '#92857a')
            .style('font-size', '1.5rem')
            .style('transform', `translateY(${parseFloat(svg.attr('height')) * 10})`)
            .text(d.day);


    })
};




export const mobilePlot = function () {
    // plot container
    const canvas = d3.select('.canvas');


    // worksheet for barchart
    const svg = canvas.append('svg');


    svg.attr('width', '33rem')
        .attr('height', '18rem')
        .style('position', 'relative');


    // maximum value
    const maxValue = Math.max(...data.map(d => d.amount));


    // scale 
    const scale = ((parseFloat(svg.attr('height'))) * 10) / (maxValue + 10);

    data.forEach((d, i) => {


        const group = svg.append('g');

        // BARS
        group.append('rect')
            .attr('x', `${6 + 45 * i}`)
            .attr('y', 0)
            .attr('width', '3.3rem')
            .attr('height', `${d.amount * scale}`)
            .style('transform', `translateY(${parseFloat(svg.attr('height')) * 10 - d.amount * scale - 28}px)`)
            .attr('fill', '#ec755d')
            .attr('rx', 3)
            .attr('ry', 3)

            // hover effect
            .on('mouseover', function () {
                d3.select(this)
                    .attr('fill', '#b4e0e5')
                    .style('cursor', 'pointer')
                    .transition()
                    .duration('50');
                d3.select(`.amount${i}`)
                    .style('opacity', 1)
                    .transition()
                    .duration('50');
            })
            .on('mouseout', function () {
                d3.select(this)
                    .attr('fill', '#ec755d')
                    .transition()
                    .duration('50');
                d3.select(`.amount${i}`)
                    .style('opacity', 0)
                    .transition()
                    .duration('50');
            });


        group.append('text')
            .attr('dy', '2rem')
            .attr('x', `${8 + 45 * i}`)
            .attr('y', 150)
            .attr('fill', '#92857a')
            .style('font-size', '1.5rem')
            .style('transform', `translateY(${parseFloat(svg.attr('height')) * 10})`)
            .text(d.day);


    })

}



