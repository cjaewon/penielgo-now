const { JSDOM } = require("jsdom"); 

(async() => {

  const res = await fetch(`https://superkts.com/cal/su_day/2023`);

  const text =  `<!doctype html>
  <html lang="ko">
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
  <title>수능 디데이 카운터 : 2023학년도 수능일</title>
  <meta name="author" content="superkts">
  <meta name="description" content="2023학년도 수능시험 디데이 카운터 입니다. 수능 디데이를 날짜별로 편하게 볼 수 있게 정리해 보았습니다. 그리고 다른 연도의 수능 디데이도 볼 수 있습니다.">
  <meta name="keywords" content="2023학년도 수능 디데이, 2023학년도 수능 디데이 카운터, 2023학년도 수능일 계산기, 2023 수능 남은날, 2023 수능 남은날짜, 수능 디데이 카운터, 수능 날짜 카운터, 대학수학능력시험 남은날">
  <meta property="og:url" content="https://superkts.com/cal/su_day/2023" />
  <meta property="og:title" content="수능 디데이 카운터 : 2023학년도 수능일" />
  <meta property="og:description" content="2023학년도 수능시험 디데이 카운터 입니다. 수능 디데이를 날짜별로 편하게 볼 수 있게 정리해 보았습니다. 그리고 다른 연도의 수능 디데이도 볼 수 있습니다." />
  <meta property="og:image" content="/img/ico_cal_b.png" />
  <link rel="preload" as="style" href="/cal/core.css?ver=220628" />
  <link rel="stylesheet" href="/cal/core.css?ver=220628" />
  <link rel="shortcut icon" href="/img/ico_cal.png" />
  <link rel="icon" sizes="128x128" href="/img/ico_cal_b.png" />
  <link rel="apple-touch-icon" sizes="128x128" href="/img/ico_cal_b.png" />
  <link rel="canonical" href="https://superkts.com/cal/su_day/2023" />
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4798357217491625" crossorigin="anonymous"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-4517007-6"></script>
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-4517007-6');
  </script>
  <script async src="/cal/core.js?ver=220628"></script>
  </head>
  <body>
  
  <header>
          <h1><a href=".">2023학년도 수학능력시험 디데이 카운터</a></h1>
          <button type="button" onclick="showSideMenu()">=</button>
  </header>
  
  <nav id="side_menu">
          <div onclick="hideSideMenu()"></div>
          <ul>
                  <li><a href="/cal/" title="Home">ㆍHome</a><button class="x" type="button" onclick="hideSideMenu()">X</button></li>
                  <li><a href="/age/" title="나이 표">ㆍ나이 표</a></li>
                  <li><a href="/age/man/" title="만 나이 표">ㆍ만 나이 표</a></li>
                  <li><a href="/age/event/" title="나이별 용어와 년도">ㆍ나이별 용어와 년도</a></li>
                  <li><a href="/age/ddi/" title="올해 띠별 나이">ㆍ올해 띠별 나이</a></li>
                  <li><a href="/age/list/" title="나이 일람표">ㆍ나이 일람표</a></li>
                  <li><a href="/ddi/" title="년도별 띠보기">ㆍ년도별 띠보기</a></li>
                  <li><a href="/ddi/match/" title="띠궁합 알아보기">ㆍ띠궁합 알아보기</a></li>
                  <li><a href="/cal/samj/" title="삼재 알아보기">ㆍ삼재 알아보기</a></li>
                  <li><a href="/cal/solar_lunar/" title="양력을 음력으로 변환하기">ㆍ양력을 음력으로 변환하기</a></li>
                  <li><a href="/cal/lunar_solar/" title="음력을 양력으로 변환하기">ㆍ음력을 양력으로 변환하기</a></li>
                  <li><a href="/cal/lunar_solar/list/" title="음력을 연도별 양력으로 변환">ㆍ음력을 연도별 양력으로 변환</a></li>
                  <li><a href="/cal/man_age/" title="만나이 계산기">ㆍ만나이 계산기</a></li>
                  <li><a href="/cal/age/" title="나이 계산기">ㆍ나이 계산기</a></li>
                  <li><a href="/cal/is19/" title="성년ㆍ미성년 나이 계산기">ㆍ성년ㆍ미성년 나이 계산기</a></li>
                  <li><a href="/cal/ddi_gap/" title="띠동갑 계산기">ㆍ띠동갑 계산기</a></li>
                  <li><a href="/cal/d_day/" title="디데이 계산기">ㆍ디데이 계산기</a></li>
                  <li><a href="/cal/event/" title="기념일 계산기">ㆍ기념일 계산기</a></li>
                  <li><a href="/cal/days/" title="날짜 더하기·빼기 계산기">ㆍ날짜 더하기·빼기 계산기</a></li>
                  <li><a href="/cal/day_gap/" title="날짜 차이 계산기">ㆍ날짜 차이 계산기</a></li>
                  <li><a href="/cal/baby100/" title="아기 100일 계산기">ㆍ아기 100일 계산기</a></li>
                  <li><a href="/cal/school/" title="학교 입학·졸업 년도 계산">ㆍ학교 입학·졸업 년도 계산</a></li>
                  <li><a href="/cal/su_day/2023" title="2023 수능 디데이">ㆍ2023 수능 디데이</a></li>
                  <li><a href="/day/freeday/2022" title="2022년 손없는 날">ㆍ2022년 손없는 날</a></li>
                  <li><a href="/people/menu/" title="연예인 생일과 나이">ㆍ연예인 생일과 나이</a></li>
                  <li><a href="/name/indian/" title="인디언식 이름짓기">ㆍ인디언식 이름짓기</a></li>
                  <li><a href="/day/holiday/" title="우리나라 공휴일">ㆍ우리나라 공휴일</a></li>
                  <li><a href="/day/birth229/" title="2월 29일 생일">ㆍ2월 29일 생일</a></li>
                  <li><a href="/school/" title="학생 나이 정보">ㆍ학생 나이 정보</a></li>
                  <li><a href="/pet/dog/age/cal/" title="개나이 변환기">ㆍ개나이 변환기</a></li>
                  <li><a href="/cal/zip/" title="우편번호 검색">ㆍ우편번호 검색</a></li>
                  <li><a class="ext" href="/population/" target="_blank" title="우리나라 인구수">ㆍ우리나라 인구수</a></li>
                  <li><a class="ext" href="/stat/avgAge/" target="_blank" title="우리나라 평균연령">ㆍ우리나라 평균연령</a></li>
                  <li><a class="ext" href="/sun/rise/" target="_blank" title="일출 명소와 일출 시간">ㆍ일출 명소와 일출 시간</a></li>
                  <li><a class="ext" href="/lotto/" target="_blank" title="역대 로또 번호">ㆍ역대 로또 번호</a></li>
                  <li><a class="ext" href="/minwage/" target="_blank" title="연도별 최저임금">ㆍ연도별 최저임금</a></li>
                  <li><a class="ext" href="https://ktsmemo.cafe24.com/s/80photo/" rel="noreferrer" target="_blank" title="80년대 중반 사진모음(백과사전)">ㆍ80년대 중반 사진모음(백과사전)</a></li>
                  <li><a class="ext" href="https://ktsmemo.cafe24.com/s/ani80/" rel="noreferrer" target="_blank" title="추억의 만화영화 주제곡 MP3">ㆍ추억의 만화영화 주제곡 MP3</a></li>
                  <li><a class="ext" href="https://biketago.com/bike/" rel="noreferrer" target="_blank" title="biketago.com 자전거 검색엔진">ㆍ자전거 검색엔진</a></li>
                  <li><a class="ext" href="http://oldmidi.pe.kr/" rel="noreferrer" target="_blank" title="오래된 미디(MIDI)자료실">ㆍ오래된 미디자료실</a></li>
          </ul>
  </nav>
  
  <aside class="ad"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4798357217491625" data-ad-slot="7035661683" data-ad-format="auto" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({}); </script></aside>
  
  <main class="suday">
          <section>
  
                  <article class="ui">
                          선택 : <select onchange="goSuDay(this)"><option value="2026">2026</option><option value="2025">2025</option><option value="2024">2024</option><option value="2023" selected>2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option></select> 학년도 수능
                  </article>
  
                  <article class="intro">
                          <b>2023학년도 수능일</b><br>
                          2022년 11월 17일(목)<br>
                  </article>
  
                  <article class="result">
                          <b>12일</b> 남았습니다.<br>
                  </article>
  
                  <aside class="ad"><ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-hw-1m-t+2+eh" data-ad-client="ca-pub-4798357217491625" data-ad-slot="5766276506"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({}); </script></aside>
  
                  <article class="help blue">
                          <p>
                                  날짜를 누르면 해당 D-Day를 볼 수 있습니다.<br>
                                  남은 D-Day는 파란색으로 표시됩니다.
                          </p>
                  </article>
  
                  <article class="list">
                          <h2>본격 2023학년도 수능 D-Day</h2>
                          <table><caption>2023학년도 수능 D-Day</caption><tr><th>D-Day</th><th>날짜</th></tr><tr><td>6000일</td><td><a href="/cal/d_day/20060614" title="2006년 06월 14일 디데이 계산 결과">2006년 06월 14일(수)</a></td></tr><tr><td>5000일</td><td><a href="/cal/d_day/20090310" title="2009년 03월 10일 디데이 계산 결과">2009년 03월 10일(화)</a></td></tr><tr><td>4000일</td><td><a href="/cal/d_day/20111205" title="2011년 12월 05일 디데이 계산 결과">2011년 12월 05일(월)</a></td></tr><tr><td>3000일</td><td><a href="/cal/d_day/20140831" title="2014년 08월 31일 디데이 계산 결과">2014년 08월 31일(일)</a></td></tr><tr><td>2000일</td><td><a href="/cal/d_day/20170527" title="2017년 05월 27일 디데이 계산 결과">2017년 05월 27일(토)</a></td></tr><tr><td>1000일</td><td><a href="/cal/d_day/20200221" title="2020년 02월 21일 디데이 계산 결과">2020년 02월 21일(금)</a></td></tr><tr><td>900일</td><td><a href="/cal/d_day/20200531" title="2020년 05월 31일 디데이 계산 결과">2020년 05월 31일(일)</a></td></tr><tr><td>800일</td><td><a href="/cal/d_day/20200908" title="2020년 09월 08일 디데이 계산 결과">2020년 09월 08일(화)</a></td></tr><tr><td>777일</td><td><a href="/cal/d_day/20201001" title="2020년 10월 01일 디데이 계산 결과">2020년 10월 01일(목)</a></td></tr><tr><td>700일</td><td><a href="/cal/d_day/20201217" title="2020년 12월 17일 디데이 계산 결과">2020년 12월 17일(목)</a></td></tr><tr><td>600일</td><td><a href="/cal/d_day/20210327" title="2021년 03월 27일 디데이 계산 결과">2021년 03월 27일(토)</a></td></tr><tr><td>500일</td><td><a href="/cal/d_day/20210705" title="2021년 07월 05일 디데이 계산 결과">2021년 07월 05일(월)</a></td></tr><tr><td>400일</td><td><a href="/cal/d_day/20211013" title="2021년 10월 13일 디데이 계산 결과">2021년 10월 13일(수)</a></td></tr><tr><td>300일</td><td><a href="/cal/d_day/20220121" title="2022년 01월 21일 디데이 계산 결과">2022년 01월 21일(금)</a></td></tr><tr><td>200일</td><td><a href="/cal/d_day/20220501" title="2022년 05월 01일 디데이 계산 결과">2022년 05월 01일(일)</a></td></tr><tr><td>100일</td><td><a href="/cal/d_day/20220809" title="2022년 08월 09일 디데이 계산 결과">2022년 08월 09일(화)</a></td></tr><tr><td>90일</td><td><a href="/cal/d_day/20220819" title="2022년 08월 19일 디데이 계산 결과">2022년 08월 19일(금)</a></td></tr><tr><td>80일</td><td><a href="/cal/d_day/20220829" title="2022년 08월 29일 디데이 계산 결과">2022년 08월 29일(월)</a></td></tr><tr><td>70일</td><td><a href="/cal/d_day/20220908" title="2022년 09월 08일 디데이 계산 결과">2022년 09월 08일(목)</a></td></tr><tr><td>60일</td><td><a href="/cal/d_day/20220918" title="2022년 09월 18일 디데이 계산 결과">2022년 09월 18일(일)</a></td></tr><tr><td>50일</td><td><a href="/cal/d_day/20220928" title="2022년 09월 28일 디데이 계산 결과">2022년 09월 28일(수)</a></td></tr><tr><td>40일</td><td><a href="/cal/d_day/20221008" title="2022년 10월 08일 디데이 계산 결과">2022년 10월 08일(토)</a></td></tr><tr><td>30일</td><td><a href="/cal/d_day/20221018" title="2022년 10월 18일 디데이 계산 결과">2022년 10월 18일(화)</a></td></tr><tr><td>20일</td><td><a href="/cal/d_day/20221028" title="2022년 10월 28일 디데이 계산 결과">2022년 10월 28일(금)</a></td></tr><tr class="today"><td>12일</td><td><a href="/cal/d_day/20221105">2022년 11월 05일(토)</a></td></tr><tr class="remain"><td>10일</td><td><a href="/cal/d_day/20221107" title="2022년 11월 07일 디데이 계산 결과">2022년 11월 07일(월)</a></td></tr><tr class="remain"><td>9일</td><td><a href="/cal/d_day/20221108" title="2022년 11월 08일 디데이 계산 결과">2022년 11월 08일(화)</a></td></tr><tr class="remain"><td>8일</td><td><a href="/cal/d_day/20221109" title="2022년 11월 09일 디데이 계산 결과">2022년 11월 09일(수)</a></td></tr><tr class="remain"><td>7일</td><td><a href="/cal/d_day/20221110" title="2022년 11월 10일 디데이 계산 결과">2022년 11월 10일(목)</a></td></tr><tr class="remain"><td>6일</td><td><a href="/cal/d_day/20221111" title="2022년 11월 11일 디데이 계산 결과">2022년 11월 11일(금)</a></td></tr><tr class="remain"><td>5일</td><td><a href="/cal/d_day/20221112" title="2022년 11월 12일 디데이 계산 결과">2022년 11월 12일(토)</a></td></tr><tr class="remain"><td>4일</td><td><a href="/cal/d_day/20221113" title="2022년 11월 13일 디데이 계산 결과">2022년 11월 13일(일)</a></td></tr><tr class="remain"><td>3일</td><td><a href="/cal/d_day/20221114" title="2022년 11월 14일 디데이 계산 결과">2022년 11월 14일(월)</a></td></tr><tr class="remain"><td>2일</td><td><a href="/cal/d_day/20221115" title="2022년 11월 15일 디데이 계산 결과">2022년 11월 15일(화)</a></td></tr><tr class="remain"><td>1일</td><td><a href="/cal/d_day/20221116" title="2022년 11월 16일 디데이 계산 결과">2022년 11월 16일(수)</a></td></tr><tr class="remain"><td>수능일</td><td><a href="/cal/d_day/20221117">2022년 11월 17일(목)</a></td></tr></table>
                  </article>
  
                  <article class="rel">
                          <h2>2022년의 고등학생</h2>
                          <ul>
                                  <li><a href="/school/h/1" title="고등학교 1학년, 고등학생 1학년 나이">1학년</a></li>
                                  <li><a href="/school/h/2" title="고등학교 2학년, 고등학생 2학년 나이">2학년</a></li>
                                  <li><a href="/school/h/3" title="고등학교 3학년, 고등학생 3학년 나이">3학년</a></li>
                          </ul>
                  </article>
  
  
                  <article class="list">
                          <h2>번외, 2023수능 그 후 ...</h2>
                          <table><caption>번외, 2023수능 그 후</caption><tr><th>지난날</th><th>날짜</th></tr><tr class="remain"><td>10일후</td><td><a href="/cal/d_day/20221127" title="2022년 11월 27일 디데이 계산 결과">2022년 11월 27일(일)</a></td></tr><tr class="remain"><td>50일후</td><td><a href="/cal/d_day/20230106" title="2023년 01월 06일 디데이 계산 결과">2023년 01월 06일(금)</a></td></tr><tr class="remain"><td>100일후</td><td><a href="/cal/d_day/20230225" title="2023년 02월 25일 디데이 계산 결과">2023년 02월 25일(토)</a></td></tr><tr class="remain"><td>1000일후</td><td><a href="/cal/d_day/20250813" title="2025년 08월 13일 디데이 계산 결과">2025년 08월 13일(수)</a></td></tr><tr class="remain"><td>2000일후</td><td><a href="/cal/d_day/20280509" title="2028년 05월 09일 디데이 계산 결과">2028년 05월 09일(화)</a></td></tr><tr class="remain"><td>3000일후</td><td><a href="/cal/d_day/20310203" title="2031년 02월 03일 디데이 계산 결과">2031년 02월 03일(월)</a></td></tr><tr class="remain"><td>4000일후</td><td><a href="/cal/d_day/20331030" title="2033년 10월 30일 디데이 계산 결과">2033년 10월 30일(일)</a></td></tr><tr class="remain"><td>5000일후</td><td><a href="/cal/d_day/20360726" title="2036년 07월 26일 디데이 계산 결과">2036년 07월 26일(토)</a></td></tr><tr class="remain"><td>10000일후</td><td><a href="/cal/d_day/20500404" title="2050년 04월 04일 디데이 계산 결과">2050년 04월 04일(월)</a></td></tr></table>
                  </article>
  
                  <article class="help">
                          <p>모두 행복하게 사시길 바래요 ~ !</p>
                  </article>
  
          </section>
  </main>
  
  <nav class="gnb wide">
          <ul>
                  <li><a href="/cal/days/" title="날짜 계산기">날짜 계산기</a></li>
                  <li><a href="/cal/d_day/" title="디데이 계산기">디데이 계산기</a></li>
                  <li><a href="/cal/man_age/" title="만나이 계산기">만나이 계산기</a></li>
                  <li><a href="/cal/event/" title="기념일 계산기">기념일 계산기</a></li>
                  <li><a href="/cal/school/" title="학교 입학 졸업 연도 계산기">학교 입학 졸업 연도</a></li>
                  <li><a href="/school/" title="학생 나이 정보">학생 나이</a></li>
          </ul>
  </nav>
  
  <script type="application/ld+json">
  {
          "@context" : "http://schema.org",
          "@type" : "NewsArticle",
          "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://superkts.com/cal/su_day/2023"
          },
          "headline" : "수능 디데이 카운터 : 2023학년도 수능일",
          "image": [
                  "/img/ico_cal_b.png"
          ],
          "datePublished" : "2022-01-01T00:00:00+09:00",
          "dateModified" : "2022-11-01T00:00:00+09:00",
          "author" : {
                  "@type" : "Person",
                  "url" : "https://superkts.com",
                  "name" : "superkts"
          },
          "publisher": {
                  "@type": "Organization",
                  "name": "superkts.com",
                  "logo": {
                          "@type": "ImageObject",
                          "url": "/logo.png"
                  }
          }
  }
  </script>
  
  <aside class="ad"><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4798357217491625" data-ad-slot="7078451785" data-ad-format="link" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({}); </script><br><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4798357217491625" data-ad-slot="5395511928" data-ad-format="auto" data-full-width-responsive="true"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({}); </script></aside>
  
  <footer>
          제작 : <b>superkts.com</b>Since <b>2019</b>
  </footer>
  
  <script src="//wcs.naver.net/wcslog.js"></script>
  <script>
  if(!wcs_add) var wcs_add = {};
  wcs_add["wa"] = "f921b16d207e38";
  if(window.wcs) { wcs_do(); }
  </script>
  </body>
  </html>`;

  const { window } = new JSDOM(await (res.text()));

  console.log(window.document.querySelector(".result > b").textContent);
})();


