import { Common } from './spectra-audio-recorder-plugin.common';

declare var org: any;

export class SpectraAudioRecorderPlugin {

    private _audioRecorderAsyncTask: any;

    public HelloWorld(): string {
        return org.project_spectra.spectraaudiorecorder.AudioRecorder.HelloWorld();
    }

    public launchTask(recordingPath: string): Promise<any> {
        console.log('Audio Recorder Plugin Starting.');
        console.log(recordingPath);

        return new Promise (async (resolve, reject) => {
            try {
                this._audioRecorderAsyncTask =
                new org.project_spectra.spectraaudiorecorder.AudioRecorder.RecordWaveTask();

                //argument should be the File file.wav
                var wavFile = new File([""], recordingPath);
                console.log(wavFile);
                
                this._audioRecorderAsyncTask.execute(wavFile);
            } catch (ex) {
                console.log(ex);
                reject(ex);
            }
        });
    }

    public stopTask() {
        return new Promise (async (resolve, reject) => {
            try {
                this._audioRecorderAsyncTask.cancel(true);
                this._audioRecorderAsyncTask = null;
            } catch (ex) {
                console.log(ex);
                reject(ex);
            }
        });
    }
}
