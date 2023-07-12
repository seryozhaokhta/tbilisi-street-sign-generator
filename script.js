document.getElementById("generateSign").addEventListener("click", function () {
  var houseNumber = document.getElementById("houseNumber").value;
  var buildingLetter = document.getElementById("buildingLetter").value;
  var streetName = document.getElementById("streetName").value;
  var streetNameEng = document.getElementById("streetNameEng").value;
  var district = document.getElementById("district").value;
  var showQR = document.getElementById("showQR").checked;

  var svgContainer = document.getElementById("svgContainer");
  svgContainer.innerHTML = "";

  var svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("width", "500");
  svgElement.setAttribute("height", "300");
  svgElement.setAttribute("version", "1.1");
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("id", "mySvgElement");

  var rectElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  rectElement.setAttribute("x", "45");
  rectElement.setAttribute("y", "25");
  rectElement.setAttribute("width", "290");
  rectElement.setAttribute("height", "180");
  rectElement.setAttribute("fill", "#3F62DA");
  rectElement.setAttribute("rx", "10");
  rectElement.setAttribute("ry", "10");
  svgElement.appendChild(rectElement);

  // House number text
  var textElementHouse = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textElementHouse.setAttribute("x", "230");
  textElementHouse.setAttribute("y", "90");
  textElementHouse.setAttribute("font-family", "Helvetica, Arial, sans-serif");
  textElementHouse.setAttribute("font-size", "80px");
  textElementHouse.setAttribute("fill", "#ffffff");
  textElementHouse.setAttribute("font-weight", "bold");
  textElementHouse.textContent = houseNumber;
  svgElement.appendChild(textElementHouse);

  // Building letter text
  if (buildingLetter !== "") {
    var textElementLetter = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    textElementLetter.setAttribute("x", "318");
    textElementLetter.setAttribute("y", "50");
    textElementLetter.setAttribute(
      "font-family",
      "Noto Sans Georgian, Helvetica, Arial, sans-serif"
    );
    textElementLetter.setAttribute("font-size", "21px");
    textElementLetter.setAttribute("fill", "#ffffff");
    textElementLetter.setAttribute("font-weight", "bold");
    textElementLetter.textContent = buildingLetter;
    svgElement.appendChild(textElementLetter);
  }

  // Street name text
  var textElementStreet = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textElementStreet.setAttribute("x", "50");
  textElementStreet.setAttribute("y", "50");
  textElementStreet.setAttribute(
    "font-family",
    "Noto Sans Georgian, Helvetica, Arial, sans-serif"
  );
  textElementStreet.setAttribute("font-size", "21px");
  textElementStreet.setAttribute("fill", "#ffffff");
  textElementStreet.setAttribute("font-weight", "bold");
  textElementStreet.textContent = streetName;
  svgElement.appendChild(textElementStreet);

  // District text
  var textElementDistrict = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textElementDistrict.setAttribute("x", "50");
  textElementDistrict.setAttribute("y", "190");
  textElementDistrict.setAttribute(
    "font-family",
    "Noto Sans Georgian, Helvetica, Arial, sans-serif"
  );
  textElementDistrict.setAttribute("font-size", "8px");
  textElementDistrict.setAttribute("fill", "#ffffff");
  textElementDistrict.setAttribute("font-weight", "bold");
  textElementDistrict.textContent = district;
  svgElement.appendChild(textElementDistrict);

  // Street name English text
  var textElementStreetEng = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  textElementStreetEng.setAttribute("x", "50");
  textElementStreetEng.setAttribute("y", "70");
  textElementStreetEng.setAttribute(
    "font-family",
    "Helvetica, Arial, sans-serif"
  );
  textElementStreetEng.setAttribute("font-size", "12px");
  textElementStreetEng.style.fill = "#ffffff";
  textElementStreetEng.textContent = streetNameEng;
  svgElement.appendChild(textElementStreetEng);

  // QR code frame
  if (showQR) {
    var qrFrame = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    qrFrame.setAttribute("x", "316");
    qrFrame.setAttribute("y", "180");
    qrFrame.setAttribute("width", "12");
    qrFrame.setAttribute("height", "12");
    qrFrame.setAttribute("stroke", "#ffffff");
    qrFrame.setAttribute("fill", "transparent");
    qrFrame.setAttribute("rx", "5");
    qrFrame.setAttribute("ry", "5");
    svgElement.appendChild(qrFrame);
  }

  svgContainer.appendChild(svgElement);

  document.getElementById("downloadSvg").style.display = "block";
});

document.getElementById("downloadSvg").addEventListener("click", function () {
  var svgElement = document.getElementById("mySvgElement");
  var serializer = new XMLSerializer();
  var svgData = serializer.serializeToString(svgElement);

  var a = document.createElement("a");
  a.href =
    "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  a.download = "street_sign.svg";
  a.click();
});
