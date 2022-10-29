// importing plot functions
import { desktopPlot, mobilePlot, svg } from './barChart';



if (window.innerWidth >= 560) {
    desktopPlot();
} else {
    mobilePlot();
}


window.addEventListener('resize', () => {
    location.reload();
})




