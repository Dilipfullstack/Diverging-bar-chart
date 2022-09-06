const year = '1960	1961	1962	1963	1964	1965	1966	1967	1968	1969	1970	1971	1972	1973	1974	1975	1976	1977	1978	1979	1980	1981	1982	1983	1984	1985	1986	1987	1988	1989	1990	1991	1992	1993	1994	1995	1996	1997	1998	1999	2000	2001	2002	2003	2004	2005	2006	2007	2008	2009	2010	2011	2012	2013	2014	2015	2016	2017	2018	2019	2020	2021'
let yearArr = year.split("	")
const india = '37.02988388	39.23243578	42.16148186	48.42192346	56.48028994	59.55485458	45.86546203	50.1349422	53.08545587	58.44799502	62.42248305	67.35098802	71.46319383	85.51526959	99.52589912	98.47279646	102.7171645	121.4873225	137.3002953	152.9916538	186.3253451	193.49061	200.7151454	218.2622734	212.1582342	232.5118778	248.985994	279.0335841	296.5889948	296.042355	320.9790264	270.1053419	288.2084304	279.296023	327.2755835	360.2819527	392.8970543	415.8677539	421.3514775	458.8204173	468.3949373	485.4410145	514.9379489	607.6992854	709.1485148	820.3815955	940.2598888	1216.735442	1198.895582	1341.886603	1675.615336	1823.049928	1827.637859	1856.722121	2039.127446	2103.587814	2294.797981	2651.472946	2702.929719	2831.552223	2667.687952	3173.397591'
const indiaArr = india.split("	");
// console.log(indiaArr)
const uk = '73.23396769	77.7419657	81.24756416	86.56196181	94.40755835	101.8247551	108.5727521	113.1168882	107.7599101	116.4647028	130.6719462	148.1138963	169.965035	192.5379716	206.1313698	241.7566372	232.6145553	263.0664574	335.8830297	438.9940703	564.9477109	540.7656752	515.0489168	489.6180082	461.4870976	489.2851643	601.4526532	745.1626083	910.1227321	926.8848168	1093.169389	1142.797178	1179.65953	1061.388722	1140.489746	1346.422597	1421.514821	1559.569417	1653.391852	1685.762822	1662.127402	1643.908162	1784.076739	2057.093878	2421.814354	2544.829091	2717.059798	3106.182473	2938.882353	2425.798411	2491.110093	2674.891474	2719.158341	2803.291406	3087.165603	2956.573779	2722.851958	2699.016715	2900.791443	2878.673912	2756.900214	3186.859739'
const ukArr = uk.split('	')
// console.log(ukArr);
// 
const GDPdata = []

for(let i = 0; i < yearArr.length; i++) {
    let text = [parseFloat(indiaArr[i]).toFixed(2), parseFloat(ukArr[i]).toFixed(2), yearArr[i]]
    GDPdata.push(text)
}

console.log(GDPdata)

