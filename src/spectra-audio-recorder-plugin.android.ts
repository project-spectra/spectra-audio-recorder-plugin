import { Common } from './spectra-audio-recorder-plugin.common';

declare var org: any;

export class SpectraAudioRecorderPlugin {
    public HelloWorld(): string {
        return org.project_spectra.spectraaudiorecorder.AudioRecorder.HelloWorld();
    }
}
