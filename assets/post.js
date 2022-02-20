/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./assets/js/post.js ***!
  \***************************/
var twoYears = 63115200000;

(function () {
  var postTime = document.querySelector('time[itemprop="datePublished"]');

  if (!postTime) {
    return;
  }

  var now = new Date();
  var published = new Date(postTime.getAttribute('datetime'));

  if (now - published < twoYears) {
    return;
  }

  var warning = document.createElement('div');
  warning.innerHTML = "<p>This article was published more than two years ago.\nThis means the content may be out of date or no longer relevant. You should\nverify that any technical information in this article is still current before\nrelying upon it for your own purposes.</p>";
  warning.classList.add('old-post-warning');
  document.querySelector('.post__meta').appendChild(warning);
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFFBQVEsR0FBRyxXQUFqQjs7QUFFQSxDQUFDLFlBQU07QUFDTCxNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQ0FBdkIsQ0FBakI7O0FBQ0EsTUFBSSxDQUFDRixRQUFMLEVBQWU7QUFDYjtBQUNEOztBQUVELE1BQU1HLEdBQUcsR0FBRyxJQUFJQyxJQUFKLEVBQVo7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSUQsSUFBSixDQUFTSixRQUFRLENBQUNNLFlBQVQsQ0FBc0IsVUFBdEIsQ0FBVCxDQUFsQjs7QUFFQSxNQUFJSCxHQUFHLEdBQUdFLFNBQU4sR0FBa0JOLFFBQXRCLEVBQWdDO0FBQzlCO0FBQ0Q7O0FBRUQsTUFBTVEsT0FBTyxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQUQsRUFBQUEsT0FBTyxDQUFDRSxTQUFSO0FBSUFGLEVBQUFBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0Isa0JBQXRCO0FBRUFWLEVBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ1UsV0FBdEMsQ0FBa0RMLE9BQWxEO0FBQ0QsQ0FyQkQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL21sby5pby8uL2Fzc2V0cy9qcy9wb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHR3b1llYXJzID0gNjMxMTUyMDAwMDA7XG5cbigoKSA9PiB7XG4gIGNvbnN0IHBvc3RUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGltZVtpdGVtcHJvcD1cImRhdGVQdWJsaXNoZWRcIl0nKTtcbiAgaWYgKCFwb3N0VGltZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHB1Ymxpc2hlZCA9IG5ldyBEYXRlKHBvc3RUaW1lLmdldEF0dHJpYnV0ZSgnZGF0ZXRpbWUnKSk7XG5cbiAgaWYgKG5vdyAtIHB1Ymxpc2hlZCA8IHR3b1llYXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3YXJuaW5nLmlubmVySFRNTCA9IGA8cD5UaGlzIGFydGljbGUgd2FzIHB1Ymxpc2hlZCBtb3JlIHRoYW4gdHdvIHllYXJzIGFnby5cblRoaXMgbWVhbnMgdGhlIGNvbnRlbnQgbWF5IGJlIG91dCBvZiBkYXRlIG9yIG5vIGxvbmdlciByZWxldmFudC4gWW91IHNob3VsZFxudmVyaWZ5IHRoYXQgYW55IHRlY2huaWNhbCBpbmZvcm1hdGlvbiBpbiB0aGlzIGFydGljbGUgaXMgc3RpbGwgY3VycmVudCBiZWZvcmVcbnJlbHlpbmcgdXBvbiBpdCBmb3IgeW91ciBvd24gcHVycG9zZXMuPC9wPmA7XG4gIHdhcm5pbmcuY2xhc3NMaXN0LmFkZCgnb2xkLXBvc3Qtd2FybmluZycpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0X19tZXRhJykuYXBwZW5kQ2hpbGQod2FybmluZyk7XG59KSgpO1xuIl0sIm5hbWVzIjpbInR3b1llYXJzIiwicG9zdFRpbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJub3ciLCJEYXRlIiwicHVibGlzaGVkIiwiZ2V0QXR0cmlidXRlIiwid2FybmluZyIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=