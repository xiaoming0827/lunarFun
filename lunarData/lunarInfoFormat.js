/**
  *"1901": { // JSON 的 key 必须是双引号括起来的字符串
  *    "year": 1901, // 弄历年份的数字表示
  *    "firstMonth": 2, // 农历年份正月初一对应的公历月份
  *    "firstDay": 19, // 农历年份正月初一对应的公历日子
  *    "isRun": false, // 是否是闰年
  *    "runMonth": 0, // 是闰年的话闰几月，非闰年为 0
  *    "runMonthDays": 0, // 是闰年的话闰月的天数，非闰年为 0
  *    "monthsDays": [29,30,29,29,30,29,30,29,30,30,30,29] // 正常十二个月的每月天数
  *},
  */
 /**
  * 数据来源
  *  - [香港天文台](https://gb.weather.gov.hk/gts/time/conversionc.htm) 农历 1901年 - 2099年 数据
  *  - [asia-home](https://www.asia-home.com/china/nongli/year/2101/lang/cn.php) 农历 2100年数据
  */
 let lunarInfoFormat = {
    "1901":{"year":1901,"firstMonth":2,"firstDay":19,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,29,30,30,30,29]},
    "1902":{"year":1902,"firstMonth":2,"firstDay":8,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,30,29,30,30,30]},
    "1903":{"year":1903,"firstMonth":1,"firstDay":29,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[29,30,29,30,29,30,29,29,30,30,29,30]},
    "1904":{"year":1904,"firstMonth":2,"firstDay":16,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,29,30,29,29,30,30,29]},
    "1905":{"year":1905,"firstMonth":2,"firstDay":4,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,30,29,29,30,29,30,29,30]},
    "1906":{"year":1906,"firstMonth":1,"firstDay":25,"isRun":true,"runMonth":4,"runMonthDays":30,"monthsDays":[29,30,30,29,29,30,29,30,29,30,29,30]},
    "1907":{"year":1907,"firstMonth":2,"firstDay":13,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,30,29,30,29,30,29]},
    "1908":{"year":1908,"firstMonth":2,"firstDay":2,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,30,29,30,29,30,30,29,30]},
    "1909":{"year":1909,"firstMonth":1,"firstDay":22,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[29,30,29,30,29,30,29,30,30,30,29,30]},
    "1910":{"year":1910,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,29,30,30,30,29]},
    "1911":{"year":1911,"firstMonth":1,"firstDay":30,"isRun":true,"runMonth":6,"runMonthDays":29,"monthsDays":[30,29,30,29,29,30,29,30,30,29,30,30]},
    "1912":{"year":1912,"firstMonth":2,"firstDay":18,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,29,30,30,29,30]},
    "1913":{"year":1913,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,29,30,29,29,30,29,30]},
    "1914":{"year":1914,"firstMonth":1,"firstDay":26,"isRun":true,"runMonth":5,"runMonthDays":30,"monthsDays":[30,30,29,30,29,29,30,29,29,30,29,30]},
    "1915":{"year":1915,"firstMonth":2,"firstDay":14,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,29,30,29,30,29,29]},
    "1916":{"year":1916,"firstMonth":2,"firstDay":3,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,30,29,30,29,30,29]},
    "1917":{"year":1917,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[30,29,30,29,30,30,29,30,30,29,30,29]},
    "1918":{"year":1918,"firstMonth":2,"firstDay":11,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,30,29,30,30,29,30,30]},
    "1919":{"year":1919,"firstMonth":2,"firstDay":1,"isRun":true,"runMonth":7,"runMonthDays":30,"monthsDays":[29,30,29,29,30,29,29,30,29,30,30,30]},
    "1920":{"year":1920,"firstMonth":2,"firstDay":20,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,29,30,29,30,30,30]},
    "1921":{"year":1921,"firstMonth":2,"firstDay":8,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,29,30,29,30,30]},
    "1922":{"year":1922,"firstMonth":1,"firstDay":28,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[30,29,30,30,29,30,29,29,30,29,30,30]},
    "1923":{"year":1923,"firstMonth":2,"firstDay":16,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,29,30,29,29,30,29,30]},
    "1924":{"year":1924,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,30,29,30,29,30,29,29]},
    "1925":{"year":1925,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":4,"runMonthDays":30,"monthsDays":[30,29,30,29,30,29,30,30,29,30,29,30]},
    "1926":{"year":1926,"firstMonth":2,"firstDay":13,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,29,30,29,30,29,30,30,29,30,30,29]},
    "1927":{"year":1927,"firstMonth":2,"firstDay":2,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,30,29,30,29,30,30,30]},
    "1928":{"year":1928,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[29,30,29,30,29,29,30,29,30,30,30,30]},
    "1929":{"year":1929,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,29,30,29,30,30,30]},
    "1930":{"year":1930,"firstMonth":1,"firstDay":30,"isRun":true,"runMonth":6,"runMonthDays":29,"monthsDays":[29,30,30,29,29,30,29,30,29,30,30,29]},
    "1931":{"year":1931,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,29,30,29,30,29]},
    "1932":{"year":1932,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,30,29,30,29,30,29,29,30,29,30]},
    "1933":{"year":1933,"firstMonth":1,"firstDay":26,"isRun":true,"runMonth":5,"runMonthDays":30,"monthsDays":[29,30,30,29,30,29,30,29,30,29,29,30]},
    "1934":{"year":1934,"firstMonth":2,"firstDay":14,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,30,29,30,29,30,30,29,30]},
    "1935":{"year":1935,"firstMonth":2,"firstDay":4,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,29,30,29,30,29,30,30,29,30,30,29]},
    "1936":{"year":1936,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":3,"runMonthDays":30,"monthsDays":[30,29,29,29,29,30,30,29,30,30,30,29]},
    "1937":{"year":1937,"firstMonth":2,"firstDay":11,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,29,30,29,30,30,30,29]},
    "1938":{"year":1938,"firstMonth":1,"firstDay":31,"isRun":true,"runMonth":7,"runMonthDays":30,"monthsDays":[29,30,29,29,30,29,29,29,30,30,29,30]},
    "1939":{"year":1939,"firstMonth":2,"firstDay":19,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,29,30,29,29,30,29,30,29,30]},
    "1940":{"year":1940,"firstMonth":2,"firstDay":8,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,29,30,29,30,29]},
    "1941":{"year":1941,"firstMonth":1,"firstDay":27,"isRun":true,"runMonth":6,"runMonthDays":30,"monthsDays":[30,30,29,30,30,29,29,29,30,29,30,29]},
    "1942":{"year":1942,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,29,30,29,30,29,30]},
    "1943":{"year":1943,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,30,29,30,29,30,29]},
    "1944":{"year":1944,"firstMonth":1,"firstDay":25,"isRun":true,"runMonth":4,"runMonthDays":30,"monthsDays":[30,29,30,29,29,30,29,30,30,29,30,30]},
    "1945":{"year":1945,"firstMonth":2,"firstDay":13,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,29,30,29,29,30,29,30,30,30,29,30]},
    "1946":{"year":1946,"firstMonth":2,"firstDay":2,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,29,30,29,30,30,29,30]},
    "1947":{"year":1947,"firstMonth":1,"firstDay":22,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[30,30,29,30,29,29,30,29,30,29,30,30]},
    "1948":{"year":1948,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,29,30,29,30,29,30]},
    "1949":{"year":1949,"firstMonth":1,"firstDay":29,"isRun":true,"runMonth":7,"runMonthDays":29,"monthsDays":[30,29,30,30,29,30,29,30,29,30,29,30]},
    "1950":{"year":1950,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,30,29,29,30,29,30,29]},
    "1951":{"year":1951,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,29,30,29,30,29,30]},
    "1952":{"year":1952,"firstMonth":1,"firstDay":27,"isRun":true,"runMonth":5,"runMonthDays":30,"monthsDays":[29,30,29,30,29,29,30,30,29,30,29,30]},
    "1953":{"year":1953,"firstMonth":2,"firstDay":14,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,30,29,30,30,29,30,29]},
    "1954":{"year":1954,"firstMonth":2,"firstDay":3,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,30,30,29,30,30]},
    "1955":{"year":1955,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":3,"runMonthDays":30,"monthsDays":[29,30,29,29,29,30,29,30,29,30,30,30]},
    "1956":{"year":1956,"firstMonth":2,"firstDay":12,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,29,30,29,30,29,30,30]},
    "1957":{"year":1957,"firstMonth":1,"firstDay":31,"isRun":true,"runMonth":8,"runMonthDays":29,"monthsDays":[30,29,30,29,30,29,29,30,30,29,30,29]},
    "1958":{"year":1958,"firstMonth":2,"firstDay":18,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,30,29,30,29,29,30,29,29,30,30]},
    "1959":{"year":1959,"firstMonth":2,"firstDay":8,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,29,30,29,30,29,30,29]},
    "1960":{"year":1960,"firstMonth":1,"firstDay":28,"isRun":true,"runMonth":6,"runMonthDays":29,"monthsDays":[30,29,30,29,30,30,30,29,30,29,30,29]},
    "1961":{"year":1961,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,30,30,29,30,29,30]},
    "1962":{"year":1962,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,30,29,30,30,29]},
    "1963":{"year":1963,"firstMonth":1,"firstDay":25,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[30,29,30,29,30,29,30,29,30,30,30,29]},
    "1964":{"year":1964,"firstMonth":2,"firstDay":13,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,30,29,30,30,30]},
    "1965":{"year":1965,"firstMonth":2,"firstDay":2,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,29,30,29,29,30,30,29]},
    "1966":{"year":1966,"firstMonth":1,"firstDay":21,"isRun":true,"runMonth":3,"runMonthDays":29,"monthsDays":[30,30,30,30,29,29,30,29,29,30,30,29]},
    "1967":{"year":1967,"firstMonth":2,"firstDay":9,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,30,29,29,30,29,30,29,30]},
    "1968":{"year":1968,"firstMonth":1,"firstDay":30,"isRun":true,"runMonth":7,"runMonthDays":29,"monthsDays":[29,30,29,30,30,29,30,30,29,30,29,30]},
    "1969":{"year":1969,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,30,29,30,29,30,29]},
    "1970":{"year":1970,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,30,30,29,30,30,29,30]},
    "1971":{"year":1971,"firstMonth":1,"firstDay":27,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[29,30,29,29,30,30,29,30,30,30,29,30]},
    "1972":{"year":1972,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,29,30,30,29,30]},
    "1973":{"year":1973,"firstMonth":2,"firstDay":3,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,29,30,30,29,30]},
    "1974":{"year":1974,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[30,30,29,30,29,30,29,29,30,30,29,30]},
    "1975":{"year":1975,"firstMonth":2,"firstDay":11,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,29,30,29,29,30,29,30]},
    "1976":{"year":1976,"firstMonth":1,"firstDay":31,"isRun":true,"runMonth":8,"runMonthDays":29,"monthsDays":[30,30,29,30,29,30,29,30,29,30,29,30]},
    "1977":{"year":1977,"firstMonth":2,"firstDay":18,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,29,30,29,30,29,29]},
    "1978":{"year":1978,"firstMonth":2,"firstDay":7,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,30,29,30,29,30,29]},
    "1979":{"year":1979,"firstMonth":1,"firstDay":28,"isRun":true,"runMonth":6,"runMonthDays":30,"monthsDays":[30,29,29,30,29,30,29,30,30,29,30,29]},
    "1980":{"year":1980,"firstMonth":2,"firstDay":16,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,30,29,30,30,29,30,30]},
    "1981":{"year":1981,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,29,30,30,29,30,30]},
    "1982":{"year":1982,"firstMonth":1,"firstDay":25,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[30,29,30,29,30,29,29,30,29,30,30,30]},
    "1983":{"year":1983,"firstMonth":2,"firstDay":13,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,29,30,29,30,30]},
    "1984":{"year":1984,"firstMonth":2,"firstDay":2,"isRun":true,"runMonth":10,"runMonthDays":29,"monthsDays":[30,29,30,30,29,29,30,29,29,30,30,30]},
    "1985":{"year":1985,"firstMonth":2,"firstDay":20,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,29,30,29,29,30,29,30]},
    "1986":{"year":1986,"firstMonth":2,"firstDay":9,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,30,29,30,29,30,29,29]},
    "1987":{"year":1987,"firstMonth":1,"firstDay":29,"isRun":true,"runMonth":6,"runMonthDays":29,"monthsDays":[30,29,30,29,30,30,30,30,29,30,29,29]},
    "1988":{"year":1988,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,30,30,29,30,30,29]},
    "1989":{"year":1989,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,30,29,30,29,30,30,30]},
    "1990":{"year":1990,"firstMonth":1,"firstDay":27,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[29,30,29,29,30,29,30,29,30,30,30,30]},
    "1991":{"year":1991,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,29,30,29,30,30,30]},
    "1992":{"year":1992,"firstMonth":2,"firstDay":4,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,29,30,29,29,30,29,30,30]},
    "1993":{"year":1993,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":3,"runMonthDays":29,"monthsDays":[29,30,30,30,29,30,29,29,30,29,30,29]},
    "1994":{"year":1994,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,30,29,30,29,30,29,29,30,29,30]},
    "1995":{"year":1995,"firstMonth":1,"firstDay":31,"isRun":true,"runMonth":8,"runMonthDays":29,"monthsDays":[29,30,30,29,30,29,30,30,29,30,29,30]},
    "1996":{"year":1996,"firstMonth":2,"firstDay":19,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,30,29,30,29,30,30,29,29]},
    "1997":{"year":1997,"firstMonth":2,"firstDay":7,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,30,30,29,30,30,29]},
    "1998":{"year":1998,"firstMonth":1,"firstDay":28,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[30,29,29,30,29,30,30,29,30,30,29,30]},
    "1999":{"year":1999,"firstMonth":2,"firstDay":16,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,29,30,29,30,30,30,29]},
    "2000":{"year":2000,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,29,30,29,29,30,29,30,30,29]},
    "2001":{"year":2001,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[30,30,29,30,30,29,29,30,29,30,29,30]},
    "2002":{"year":2002,"firstMonth":2,"firstDay":12,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,29,30,29,30,29]},
    "2003":{"year":2003,"firstMonth":2,"firstDay":1,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,30,29,30,29,29,30,29,30]},
    "2004":{"year":2004,"firstMonth":1,"firstDay":22,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[29,30,30,30,29,30,29,30,29,30,29,30]},
    "2005":{"year":2005,"firstMonth":2,"firstDay":9,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,30,29,30,29,30,29]},
    "2006":{"year":2006,"firstMonth":1,"firstDay":29,"isRun":true,"runMonth":7,"runMonthDays":29,"monthsDays":[30,29,30,29,30,29,30,30,30,29,30,30]},
    "2007":{"year":2007,"firstMonth":2,"firstDay":18,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,29,30,29,29,30,29,30,30,30,29,30]},
    "2008":{"year":2008,"firstMonth":2,"firstDay":7,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,29,30,29,30,30,29,30]},
    "2009":{"year":2009,"firstMonth":1,"firstDay":26,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[30,30,29,29,30,29,30,29,30,29,30,30]},
    "2010":{"year":2010,"firstMonth":2,"firstDay":14,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,29,30,29,30,29,30]},
    "2011":{"year":2011,"firstMonth":2,"firstDay":3,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,29,29,30,29,30,29]},
    "2012":{"year":2012,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[30,29,30,30,30,29,30,29,30,29,30,29]},
    "2013":{"year":2013,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,30,29,30,29,30,29,30]},
    "2014":{"year":2014,"firstMonth":1,"firstDay":31,"isRun":true,"runMonth":9,"runMonthDays":29,"monthsDays":[29,30,29,30,29,30,29,30,30,30,29,30]},
    "2015":{"year":2015,"firstMonth":2,"firstDay":19,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,30,30,29,30,29]},
    "2016":{"year":2016,"firstMonth":2,"firstDay":8,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,30,30,29,30,30]},
    "2017":{"year":2017,"firstMonth":1,"firstDay":28,"isRun":true,"runMonth":6,"runMonthDays":30,"monthsDays":[29,30,29,30,29,29,29,30,29,30,30,30]},
    "2018":{"year":2018,"firstMonth":2,"firstDay":16,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,29,30,29,30,29,30,30]},
    "2019":{"year":2019,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,29,30,29,29,30,30]},
    "2020":{"year":2020,"firstMonth":1,"firstDay":25,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[29,30,30,30,30,29,29,30,29,30,29,30]},
    "2021":{"year":2021,"firstMonth":2,"firstDay":12,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,29,30,29,30,29,30,29]},
    "2022":{"year":2022,"firstMonth":2,"firstDay":1,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,30,29,30,29,30,29,30]},
    "2023":{"year":2023,"firstMonth":1,"firstDay":22,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[29,30,29,30,30,29,30,30,29,30,29,30]},
    "2024":{"year":2024,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,30,29,30,30,29]},
    "2025":{"year":2025,"firstMonth":1,"firstDay":29,"isRun":true,"runMonth":6,"runMonthDays":29,"monthsDays":[30,29,30,29,29,30,30,29,30,30,30,29]},
    "2026":{"year":2026,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,29,30,30,30,29]},
    "2027":{"year":2027,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,29,30,29,29,30,30,29]},
    "2028":{"year":2028,"firstMonth":1,"firstDay":26,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[30,30,30,29,30,29,30,29,29,30,30,29]},
    "2029":{"year":2029,"firstMonth":2,"firstDay":13,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,30,29,29,30,30]},
    "2030":{"year":2030,"firstMonth":2,"firstDay":3,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,30,29,30,29,30,29,30,29]},
    "2031":{"year":2031,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":3,"runMonthDays":29,"monthsDays":[29,30,30,30,29,30,30,29,30,29,30,29]},
    "2032":{"year":2032,"firstMonth":2,"firstDay":11,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,30,30,29,30,30,29,30]},
    "2033":{"year":2033,"firstMonth":1,"firstDay":31,"isRun":true,"runMonth":11,"runMonthDays":29,"monthsDays":[29,30,29,29,30,29,30,29,30,30,30,30]},
    "2034":{"year":2034,"firstMonth":2,"firstDay":19,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,29,30,30,29,30]},
    "2035":{"year":2035,"firstMonth":2,"firstDay":8,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,29,30,30,29,30]},
    "2036":{"year":2036,"firstMonth":1,"firstDay":28,"isRun":true,"runMonth":6,"runMonthDays":30,"monthsDays":[30,30,29,30,29,29,29,29,30,29,30,30]},
    "2037":{"year":2037,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,29,30,29,29,30,29,30]},
    "2038":{"year":2038,"firstMonth":2,"firstDay":4,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,30,29,29,30,29]},
    "2039":{"year":2039,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[30,30,29,30,30,30,29,30,29,30,29,29]},
    "2040":{"year":2040,"firstMonth":2,"firstDay":12,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,29,30,30,29,30,29]},
    "2041":{"year":2041,"firstMonth":2,"firstDay":1,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,30,29,30,30,29,30]},
    "2042":{"year":2042,"firstMonth":1,"firstDay":22,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[29,30,29,30,29,30,29,30,30,29,30,30]},
    "2043":{"year":2043,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,29,30,30,29,30,30]},
    "2044":{"year":2044,"firstMonth":1,"firstDay":30,"isRun":true,"runMonth":7,"runMonthDays":29,"monthsDays":[30,29,30,29,29,30,29,30,29,30,30,30]},
    "2045":{"year":2045,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,29,30,29,30,30]},
    "2046":{"year":2046,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,30,29,29,30,29,30]},
    "2047":{"year":2047,"firstMonth":1,"firstDay":26,"isRun":true,"runMonth":5,"runMonthDays":30,"monthsDays":[30,29,30,30,29,29,30,29,29,30,29,30]},
    "2048":{"year":2048,"firstMonth":2,"firstDay":14,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,30,29,30,29,29,30,29]},
    "2049":{"year":2049,"firstMonth":2,"firstDay":2,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,30,29,30,30,29,30,29]},
    "2050":{"year":2050,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":3,"runMonthDays":30,"monthsDays":[29,30,29,29,30,29,30,30,29,30,30,29]},
    "2051":{"year":2051,"firstMonth":2,"firstDay":11,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,29,30,30,29,30,30,30]},
    "2052":{"year":2052,"firstMonth":2,"firstDay":1,"isRun":true,"runMonth":8,"runMonthDays":29,"monthsDays":[29,30,29,29,30,29,29,30,30,30,30,30]},
    "2053":{"year":2053,"firstMonth":2,"firstDay":19,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,29,30,29,30,30,30]},
    "2054":{"year":2054,"firstMonth":2,"firstDay":8,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,29,30,29,29,30,29,30,30]},
    "2055":{"year":2055,"firstMonth":1,"firstDay":28,"isRun":true,"runMonth":6,"runMonthDays":30,"monthsDays":[29,30,30,29,30,29,29,29,30,29,30,29]},
    "2056":{"year":2056,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,30,29,30,29,30,29,29,30,29,30]},
    "2057":{"year":2057,"firstMonth":2,"firstDay":4,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,29,30,29,30,29,30,29]},
    "2058":{"year":2058,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":4,"runMonthDays":30,"monthsDays":[30,29,30,29,29,30,30,29,30,30,29,29]},
    "2059":{"year":2059,"firstMonth":2,"firstDay":12,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,30,29,30,30,30,29]},
    "2060":{"year":2060,"firstMonth":2,"firstDay":2,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,29,30,29,29,30,29,30,30,30,29]},
    "2061":{"year":2061,"firstMonth":1,"firstDay":21,"isRun":true,"runMonth":3,"runMonthDays":29,"monthsDays":[30,30,29,30,29,29,30,29,30,30,30,29]},
    "2062":{"year":2062,"firstMonth":2,"firstDay":9,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,29,30,29,29,30,29,30,30,29]},
    "2063":{"year":2063,"firstMonth":1,"firstDay":29,"isRun":true,"runMonth":7,"runMonthDays":29,"monthsDays":[30,30,29,30,29,30,29,30,29,30,29,30]},
    "2064":{"year":2064,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,29,30,29,30,29]},
    "2065":{"year":2065,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,30,29,30,29,29,30,29,30]},
    "2066":{"year":2066,"firstMonth":1,"firstDay":26,"isRun":true,"runMonth":5,"runMonthDays":29,"monthsDays":[29,30,29,30,30,30,29,30,29,30,29,30]},
    "2067":{"year":2067,"firstMonth":2,"firstDay":14,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,30,29,30,29,30,29]},
    "2068":{"year":2068,"firstMonth":2,"firstDay":3,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,30,29,30,30,29,30]},
    "2069":{"year":2069,"firstMonth":1,"firstDay":23,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[29,30,29,30,29,30,29,30,30,30,29,30]},
    "2070":{"year":2070,"firstMonth":2,"firstDay":11,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,29,30,29,30,30,29,30]},
    "2071":{"year":2071,"firstMonth":1,"firstDay":31,"isRun":true,"runMonth":8,"runMonthDays":29,"monthsDays":[30,29,30,29,30,29,29,30,30,29,30,30]},
    "2072":{"year":2072,"firstMonth":2,"firstDay":19,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,29,29,30,29,30,29,30]},
    "2073":{"year":2073,"firstMonth":2,"firstDay":7,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,30,29,30,29,29,30,29,30,29]},
    "2074":{"year":2074,"firstMonth":1,"firstDay":27,"isRun":true,"runMonth":6,"runMonthDays":29,"monthsDays":[30,29,30,30,29,30,30,29,30,29,30,29]},
    "2075":{"year":2075,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,30,29,30,29,30,29,30]},
    "2076":{"year":2076,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,29,30,30,29,30,29]},
    "2077":{"year":2077,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[30,29,30,29,30,29,30,30,30,29,30,29]},
    "2078":{"year":2078,"firstMonth":2,"firstDay":12,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,30,30,29,30,30]},
    "2079":{"year":2079,"firstMonth":2,"firstDay":2,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,29,30,29,30,29,30,30]},
    "2080":{"year":2080,"firstMonth":1,"firstDay":22,"isRun":true,"runMonth":3,"runMonthDays":29,"monthsDays":[30,29,30,30,29,29,30,29,29,30,30,30]},
    "2081":{"year":2081,"firstMonth":2,"firstDay":9,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,29,29,30,29,29,30,30]},
    "2082":{"year":2082,"firstMonth":1,"firstDay":29,"isRun":true,"runMonth":7,"runMonthDays":29,"monthsDays":[29,30,30,30,29,29,30,30,29,29,30,30]},
    "2083":{"year":2083,"firstMonth":2,"firstDay":17,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,30,29,30,29,30,29,30,29,30,29]},
    "2084":{"year":2084,"firstMonth":2,"firstDay":6,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,30,30,29,30,29,30,29,30]},
    "2085":{"year":2085,"firstMonth":1,"firstDay":26,"isRun":true,"runMonth":5,"runMonthDays":30,"monthsDays":[29,30,29,29,30,29,30,30,29,30,29,30]},
    "2086":{"year":2086,"firstMonth":2,"firstDay":14,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,30,29,30,30,29]},
    "2087":{"year":2087,"firstMonth":2,"firstDay":3,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,30,29,30,29,30,30,30]},
    "2088":{"year":2088,"firstMonth":1,"firstDay":24,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[29,30,29,30,29,30,29,29,30,30,30,29]},
    "2089":{"year":2089,"firstMonth":2,"firstDay":10,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,29,29,30,29,30,30,29]},
    "2090":{"year":2090,"firstMonth":1,"firstDay":30,"isRun":true,"runMonth":8,"runMonthDays":29,"monthsDays":[30,30,30,29,30,29,29,30,29,30,30,29]},
    "2091":{"year":2091,"firstMonth":2,"firstDay":18,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,30,29,29,30,29]},
    "2092":{"year":2092,"firstMonth":2,"firstDay":7,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,30,29,30,29,30,29,30,29]},
    "2093":{"year":2093,"firstMonth":1,"firstDay":27,"isRun":true,"runMonth":6,"runMonthDays":30,"monthsDays":[29,30,30,29,30,29,30,29,30,29,30,29]},
    "2094":{"year":2094,"firstMonth":2,"firstDay":15,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,30,29,30,30,29,30,30,29,30]},
    "2095":{"year":2095,"firstMonth":2,"firstDay":5,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[29,30,29,29,30,29,30,29,30,30,30,29]},
    "2096":{"year":2096,"firstMonth":1,"firstDay":25,"isRun":true,"runMonth":4,"runMonthDays":29,"monthsDays":[30,29,30,29,30,29,29,30,30,30,29,30]},
    "2097":{"year":2097,"firstMonth":2,"firstDay":12,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,29,30,29,29,29,30,29,30,30,29,30]},
    "2098":{"year":2098,"firstMonth":2,"firstDay":1,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,29,29,30,29,30,29,30]},
    "2099":{"year":2099,"firstMonth":1,"firstDay":21,"isRun":true,"runMonth":2,"runMonthDays":29,"monthsDays":[30,30,30,30,29,29,30,29,29,30,29,30]},
    "2100":{"year":2100,"firstMonth":2,"firstDay":9,"isRun":false,"runMonth":0,"runMonthDays":0,"monthsDays":[30,30,29,30,29,30,29,30,29,29,30,29]}
  }
  
  
  
  