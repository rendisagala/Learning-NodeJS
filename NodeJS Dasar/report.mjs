import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
//dibuat true biar error
process.report.filename = "report.json";

function sampleError() {
  throw new Error(`Oops, an error`);
}

sampleError();
