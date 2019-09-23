import { Common } from './spectra-audio-recorder-plugin.common';

declare var org: any;

export class SpectraAudioRecorderPlugin {

    private _audioRecorder: any;

    public HelloWorld(): string {
        return org.project_spectra.spectraaudiorecorder.AudioRecorder.HelloWorld();
    }

    public launchTask(recordingPath: String): void {
        this._audioRecorder = new org.project_spectra.spectraaudiorecorder.AudioRecorder();

        this._audioRecorder.launchTask(recordingPath);
        //?org.project_spectra.spectraaudiorecorder.AudioRecorder.launchTask(recordingPath);
    }

    public stopTask(): void {
        this._audioRecorder.stopTask();
        //?org.project_spectra.spectraaudiorecorder.AudioRecorder.stopTask();
    }
}
