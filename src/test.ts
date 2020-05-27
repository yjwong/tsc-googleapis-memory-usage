// Ignore the compilation error; it is inconsequential to the memory usage issue.
import { auth } from 'googleapis';

// When using the Google Drive SDK, I was able to significantly cut down memory
// use just by using the following instead:

// import { drive_v3 } from 'googleapis/build/src/apis/drive/v3';
// import { AuthPlus } from 'googleapis-common/build/src/authplus';
