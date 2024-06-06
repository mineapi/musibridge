export abstract class SearchProvider {
    abstract results() : { name : string, artist : string, ref : string; }
}