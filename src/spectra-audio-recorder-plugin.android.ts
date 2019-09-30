import { Common } from './spectra-audio-recorder-plugin.common';
import { android as androidApp } from "tns-core-modules/application";

declare var org: any;

export class SpectraAudioRecorderPlugin {

    private _audioRecorderAsyncTask: any;

    public HelloWorld(): string {
        return org.project_spectra.spectraaudiorecorder.AudioRecorder.HelloWorld();
    }

    public launchTask(recordingPath: string): Promise<any> {
        console.log('Audio Recorder Plugin Starting...');
        //console.log(recordingPath);

        return new Promise (async (resolve, reject) => {
            try {
                this._audioRecorderAsyncTask =
                new org.project_spectra.spectraaudiorecorder.AudioRecorder.RecordWaveTask(androidApp.context); //Constructor

                //console.log("Recording to: " + recordingPath);
                this._audioRecorderAsyncTask.execute(null); //AsyncTask params
            } catch (ex) {
                console.log(ex);
                reject(ex);
            }
        });
    }

    public stopTask() {
        return new Promise (async (resolve, reject) => {
            try {
                this._audioRecorderAsyncTask.cancel(false);
                this._audioRecorderAsyncTask = null;
            } catch (ex) {
                console.log(ex);
                reject(ex);
            }
        });
    }
}
