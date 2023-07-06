import './App.css';

import Gleap from 'gleap';
import { useEffect } from 'react';

/** COMMENT THE LINE BELOW */
Gleap.initialize("kIPBu79zTXtebCawI6OQhP8mdrJCTGIu");

function App() {

  useEffect(() => {
    // Create the report designer with default options

    // eslint-disable-next-line no-undef
    var designer = new Stimulsoft.Designer.StiDesigner(null, "Designer", false);



    // Show the report designer in div content

    designer.renderHtml("content");



    // Create a new report object

    // eslint-disable-next-line no-undef
    var report = new Stimulsoft.Report.StiReport();



    // // Load report template in the report object

    // report.loadFile("report url");



    // Assign report object to report designer

    designer.report = report;
  }, []);

  return (
    <div className="App">
      <div id="content"></div>
    </div>
  );
}

export default App;
