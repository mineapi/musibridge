import {PlaybackProvider} from "./PlaybackProvider";

let songTitle : string;
let songArtist : string;

let provider : PlaybackProvider;
let ref : string;

export function changeTrack(provider : PlaybackProvider, ref : string) : void {
    songTitle = "";
    songArtist = "";
    provider = null;
    ref = "";
}

export function getSongTitle() : string { return songTitle; }
export function getSongArtist() : string { return songArtist; }
export function getProvider() : PlaybackProvider { return provider; }
export function getSongRef () : string { return ref; }