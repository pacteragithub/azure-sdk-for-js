let nock = require('nock');

module.exports.hash = "66f1f9cd7b5888568e8a6882821117c5";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.0-preview/layout/analyzeResults/dbf9a69e-a463-4e0e-8dc7-2659b80ba56b',
  'x-envoy-upstream-service-time',
  '500',
  'apim-request-id',
  'dbf9a69e-a463-4e0e-8dc7-2659b80ba56b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Sat, 02 May 2020 19:58:39 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.0-preview/layout/analyzeResults/dbf9a69e-a463-4e0e-8dc7-2659b80ba56b')
  .reply(200, {"status":"running","createdDateTime":"2020-05-02T19:58:40Z","lastUpdatedDateTime":"2020-05-02T19:58:40Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '18',
  'apim-request-id',
  '8c4b467e-bc91-4c6b-b473-0499fb9058bb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Sat, 02 May 2020 19:58:39 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.0-preview/layout/analyzeResults/dbf9a69e-a463-4e0e-8dc7-2659b80ba56b')
  .reply(200, {"status":"running","createdDateTime":"2020-05-02T19:58:40Z","lastUpdatedDateTime":"2020-05-02T19:58:40Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  '2e926bd2-ba06-4d91-983d-d82a0cfbe748',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Sat, 02 May 2020 19:58:39 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.0-preview/layout/analyzeResults/dbf9a69e-a463-4e0e-8dc7-2659b80ba56b')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-05-02T19:58:40Z","lastUpdatedDateTime":"2020-05-02T19:58:42Z","analyzeResult":{"version":"2.0.0","readResults":[{"page":1,"language":"en","angle":0.4327,"width":1688,"height":3000,"unit":"pixel","lines":[{"boundingBox":[405,273,1049,273,1052,403,407,415],"text":"Contoso","words":[{"boundingBox":[618,278,1048,285,1052,380,623,400],"text":"Contoso","confidence":0.79}]},{"boundingBox":[327,592,498,602,494,655,324,642],"text":"Contoso","words":[{"boundingBox":[328,592,496,604,493,656,324,643],"text":"Contoso","confidence":0.686}]},{"boundingBox":[318,689,649,692,648,754,317,752],"text":"123 Main Street","words":[{"boundingBox":[321,689,387,692,385,753,318,750],"text":"123","confidence":0.958},{"boundingBox":[399,693,499,695,498,754,397,754],"text":"Main","confidence":0.959},{"boundingBox":[511,696,645,696,646,751,510,754],"text":"Street","confidence":0.95}]},{"boundingBox":[315,794,749,795,748,858,315,856],"text":"Redmond, WA 98052","words":[{"boundingBox":[317,795,523,799,523,858,316,855],"text":"Redmond,","confidence":0.762},{"boundingBox":[535,799,598,799,598,858,535,858],"text":"WA","confidence":0.958},{"boundingBox":[610,799,745,797,746,855,610,858],"text":"98052","confidence":0.942}]},{"boundingBox":[305,1004,619,1014,617,1072,305,1061],"text":"123-456-7890","words":[{"boundingBox":[306,1005,618,1014,615,1073,307,1062],"text":"123-456-7890","confidence":0.919}]},{"boundingBox":[301,1222,630,1227,629,1287,301,1284],"text":"6/10/20 19 13:59","words":[{"boundingBox":[302,1222,452,1225,450,1287,301,1285],"text":"6/10/20","confidence":0.952},{"boundingBox":[464,1226,505,1227,504,1287,463,1287],"text":"19","confidence":0.924},{"boundingBox":[518,1227,631,1230,628,1287,516,1287],"text":"13:59","confidence":0.92}]},{"boundingBox":[298,1335,772,1339,772,1396,298,1393],"text":"Sales Associate: Paul","words":[{"boundingBox":[302,1336,418,1337,417,1395,300,1393],"text":"Sales","confidence":0.959},{"boundingBox":[429,1337,652,1339,652,1397,429,1395],"text":"Associate:","confidence":0.9},{"boundingBox":[663,1339,770,1339,771,1397,663,1397],"text":"Paul","confidence":0.959}]},{"boundingBox":[333,1558,670,1562,670,1625,333,1622],"text":"1 Surface Pro 6","words":[{"boundingBox":[334,1559,361,1559,360,1623,333,1623],"text":"1","confidence":0.844},{"boundingBox":[373,1560,545,1563,545,1625,373,1624],"text":"Surface","confidence":0.958},{"boundingBox":[558,1563,629,1563,629,1625,558,1625],"text":"Pro","confidence":0.884},{"boundingBox":[642,1564,669,1564,669,1624,642,1625],"text":"6","confidence":0.799}]},{"boundingBox":[370,1670,842,1672,841,1742,369,1737],"text":"256GB / Intel Core i5 /","words":[{"boundingBox":[370,1670,507,1672,507,1739,370,1735],"text":"256GB","confidence":0.953},{"boundingBox":[520,1672,533,1672,532,1740,519,1739],"text":"/","confidence":0.841},{"boundingBox":[545,1672,651,1673,650,1742,544,1740],"text":"Intel","confidence":0.908},{"boundingBox":[663,1673,760,1673,759,1742,662,1742],"text":"Core","confidence":0.958},{"boundingBox":[773,1673,811,1673,810,1742,772,1742],"text":"i5","confidence":0.82},{"boundingBox":[823,1673,842,1672,841,1742,822,1742],"text":"/","confidence":0.848}]},{"boundingBox":[366,1786,731,1788,730,1849,366,1846],"text":"8GB RAM (Black)","words":[{"boundingBox":[368,1787,454,1787,453,1847,366,1845],"text":"8GB","confidence":0.908},{"boundingBox":[466,1787,566,1787,565,1848,464,1847],"text":"RAM","confidence":0.958},{"boundingBox":[577,1787,729,1788,728,1850,576,1848],"text":"(Black)","confidence":0.849}]},{"boundingBox":[938,1788,1133,1793,1131,1860,939,1854],"text":"$ 999.00","words":[{"boundingBox":[938,1788,967,1788,965,1855,938,1854],"text":"$","confidence":0.798},{"boundingBox":[980,1789,1130,1793,1128,1860,979,1856],"text":"999.00","confidence":0.909}]},{"boundingBox":[319,2018,628,2014,630,2077,320,2083],"text":"1 SurfacePen","words":[{"boundingBox":[319,2018,348,2018,350,2084,322,2084],"text":"1","confidence":0.84},{"boundingBox":[361,2018,628,2014,628,2076,363,2083],"text":"SurfacePen","confidence":0.936}]},{"boundingBox":[965,2024,1129,2027,1128,2095,966,2093],"text":"$ 99.99","words":[{"boundingBox":[965,2024,995,2024,994,2093,965,2092],"text":"$","confidence":0.799},{"boundingBox":[1009,2024,1126,2026,1125,2095,1008,2093],"text":"99.99","confidence":0.929}]},{"boundingBox":[471,2242,697,2245,697,2307,471,2305],"text":"Sub-Total","words":[{"boundingBox":[472,2243,697,2246,696,2307,472,2306],"text":"Sub-Total","confidence":0.727}]},{"boundingBox":[924,2258,1135,2255,1137,2319,926,2324],"text":"$ 1098.99","words":[{"boundingBox":[925,2259,949,2258,951,2325,927,2325],"text":"$","confidence":0.881},{"boundingBox":[962,2258,1133,2255,1134,2319,964,2324],"text":"1098.99","confidence":0.934}]},{"boundingBox":[570,2356,655,2358,655,2415,568,2414],"text":"Tax","words":[{"boundingBox":[571,2356,654,2357,653,2415,570,2413],"text":"Tax","confidence":0.958}]},{"boundingBox":[943,2370,1129,2366,1130,2433,945,2435],"text":"$ 104.40","words":[{"boundingBox":[943,2369,967,2369,969,2436,944,2436],"text":"$","confidence":0.894},{"boundingBox":[981,2368,1126,2366,1127,2433,982,2435],"text":"104.40","confidence":0.958}]},{"boundingBox":[549,2593,666,2589,669,2649,548,2652],"text":"Total","words":[{"boundingBox":[548,2592,666,2589,668,2648,550,2652],"text":"Total","confidence":0.656}]},{"boundingBox":[915,2590,1127,2613,1120,2674,909,2651],"text":"$ 1203.39","words":[{"boundingBox":[917,2591,945,2594,939,2655,911,2652],"text":"$","confidence":0.887},{"boundingBox":[957,2595,1128,2614,1119,2675,951,2656],"text":"1203.39","confidence":0.954}]}]}],"pageResults":[{"page":1,"tables":[]}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '61',
  'apim-request-id',
  '193aa0ae-30a1-406c-9646-aa7dad14f439',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Sat, 02 May 2020 19:58:44 GMT'
]);