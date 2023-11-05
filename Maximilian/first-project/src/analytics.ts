let logged;

function sendAnalysis(data: string) {
  console.log(data);
  logged = true;
}

sendAnalysis("this is analytics");
