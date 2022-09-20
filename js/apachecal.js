/***************************************************************************************************************
 * *************************************************************************************************************
 * 
 * 
 *                                                           LE THEME                                          *
 * 
 * 
 * **************************************************************************************************************
 * *************************************************************************************************************/

















/***************************************************************************************************************
 * *************************************************************************************************************
 * 
 * 
 *                                                           LE CODE                                           *
 * 
 * 
 * **************************************************************************************************************
 * *************************************************************************************************************/


const minScreenWidth = 700;
/* la taille de la balise*/

 if (screen.width < minScreenWidth ) {
        document.getElementById("container").style.height="3500px";
        /*var c = screen.width/7; //on centre comme un connard
        var s = c+"px"
        document.getElementById("container").style.left = s;*/
    }
    else
    {
        document.getElementById("container").style.height="1200px";
        
    }


    /* le calendrier */


    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, 'purple-passion', {
        renderer: 'svg',
        useDirtyRect: false
    });
    var app = {};

    var option; //mobile
    var option2; //autre

    function getVirtulData(year) {
        const y = year;
        var a = [];
        var b = [];
        var c = [];
        //window.alert(year);

        if (y == 2020) {

            a = [
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-01-26'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-01-27'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-01-28'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-01-29'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-01-30'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-01-31'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-01'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-02'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-03'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-04'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-05'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-06'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-07'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-08'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-09'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-10'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-11'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-12'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-13'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-14'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-15'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-16'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-17'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-18'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-19'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-20'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-21'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-22'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-23'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-24'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-25'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-26'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-27'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-28'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-02-29'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-01'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-02'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-03'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-04'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-05'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-06'))), 2.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-07'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-08'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-09'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-10'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-11'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-12'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-13'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-14'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-15'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-16'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-17'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-18'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-19'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-20'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-21'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-22'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-23'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-24'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-25'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-26'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-27'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-28'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-29'))), 10.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-30'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-03-31'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-01'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-02'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-03'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-04'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-05'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-06'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-07'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-08'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-09'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-15'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-16'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-18'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-20'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-04-21'))), 2.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-05-15'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-01'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-10'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-11'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-12'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-13'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-14'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-15'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-16'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-17'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-18'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-19'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-20'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-21'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-22'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-23'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-24'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-25'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-26'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-27'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-28'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-29'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-06-30'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-01'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-02'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-03'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-04'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-05'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-06'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-07'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-08'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-09'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-10'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-11'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-12'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-13'))), 10.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-14'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-15'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-16'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-17'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-18'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-19'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-20'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-21'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-22'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-23'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-24'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-25'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-26'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-27'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-28'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-29'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-30'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-07-31'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-01'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-02'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-03'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-04'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-05'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-06'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-07'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-08'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-09'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-10'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-11'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-12'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-13'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-14'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-15'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-16'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-17'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-18'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-19'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-20'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-21'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-22'))), 5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-23'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-24'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-25'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-26'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-27'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-28'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-29'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-30'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-08-31'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-01'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-02'))), 10.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-03'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-04'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-05'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-06'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-07'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-08'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-09'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-10'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-11'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-12'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-13'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-14'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-15'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-16'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-17'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-18'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-19'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-20'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-21'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-22'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-23'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-24'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-25'))), 10],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-26'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-27'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-28'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-29'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-09-30'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-01'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-02'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-03'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-04'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-05'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-06'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-07'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-08'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-09'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-10'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-11'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-12'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-13'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-14'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-15'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-16'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-17'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-18'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-19'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-20'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-21'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-22'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-23'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-24'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-25'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-26'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-27'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-28'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-29'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-30'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-10-31'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-01'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-02'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-03'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-04'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-05'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-06'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-07'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-08'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-09'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-10'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-11'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-12'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-13'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-14'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-15'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-16'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-17'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-18'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-19'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-20'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-21'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-22'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-23'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-24'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-25'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-26'))), 11.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-27'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-28'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-29'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-11-30'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-01'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-02'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-03'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-04'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-05'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-06'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-07'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-08'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-09'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-10'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-11'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-12'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-13'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-14'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-15'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-16'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-17'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-18'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-19'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-20'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-21'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-22'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-23'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-24'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-25'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-26'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-27'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-28'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-29'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-30'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2020-12-31'))), 6.75],


            ];


            //alert("Fin if 1");

        }

        if (y == 2020) {
            //alert(a);
            const data = a
            return data;
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        if (y == 2021) {

            b = [
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-01'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-02'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-03'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-04'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-05'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-06'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-07'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-08'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-09'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-10'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-11'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-12'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-13'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-14'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-15'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-16'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-17'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-18'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-19'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-20'))), 5.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-21'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-22'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-23'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-24'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-25'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-26'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-27'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-28'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-29'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-30'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-01-31'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-01'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-02'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-03'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-04'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-05'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-06'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-07'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-08'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-09'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-10'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-11'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-12'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-13'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-14'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-15'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-16'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-17'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-18'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-19'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-20'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-21'))), 4.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-22'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-23'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-24'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-25'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-26'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-27'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-02-28'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-01'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-02'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-03'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-04'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-05'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-06'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-07'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-08'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-09'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-10'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-11'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-12'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-13'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-14'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-15'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-16'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-17'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-18'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-19'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-20'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-21'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-22'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-23'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-24'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-25'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-26'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-27'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-28'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-29'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-30'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-03-31'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-01'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-02'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-03'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-04'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-05'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-06'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-07'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-08'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-09'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-10'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-11'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-12'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-13'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-14'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-15'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-16'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-17'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-18'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-19'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-20'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-21'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-22'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-23'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-24'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-25'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-26'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-27'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-28'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-29'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-04-30'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-01'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-02'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-03'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-04'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-05'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-06'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-07'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-08'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-09'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-10'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-11'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-12'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-13'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-14'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-15'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-16'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-17'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-18'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-19'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-20'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-21'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-22'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-23'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-24'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-25'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-26'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-27'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-28'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-29'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-30'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-05-31'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-01'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-02'))), 5.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-03'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-04'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-05'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-06'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-07'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-08'))), ],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-09'))), ],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-10'))), ],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-11'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-12'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-13'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-14'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-15'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-16'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-17'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-18'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-19'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-20'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-21'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-22'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-23'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-24'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-25'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-26'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-27'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-28'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-29'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-06-30'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-01'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-02'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-03'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-04'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-05'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-06'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-07'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-08'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-09'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-10'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-11'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-12'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-13'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-14'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-15'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-16'))), 4.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-17'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-18'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-19'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-20'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-21'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-22'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-23'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-24'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-25'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-26'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-27'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-28'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-29'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-30'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-07-31'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-01'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-02'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-03'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-04'))), 4.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-05'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-06'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-07'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-08'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-09'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-10'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-11'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-12'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-13'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-14'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-15'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-16'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-17'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-18'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-19'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-20'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-21'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-22'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-23'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-24'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-25'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-26'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-27'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-28'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-29'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-30'))), 6],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-08-31'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-01'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-02'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-03'))), 3.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-04'))), 10.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-05'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-06'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-07'))), 10],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-08'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-09'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-10'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-11'))), 5.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-12'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-13'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-14'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-15'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-16'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-17'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-18'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-19'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-20'))), 5.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-21'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-22'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-23'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-24'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-25'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-26'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-27'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-28'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-29'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-09-30'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-01'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-02'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-03'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-04'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-05'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-06'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-07'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-08'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-09'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-10'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-11'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-12'))), 5.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-13'))), 5.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-14'))), 6.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-15'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-16'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-17'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-18'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-19'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-20'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-21'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-22'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-23'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-24'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-25'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-26'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-27'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-28'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-29'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-30'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-10-31'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-01'))), 6.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-02'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-03'))), 8.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-04'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-05'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-06'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-07'))), 9.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-08'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-09'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-10'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-11'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-12'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-13'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-14'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-15'))), 10.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-16'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-17'))), 5.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-18'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-19'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-20'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-21'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-22'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-23'))), 4.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-24'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-25'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-26'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-27'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-28'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-29'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-11-30'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-01'))), 3.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-02'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-03'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-04'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-05'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-06'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-07'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-08'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-09'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-10'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-11'))), 6.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-12'))), 7],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-13'))), 5.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-14'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-15'))), 9],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-16'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-17'))), 9.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-18'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-19'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-20'))), 7.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-21'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-22'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-23'))), 8],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-24'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-25'))), 9.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-26'))), 8.25],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-27'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-28'))), 7.5],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-29'))), 8.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-30'))), 7.75],
                [echarts.format.formatTime('yyyy-MM-dd', (echarts.number.parseDate('2021-12-31'))), 8.5],



            ];



        }

        if (y == 2021) {
            const data = b
            return data;
        }

    



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (y == 2022) {

        c = [
            [echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-01'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-02'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-03'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-04'))),5.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-05'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-06'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-07'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-08'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-09'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-10'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-11'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-12'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-13'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-14'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-15'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-16'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-17'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-18'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-19'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-20'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-21'))),10.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-22'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-23'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-24'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-25'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-26'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-27'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-28'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-29'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-30'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-01-31'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-01'))),9],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-02'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-03'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-04'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-05'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-06'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-07'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-08'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-09'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-10'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-11'))),9],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-12'))),9.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-13'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-14'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-15'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-16'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-17'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-18'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-19'))),6.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-20'))),5.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-21'))),2.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-22'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-23'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-24'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-25'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-26'))),6.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-27'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-02-28'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-01'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-02'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-03'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-04'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-05'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-06'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-07'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-08'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-09'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-10'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-11'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-12'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-13'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-14'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-15'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-16'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-17'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-18'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-19'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-20'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-21'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-22'))),6.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-23'))),4.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-24'))),6.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-25'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-26'))),6.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-27'))),6.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-28'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-29'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-30'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-03-31'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-01'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-02'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-03'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-04'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-05'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-06'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-07'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-08'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-09'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-10'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-11'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-12'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-13'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-14'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-15'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-16'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-17'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-18'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-19'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-20'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-21'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-22'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-23'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-24'))),6.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-25'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-26'))),5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-27'))),6.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-28'))),5.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-29'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-04-30'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-01'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-02'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-03'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-04'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-05'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-06'))),9.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-07'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-08'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-09'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-10'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-11'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-12'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-13'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-14'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-15'))),6.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-16'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-17'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-18'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-19'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-20'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-21'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-22'))),6.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-23'))),6.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-24'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-25'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-26'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-27'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-28'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-29'))),6.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-30'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-05-31'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-01'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-02'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-03'))),6.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-04'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-05'))),9],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-06'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-07'))),7.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-08'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-09'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-10'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-11'))),9.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-12'))),1.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-13'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-14'))),9.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-15'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-16'))),9],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-17'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-18'))),6.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-19'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-20'))),8.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-21'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-22'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-23'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-24'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-25'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-26'))),5.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-27'))),9.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-28'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-29'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-06-30'))),7],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-01'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-02'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-03'))),8.75],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-04'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-05'))),8],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-06'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-07'))),9.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-08'))),7.5],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-09'))),8.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-10'))),7.25],
