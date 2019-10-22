
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.children.length > 0){
    htmlElement.removeChild(Array.from(htmlElement.children)[0]);
  }
  
  let p = document.createElement("p");
  p.innerText = string;
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);

// module.exports = warmUp;  
// export 'default