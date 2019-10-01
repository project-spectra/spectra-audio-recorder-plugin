import { Common } from './spectra-audio-recorder-plugin.common';

declare var org: any;

export class SpectraAudioRecorderPlugin {

    private _audioRecorder: any;

    public HelloWorld(): string {
        console.log(org.project_spectra.spectraaudiorecorder.AudioRecorder.HelloWorld());
        console.log(org.project_spectra.spectraaudiorecorder.AudioRecorder.WorldHello());
        return org.project_spectra.spectraaudiorecorder.AudioRecorder.HelloWorld();
    }

    public launchTask(recordingPath: string): Promise<any> {
        console.log('Audio Recorder Plugin Starting.');
        console.log(recordingPath);

        this._audioRecorder = new org.project_spectra.spectraaudiorecorder.AudioRecorder();
        console.log(this._audioRecorder);

        console.log(org.project_spectra.spectraaudiorecorder.AudioRecorder.HelloWorld());
        console.log(org.project_spectra.spectraaudiorecorder.AudioRecorder.WorldHello());

        return new Promise (async (resolve, reject) => {
            try {
                this._audioRecorder = new org.project_spectra.spectraaudiorecorder.AudioRecorder();
                console.log(this._audioRecorder);

                // argument should be the File file.wav
                // var wavFile = new File([""], recordingPath);
                console.log("Recording to: " + recordingPath);
                this._audioRecorder.startTask(recordingPath, new org.project_spectra.spectraaudiorecorder.OnFileWrittenListener({
                    onFileWrittenCallback: (fileSize, elapsedMs) => {
                        console.log(fileSize, elapsedMs);
                        resolve({fileSize, elapsedMs});
                    }
                }));

            } catch (ex) {
                console.log(ex);
                reject(ex);
            }
        });
    }

    /**
     * Stops the task - the actual writing of the WAV to disk may take some time, thus accepts a callback.
     */
    public stopTask() {
        return new Promise (async (resolve, reject) => {
            try {
                this._audioRecorder.stopTask();
                // this._audioRecorderAsyncTask = null;
            } catch (ex) {
                console.log(ex);
                reject(ex);
            }
        });
    }
}