[echarts.format.formatTime('yyyy-MM-dd',(echarts.number.parseDate('2022-07-11'))),8],-1



        ];



    }

        if (y == 2022) {
            const data = c
            return data;
        }

    }




    // 2021



    option = {
        tooltip: {
            position: 'top',
            formatter: function(p) {
                var format = echarts.format.formatTime('dd-MM-yyyy', p.data[0]);
                return format + ': ' + p.data[1];
            }
        },
        visualMap: {
            min: 1.25,
            max: 11.25,
            calculable: true,
            orient: 'vertical',
            left: '650',
            top: 'center'
        },
        calendar: [{
            orient: 'vertical',
            range: '2020'
        }, {
            //left: 300,
            top:1200,
            orient: 'vertical',
            range: '2021'
        }, {
            //left: 520,
            //cellSize: [20, 'auto'],
            top: 2400,
            orient: 'vertical',
            range: '2022',
            
            dayLabel: {
                margin: 5
            }
        }],
        series: [{
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: getVirtulData('2020')
        }, {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: getVirtulData('2021')
        }, {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 2,
            data: getVirtulData('2022')
        }]
    };














    option2 = {
        tooltip: {
            position: 'top',
            formatter: function(p) {
                var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0]);
                return format + ': ' + p.data[1];
            }
        },
        visualMap: {
            min: 1.25,
            max: 11.25,
            calculable: true,
            orient: 'vertical',
            left: '650',
            top: 'center'
        },
        calendar: [{
            orient: 'vertical',
            range: '2020'
        }, {
            left: 300,
            //top:1200,
            orient: 'vertical',
            range: '2021'
        }, {
            left: 520,
            //cellSize: [20, 'auto'],
            //top: 2400,
            orient: 'vertical',
            range: '2022',
            dayLabel: {
                margin: 5
            }
        }],
        series: [{
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: getVirtulData('2020')
        }, {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: getVirtulData('2021')
        }, {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 2,
            data: getVirtulData('2022')
        }]
    };




// on triche pour rendre le site responsive
let element 

    if (option && typeof option === 'object' && screen.width < minScreenWidth ) 
    {
        myChart.setOption(option);
    }
    else if (option && typeof option === 'object')
    {
        myChart.setOption(option2);
        
    }






    window.addEventListener('resize', myChart.resize);